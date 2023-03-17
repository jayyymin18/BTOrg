/**
 * Title : BillOfMaterialTriggerHandler
 * @author : Nishit Suthar (MV Clouds)
 * @version 1.0
 * @description : NoN
 * @uses : -- TriggerHandler --
 * @history : NoN
 * yyyy-mm-dd : 2023-03-17
 */

public without sharing class BillOfMaterialTriggerHandler{
    private boolean triggerIsExecuting;
    private integer triggerSize;

    public BillOfMaterialTriggerHandler(Boolean triggerIsExecuting, Integer triggerSize) {
        this.triggerIsExecuting = triggerIsExecuting;
        this.triggerSize = triggerSize;
    }

    
    public void beforeInsert(List<buildertek__Project_Selection_Sheet_Takeoff__c> newBillOfMaterials){
        
    }
    public void beforeUpdate(List<buildertek__Project_Selection_Sheet_Takeoff__c> newBillOfMaterials, List<buildertek__Project_Selection_Sheet_Takeoff__c> oldBillOfMaterials, Map<Id,buildertek__Project_Selection_Sheet_Takeoff__c> newBillOfMaterialMap, Map<Id,buildertek__Project_Selection_Sheet_Takeoff__c> oldBillOfMaterialMap){
       
    }

    public void beforeDelete(List<buildertek__Project_Selection_Sheet_Takeoff__c> oldBillOfMaterials, Map<Id,buildertek__Project_Selection_Sheet_Takeoff__c> oldBillOfMaterialMap){
        
    }

    public void afterInsert(List<buildertek__Project_Selection_Sheet_Takeoff__c> newBillOfMaterials, Map<Id,buildertek__Project_Selection_Sheet_Takeoff__c> newBillOfMaterialMap){
        
    }
    public void afterUpdate(List<buildertek__Project_Selection_Sheet_Takeoff__c> newBillOfMaterials, List<buildertek__Project_Selection_Sheet_Takeoff__c> oldBillOfMaterials, Map<Id,buildertek__Project_Selection_Sheet_Takeoff__c> newBillOfMaterialMap, Map<Id,buildertek__Project_Selection_Sheet_Takeoff__c> oldBillOfMaterialMap){

        List<buildertek__Select_Sheet__c> BomLineList = new List<buildertek__Select_Sheet__c>([SELECT Id, Name, buildertek__BL_SERVICE_CATEGORY__c, buildertek__Tax__c, buildertek__Tax_Percent__c, buildertek__Selection_Sheet_Takeoff__c FROM buildertek__Select_Sheet__c WHERE buildertek__Selection_Sheet_Takeoff__c IN :newBillOfMaterialMap.keySet()]);

        if (BomLineList.size() > 0) {
            for (buildertek__Select_Sheet__c bomLine : BomLineList) {
                buildertek__Project_Selection_Sheet_Takeoff__c BOM = newBillOfMaterialMap.get(bomLine.buildertek__Selection_Sheet_Takeoff__c);
                //* checking for service category to update tax field on BOM line
                if ((bomLine.buildertek__BL_SERVICE_CATEGORY__c == 'Slab' || bomLine.buildertek__BL_SERVICE_CATEGORY__c == 'Slab - Quartz' || bomLine.buildertek__BL_SERVICE_CATEGORY__c == 'Slab - Granite' || bomLine.buildertek__BL_SERVICE_CATEGORY__c == 'Slab - Porcelain' || bomLine.buildertek__BL_SERVICE_CATEGORY__c == 'Misc' || bomLine.buildertek__BL_SERVICE_CATEGORY__c == 'Option') && bomLine.buildertek__Tax__c == true) {
                    bomLine.buildertek__Tax_Percent__c = BOM.buildertek__Tax_Rate_1__c;
                } else if ((bomLine.buildertek__BL_SERVICE_CATEGORY__c == 'Fab' || bomLine.buildertek__BL_SERVICE_CATEGORY__c == 'Edge') && bomLine.buildertek__Tax__c == true && BOM.buildertek__Tax_on_Fabrication_Required__c == true) {
                    bomLine.buildertek__Tax_Percent__c = BOM.buildertek__Tax_Rate_2__c;
                } else {
                    bomLine.buildertek__Tax_Percent__c = 0;
                }
            }
            update BomLineList;
        }
    }

    public void afterDelete(List<buildertek__Project_Selection_Sheet_Takeoff__c> oldBillOfMaterials, Map<Id,buildertek__Project_Selection_Sheet_Takeoff__c> oldBillOfMaterialMap){
        
    }

    public void afterUndelete(List<buildertek__Project_Selection_Sheet_Takeoff__c> newBillOfMaterials, Map<Id,buildertek__Project_Selection_Sheet_Takeoff__c> newBillOfMaterialMap){
        
    }
}