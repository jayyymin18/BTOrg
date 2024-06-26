/*
Copyright (c) 2017-2018, BuilderTek.
All rights reserved.

Developed By: Sagar
Date:  10-Nov-2017
Last Modified By: DILIGENT FORCE LABS
Date: 11-Mar-2020
*/
public with sharing class BudgetItemTriggerHandler {
    //Boolean variable to allow skipping execution of trigger in certain scenarios
	public static Boolean blnSkipBudgetItemTrigger = false;

    private boolean m_isExecuting = false;
    private integer BatchSize = 0;

    public BudgetItemTriggerHandler (boolean isExecuting, integer size){
        m_isExecuting = isExecuting;
        BatchSize = size;
    }

 	public void OnBeforeInsert(List<Budget_Item__c> newBudgetItems){
     	system.debug('newBudgetItems: ' + newBudgetItems);
        system.debug(newBudgetItems[0].Budget__c);
     	//for()
     	/*BT_Utils.genrateAutoNumber([Select Id, Auto_Number1__c from Budget_Item__c
 									 where Budget__c =:newBudgetItems[0].Budget__c
 									 ORDER BY CREATEDDATE DESC  LIMIT 1], newBudgetItems, 'Auto_Number1__c');*/

        List<Budget_Item__c> bItems = new List<Budget_Item__c>();
     	for(Budget_Item__c bItem: newBudgetItems) {
     		if(bItem.buildertek__Group__c == null) {
     			bItems.add(bItem);
     		}
     	}

        system.debug('bItems.isEmpty(): ' + bItems.isEmpty());
     	// Set default Grouping
     	if(!bItems.isEmpty()) BudgetDAO.setDefaultGrouping(bItems);

     	// Set default procut name to budget item name
     	//BudgetDAO.setProductNameToItemName(newBudgetItems);


 	}

 	public void OnBeforeUpdate(Budget_Item__c[] oldBudgetItems, Budget_Item__c[] updatedBudgetItems, Map<ID, Budget_Item__c> BudgetItemMap){

		List<Budget_Item__c> bItems = new List<Budget_Item__c>();
		for(Budget_Item__c bItem: updatedBudgetItems) {
			if(bItem.buildertek__Group__c == null) {
				bItems.add(bItem);
			}
		}

	   system.debug('bItems.isEmpty(): ' + bItems.isEmpty());
		// Set default Grouping
		if(!bItems.isEmpty()) BudgetDAO.setDefaultGrouping(bItems);
 	}

 	public void OnBeforeDelete(Budget_Item__c[] BudgetItemToDelete, Map<ID, Budget_Item__c> BudgetItemMap){
		Set<Id> budgetLineIds = BudgetItemMap.keySet();

		//* for TimeSheet
		List<buildertek__BT_Time_Sheet__c> timeSheetList = [SELECT Id, Name, buildertek__BT_Budget__c, buildertek__BT_Budget_Line__c FROM buildertek__BT_Time_Sheet__c WHERE buildertek__BT_Budget_Line__c IN: budgetLineIds];
		for (buildertek__BT_Time_Sheet__c timeSheet : timeSheetList) {
			timeSheet.buildertek__BT_Budget__c = null;
			timeSheet.buildertek__BT_Budget_Line__c = null;
		}
		if (timeSheetList.size() > 0 && blnSkipBudgetItemTrigger == false) {
			HandlerTimeSheet.blnSkipTimeSheetUpdateTrigger = true;
			update timeSheetList;
			HandlerTimeSheet.blnSkipTimeSheetUpdateTrigger = false;
		}

		//* for expense
     	List<buildertek__Expense__c> expenseList = [SELECT Id, Name, buildertek__Budget__c, buildertek__Budget_Line__c FROM buildertek__Expense__c WHERE buildertek__Budget_Line__c IN: budgetLineIds];
		for (buildertek__Expense__c expense : expenseList) {
			expense.buildertek__Budget__c = null;
			expense.buildertek__Budget_Line__c = null;
		}
		if (expenseList.size() > 0) {
			ExpenseToBudgetItemTriggerHandler.blnSkipExpenseUpdateTrigger = true;
			update expenseList;
			ExpenseToBudgetItemTriggerHandler.blnSkipExpenseUpdateTrigger = false;
		}

		//* for timeCard
		List<buildertek__Time_Cards__c> timeCardList = [SELECT Id, Name, buildertek__Budget__c, buildertek__Budget_Line__c FROM buildertek__Time_Cards__c WHERE buildertek__Budget_Line__c IN: budgetLineIds];
		for (buildertek__Time_Cards__c timeCard : timeCardList) {
			timeCard.buildertek__Budget__c = null;
			timeCard.buildertek__Budget_Line__c = null;
		}
		if (timeCardList.size() > 0 ) {
			TimeCardTriggerHandler.blnSkipTrigger = true;
			update timeCardList;
			TimeCardTriggerHandler.blnSkipTrigger = false;
		}

		//* for Invoice(AP)
		List<buildertek__Account_Payable_Clone__c> invoiceAPList = [SELECT Id, Name, buildertek__Budget__c, buildertek__Budget_Line__c FROM buildertek__Account_Payable_Clone__c WHERE buildertek__Budget_Line__c IN: budgetLineIds];
		for (buildertek__Account_Payable_Clone__c invoiceAP : invoiceAPList) {
			invoiceAP.buildertek__Budget__c = null;
			invoiceAP.buildertek__Budget_Line__c = null;
		}
		if (invoiceAPList.size() > 0) {
			InvoiceAPTriggerHandler.skipDeleteMethod = true;
			update invoiceAPList;
			InvoiceAPTriggerHandler.skipDeleteMethod = false;
		}

		//* for Sales Invoice
		list<buildertek__Billings__c> slList = [SELECT Id, Name, buildertek__BT_Budget_Line__c, buildertek__Budget__c FROM buildertek__Billings__c WHERE buildertek__BT_Budget_Line__c IN: budgetLineIds ];
		for(buildertek__Billings__c sl : slList){
			system.debug('inside delete budget line');
			sl.buildertek__BT_Budget_Line__c = null;
			sl.buildertek__Budget__c = null;
		}
		if(slList.size() > 0){
			InvoiceTrigger_HDL.skipsalesInvoiceUpdate = true;
			update slList;
			InvoiceTrigger_HDL.skipsalesInvoiceUpdate = false;
		}

		//* for Change Order
		list<buildertek__Change_Order__c> COList = [SELECT Id, Name, buildertek__Budget_Line__c, buildertek__Budget__c FROM buildertek__Change_Order__c WHERE buildertek__Budget_Line__c IN: budgetLineIds ];
		for(buildertek__Change_Order__c co : COList){
			system.debug('inside delete budget line for CO');
			co.buildertek__Budget_Line__c = null;
			co.buildertek__Budget__c = null;
		}
		if(COList.size() > 0){
			ChangeOrderTriggerHandler.blnSkipChangeOrderUpdateTrigger = true;
			update COList;
			ChangeOrderTriggerHandler.blnSkipChangeOrderUpdateTrigger = false;
		}

		//* for  Invoice PO
		list<buildertek__Account_Payable__c> invoicePOList = [SELECT Id, Name, buildertek__BT_Budget_Line__c, buildertek__Budget__c FROM buildertek__Account_Payable__c WHERE buildertek__BT_Budget_Line__c IN: budgetLineIds ];
		for(buildertek__Account_Payable__c invoicePo : invoicePOList){
			invoicePo.buildertek__BT_Budget_Line__c = null;
			invoicePo.buildertek__Budget__c = null;
		}
		if(invoicePOList.size() > 0 && blnSkipBudgetItemTrigger == false){
			AccountPayableHelper.skipInvoicePOUpdate = true;
			update invoicePOList;
			AccountPayableHelper.skipInvoicePOUpdate = false;
		}

		//* for Payment
		List<buildertek__BT_Payment__c> paymentList = [SELECT Id, Name, buildertek__BT_Budget__c, buildertek__BT_Budget_Line__c FROM buildertek__BT_Payment__c WHERE buildertek__BT_Budget_Line__c IN: budgetLineIds];
		for (buildertek__BT_Payment__c payment : paymentList) {
			payment.buildertek__BT_Budget__c = null;
			payment.buildertek__BT_Budget_Line__c = null;
		}
		if (paymentList.size() > 0 && blnSkipBudgetItemTrigger == false) {
			PaymentTriggerHandler.isSkipExecution = true;
			update paymentList;
			PaymentTriggerHandler.isSkipExecution = false;
		}

		//* for cash disbursement
		List<buildertek__Payment__c> cashDisbursementList = [SELECT Id, Name, buildertek__BT_Budget__c, buildertek__BT_Budget_Line__c FROM buildertek__Payment__c WHERE buildertek__BT_Budget_Line__c IN: budgetLineIds];
		for (buildertek__Payment__c cashDisbursement : cashDisbursementList) {
			cashDisbursement.buildertek__BT_Budget__c = null;
			cashDisbursement.buildertek__BT_Budget_Line__c = null;
		}
		if (cashDisbursementList.size() > 0 && blnSkipBudgetItemTrigger == false) {
			CashDisbursementTriggerHandler.isSkipExecution = true;
			update cashDisbursementList;
			CashDisbursementTriggerHandler.isSkipExecution = false;
		}

		//* for TimeSheetEntry
		List<buildertek__BT_Time_Sheet_Entry__c> timeSheetEntryList = [SELECT Id, Name, buildertek__BT_Budget__c, buildertek__BT_Budget_Line__c FROM buildertek__BT_Time_Sheet_Entry__c WHERE buildertek__BT_Budget_Line__c IN: budgetLineIds];
		for (buildertek__BT_Time_Sheet_Entry__c timeSheetEntry : timeSheetEntryList) {
			timeSheetEntry.buildertek__BT_Budget__c = null;
			timeSheetEntry.buildertek__BT_Budget_Line__c = null;
		}
		if (timeSheetEntryList.size() > 0 && blnSkipBudgetItemTrigger == false) {
			TimeSheetEntryHandler.isExecuting = true;
			update timeSheetEntryList;
			TimeSheetEntryHandler.isExecuting = false;
		}

		//* for Asset History (buildertek__Asset_History__c)
		List<buildertek__Asset_History__c> assetHistoryList = [SELECT Id, Name, buildertek__BT_Budget__c, buildertek__BT_Budget_Line__c FROM buildertek__Asset_History__c WHERE buildertek__BT_Budget_Line__c IN: budgetLineIds];
		for (buildertek__Asset_History__c assetHistory : assetHistoryList) {
			assetHistory.buildertek__BT_Budget__c = null;
			assetHistory.buildertek__BT_Budget_Line__c = null;
		}
		if (assetHistoryList.size() > 0 && blnSkipBudgetItemTrigger == false) {
			AssestManagerHandler.blnSkipAssetHistoryTrigger = true;
			update assetHistoryList;
			AssestManagerHandler.blnSkipAssetHistoryTrigger = false;
		}

		//* for Import PO & Add PO
		List<buildertek__Purchase_Order__c> poList = [SELECT Id, Name, buildertek__Budget__c, buildertek__Budget_Line__c FROM buildertek__Purchase_Order__c WHERE buildertek__Budget_Line__c IN: budgetLineIds];
		for (buildertek__Purchase_Order__c singlePO : poList) {
			singlePO.buildertek__Budget__c = null;
			singlePO.buildertek__Budget_Line__c = null;
		}

		if (poList.size() > 0){
			PurchaseOrderTriggerHandler.blnSkipPurchaseOrderUpdateTrigger = true;
			update poList;
			PurchaseOrderTriggerHandler.blnSkipPurchaseOrderUpdateTrigger = false;
		}

		//* for Add PO Line
		List<buildertek__Purchase_Order_Item__c> poLineList = [SELECT Id, Name, buildertek__BT_Budget__c, buildertek__Budget_Item__c FROM buildertek__Purchase_Order_Item__c WHERE buildertek__Budget_Item__c IN: budgetLineIds];
		for (buildertek__Purchase_Order_Item__c singlePOLine : poLineList) {
			singlePOLine.buildertek__BT_Budget__c = null;
			singlePOLine.buildertek__Budget_Item__c = null;
		}
		if (poLineList.size() > 0){
			PurchaseOrderItemTriggerHandler.blnSkipPurchaseOrderItemUpdateTrigger = true;
			update poLineList;
			PurchaseOrderItemTriggerHandler.blnSkipPurchaseOrderItemUpdateTrigger = false;
		}

 	}

 	public void OnAfterInsert(Budget_Item__c[] newBudgetItems, Map<ID, Budget_Item__c> newBudgetItemsMap){

 	}

 	public void OnAfterUpdate(Budget_Item__c[] oldBudgetItems, Budget_Item__c[] updatedBudgetItems, Map<ID, Budget_Item__c> BudgetItemMap, Map<Id, Budget_Item__c> oldBudgetItemsMap){

 	}

 	// public void OnBeforeUpdate(Budget_Item__c[] newBudgetItems, Map<ID, Budget_Item__c> newBudgetItemsMap){

 	// }

 	public void OnAfterDelete(Budget_Item__c[] oldBudgetItems){

 	}

	public void insertCostCode(List<Budget_Item__c> newBudgetItems) {
		try {
			List<String> productIds = new List<String>();

			// Collect Product IDs from Budget Lines
			for (Budget_Item__c budgetItem : newBudgetItems) {
				productIds.add(budgetItem.buildertek__Product__c);
			}
			System.debug('karan test-->'+productIds);

			// Query the Product2 object to retrieve cost codes
			Map<String, Product2> productCostCodes = new Map<String, Product2>();
			for (Product2 product : [SELECT Id, buildertek__Cost_Code__c FROM Product2 WHERE Id IN :productIds AND buildertek__Cost_Code__c != null]) {
				productCostCodes.put(product.Id, product);
			}

			// Update the Budget Line Records
			for (Budget_Item__c budgetItem : newBudgetItems) {
				Product2 product = productCostCodes.get(budgetItem.buildertek__Product__c);
				if (product != null) {
					if (budgetItem.buildertek__Cost_Code__c == null) {
						budgetItem.buildertek__Cost_Code__c = product.buildertek__Cost_Code__c;
					}
				}
			}
		} catch (Exception e) {
			System.debug('error--->'+e.getMessage());
			System.debug('error line--->'+e.getLineNumber());
		}
	}

}