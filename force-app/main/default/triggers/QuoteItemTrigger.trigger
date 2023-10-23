trigger QuoteItemTrigger on Quote_Item__c (after delete, after insert, after undelete, after update, before delete, before insert, before update) {
    // Changes for BUIL-3608 starts from here  Note:- (we made boolean variable "updateCostCode") beacause of the trigger is Deactivate before we starts working on it.
    public static Boolean updateCostCode = false;
    if (updateCostCode) {
        if(!BT_Utils.isTriggerDeactivate('Quote_Item__c')){
            QuoteItemTriggerHandler handler = new QuoteItemTriggerHandler (Trigger.isExecuting, Trigger.size);
      
          if(Trigger.isInsert && Trigger.isBefore){
              system.debug('Trigger.New: ' + Trigger.New);
              handler.OnBeforeInsert(Trigger.new);
              handler.insertCostCode(Trigger.new);
          }
          
             if(Trigger.isUpdate && Trigger.isBefore){
              system.debug('Trigger.New: ' + Trigger.New);
              handler.OnBeforeUpdateQuoteLine(Trigger.new);
          }
  
          if(Trigger.isDelete && Trigger.isBefore){
              handler.OnBeforeDelete(Trigger.old, Trigger.oldMap);
          }
           
      } 
    } else {
        if(!BT_Utils.isTriggerDeactivate('Quote_Item__c')){
            QuoteItemTriggerHandler handler = new QuoteItemTriggerHandler (Trigger.isExecuting, Trigger.size);
      
        if(Trigger.isInsert && Trigger.isBefore){
            handler.insertCostCode(Trigger.new);
        }
      } 
    }
    
}