/*
Copyright (c) 2017-2018, BuilderTek.
All rights reserved. 

Developed By: Sagar
Date: 19/09/2017
*/

trigger BudgetTrigger on Budget__c (after delete, after insert, after undelete, after update, before delete, before insert, before update) {
    
    if(!BT_Utils.isTriggerDeactivate('Budget__c') && !BudgetTriggerHandler.blnSkipBudgetTrigger){
    	
    	BudgetTriggerHandler handler = new BudgetTriggerHandler (Trigger.isExecuting, Trigger.size);
	
		if(Trigger.isInsert && Trigger.isBefore){
			handler.OnBeforeInsert(Trigger.new);
		}
		 
		else if(Trigger.isInsert && Trigger.isAfter){
			handler.OnAfterInsert(Trigger.new, Trigger.newMap);
			handler.onAfterInsertforProject(Trigger.new);
		}
		
		else if(Trigger.isUpdate && Trigger.isBefore){
			handler.OnBeforeUpdate(Trigger.old, Trigger.new, Trigger.newMap);
		}
		
		else if(Trigger.isUpdate && Trigger.isAfter){
			handler.onAfterUpdate(Trigger.new, Trigger.oldMap);
		}
		
		else if(Trigger.isDelete && Trigger.isBefore){
			handler.OnBeforeDelete(Trigger.old, Trigger.oldMap); 
		}
		
		else if(Trigger.isDelete && Trigger.isAfter){
			handler.OnAfterDelete(Trigger.old); 
		}
    }
}