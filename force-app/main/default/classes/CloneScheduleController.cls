public without sharing class CloneScheduleController {

    @AuraEnabled
    public static string cloneScheduleRecords(Id oldScheduleId){

        if(oldScheduleId !=null){

            String scheduleObj = 'buildertek__Schedule__c'; 
            String scheduleQuery = 'SELECT ';
            Map<String, Schema.SObjectField> ScheduleFieldMap = Schema.getGlobalDescribe().get(scheduleObj).getDescribe().fields.getMap();
            for (String fieldName : ScheduleFieldMap.keySet()) {
                scheduleQuery += fieldName + ', ';
            }
            scheduleQuery = scheduleQuery.removeEnd(', ') + ' FROM ' + scheduleObj +' WHERE id=\'' + oldScheduleId + '\'';
            buildertek__Schedule__c originalScheduleRec = Database.query(scheduleQuery);
            buildertek__Schedule__c scheduleCopy  = originalScheduleRec.clone(false, false, false, false);     
            insert scheduleCopy;
    


            String scheduleItemObj = 'buildertek__Project_Task__c'; 
            String scheduleItemQuery = 'SELECT ';
            Map<String, Schema.SObjectField> ScheduleItemFieldMap = Schema.getGlobalDescribe().get(scheduleItemObj).getDescribe().fields.getMap();
            for (String fieldName : ScheduleItemFieldMap.keySet()) {
                // if(fieldName !='buildertek__Dependency__c'){
                    scheduleItemQuery += fieldName + ', ';
                // }
            }
            scheduleItemQuery = scheduleItemQuery.removeEnd(', ') + ' FROM ' + scheduleItemObj +' WHERE buildertek__Schedule__c=\'' + oldScheduleId + '\'';
            List<buildertek__Project_Task__c> originalScheduleItemRec = Database.query(scheduleItemQuery);
            Map<String, String> predecessorMap = new Map<String, String>();
            Map<Id, buildertek__Project_Task__c> projectInsertTaskMap = new Map<Id,buildertek__Project_Task__c>();

            for(buildertek__Project_Task__c Masterscheduleitem:originalScheduleItemRec){
                predecessorMap.put(Masterscheduleitem.Id, Masterscheduleitem.buildertek__Dependency__c);

                buildertek__Project_Task__c projectTask=Masterscheduleitem.clone(false, false, false, false);  
                projectTask.buildertek__Schedule__c=scheduleCopy.Id;
                projectTask.buildertek__Reference_for_Import__c = Masterscheduleitem.Id;
                projectInsertTaskMap.put(Masterscheduleitem.Id, projectTask);
            }

            ProjectTaskTriggerHandler.blnSkipTaskTrigger = true;
            insert projectInsertTaskMap.values();
            ProjectTaskTriggerHandler.blnSkipTaskTrigger = false;

            for (String key : predecessorMap.keySet()) {
                projectInsertTaskMap.get(key).buildertek__Dependency__c = projectInsertTaskMap.get(predecessorMap.get(key)).Id;
            }

            ProjectTaskTriggerHandler.blnSkipTaskTrigger = true;
            update projectInsertTaskMap.values();
            ProjectTaskTriggerHandler.blnSkipTaskTrigger = false;


            // buildertek__Schedule__c scheduleCopy  = originalScheduleRec.clone(false, false, false, false);     
            // insert scheduleCopy;


            // Date initialStartDate =scheduleCopy.buildertek__Start_Date__c;
            // if(scheduleCopy.buildertek__Start_Date__c == null){
            //     initialStartDate = System.today();
            // }
    
            // bryntumGanttController.createScheduleLineFromMasterSchedule(scheduleCopy.Id, oldScheduleId, initialStartDate);
            // buildertek__Schedule__c masterSchedule = [SELECT Id, Name, buildertek__Start_Date__c, buildertek__Initial_Start_Date__c FROM buildertek__Schedule__c WHERE Id =: oldScheduleId];
            // String businessHourId = [SELECT Id, IsDefault, IsActive FROM BusinessHours WHERE IsDefault = true LIMIT 1].Id;

            // date masterStartDate = masterSchedule.buildertek__Start_Date__c;
            // if (masterStartDate == null) {
            //     masterStartDate = System.today();
            // }
            // initialStartDate = bryntumGanttController.getInitialStartDate(initialStartDate);
            // DateTime oldDate = DateTime.newInstance(masterStartDate.year(), masterStartDate.month(),masterStartDate.day());
            // DateTime newDate = DateTime.newInstance(initialStartDate.year(), initialStartDate.month(),initialStartDate.day());

            // Long diffDays = System.BusinessHours.diff(businessHourId, oldDate, newDate);

            // Map<Id, buildertek__Project_Task__c> projectInsertTaskMap = new Map<Id, buildertek__Project_Task__c>();

            // List<buildertek__Project_Task__c> masterScheduleList = new List<buildertek__Project_Task__c>([select Id, Name, buildertek__Start__c,buildertek__Contractor__c,buildertek__Phase__c, buildertek__Schedule__c,buildertek__Dependency__r.Name, buildertek__Dependency__r.buildertek__Schedule__c, buildertek__Completed__c, buildertek__Completion__c, buildertek__Contractor_Resource__c, buildertek__Type__c,buildertek__Cost_Code__c, buildertek__Duration__c, buildertek__Finish__c, buildertek__Resource__c, buildertek__Lag__c, buildertek__Last_Saved_End_Date__c, buildertek__Last_Saved_Start_Date__c, buildertek__Material_Ordered__c, buildertek__Material_Received__c, buildertek__Milestone__c, buildertek__Notes__c, buildertek__Order__c, buildertek__Original_End_Date__c, buildertek__Original_Start_Date__c, buildertek__Payable_Task__c, buildertek__Project__c, buildertek__Purchase_Order__c, buildertek__Reason_for_Date_Change__c, buildertek__Reason_for_Date_Change_PL__c, buildertek__Required_Completion_Date__c , buildertek__Contractor_Resource__c, buildertek__Contractor_Resource_1__c,buildertek__Contractor_Resource_2__c,buildertek__Contractor_Resource_3__c
            // from buildertek__Project_Task__c where buildertek__Schedule__c = :oldScheduleId  ORDER BY buildertek__Order__c ASC NULLS LAST]);
            // Map<String, String> predecessorMap = new Map<String, String>();

            // for (buildertek__Project_Task__c Masterscheduleitem : masterScheduleList){
            //     if (!Masterscheduleitem.buildertek__Milestone__c){

            //         if (Masterscheduleitem.buildertek__Dependency__c != null) {
            //             predecessorMap.put(Masterscheduleitem.Id, Masterscheduleitem.buildertek__Dependency__c);
            //         }

            //         buildertek__Project_Task__c newSchItem = new buildertek__Project_Task__c();
            //         newSchItem.buildertek__Completion__c = Masterscheduleitem.buildertek__Completion__c;
            //         newSchItem.buildertek__Contractor__c = Masterscheduleitem.buildertek__Contractor__c;
            //         newSchItem.buildertek__Contractor_Resource__c = Masterscheduleitem.buildertek__Contractor_Resource__c;

            //         if (Masterscheduleitem.buildertek__Duration__c != 0 && Masterscheduleitem.buildertek__Duration__c != null){
            //             newSchItem.buildertek__Duration__c = Masterscheduleitem.buildertek__Duration__c;
            //         } else{
            //             newSchItem.buildertek__Duration__c = 1;
            //         }

            //         DateTime sDate = DateTime.newInstance(Masterscheduleitem.buildertek__Start__c.year(), Masterscheduleitem.buildertek__Start__c.month(),Masterscheduleitem.buildertek__Start__c.day());
            //         DateTime eDate = DateTime.newInstance(Masterscheduleitem.buildertek__Finish__c.year(), Masterscheduleitem.buildertek__Finish__c.month(),Masterscheduleitem.buildertek__Finish__c.day());

            //         newSchItem.buildertek__Start__c = System.BusinessHours.add(businessHourId, sDate, diffDays).date();
            //         newSchItem.buildertek__Finish__c = System.BusinessHours.add(businessHourId, eDate, diffDays).date();

            //         newSchItem.buildertek__Resource__c = Masterscheduleitem.buildertek__Resource__c;
            //         newSchItem.buildertek__Lag__c = Masterscheduleitem.buildertek__Lag__c;
            //         newSchItem.buildertek__Milestone__c = Masterscheduleitem.buildertek__Milestone__c;
            //         newSchItem.buildertek__Notes__c = Masterscheduleitem.buildertek__Notes__c;
            //         newSchItem.buildertek__Order__c = Masterscheduleitem.buildertek__Order__c;
            //         newSchItem.buildertek__Original_Start_Date__c = Date.today();
            //         newSchItem.buildertek__Original_End_Date__c = Date.today().adddays(Integer.valueOf(Masterscheduleitem.buildertek__Duration__c));
            //         newSchItem.buildertek__Phase__c = Masterscheduleitem.buildertek__Phase__c;
            //         newSchItem.buildertek__Type__c = Masterscheduleitem.buildertek__Type__c;
            //         newSchItem.buildertek__Purchase_Order__c = Masterscheduleitem.buildertek__Purchase_Order__c;
            //         newSchItem.buildertek__Reason_for_Date_Change__c = Masterscheduleitem.buildertek__Reason_for_Date_Change__c;
            //         newSchItem.buildertek__Reason_for_Date_Change_PL__c = Masterscheduleitem.buildertek__Reason_for_Date_Change_PL__c;
            //         newSchItem.buildertek__Required_Completion_Date__c = Masterscheduleitem.buildertek__Required_Completion_Date__c;
            //         newSchItem.buildertek__Schedule__c = scheduleCopy.Id;
            //         newSchItem.buildertek__Reference_for_Import__c = Masterscheduleitem.Id;

            //         newSchItem.Name = Masterscheduleitem.Name;
            //         buildertek__Project_Task__c newSchItemClone = newSchItem.Clone(false, true);
            //         projectInsertTaskMap.put(Masterscheduleitem.Id, newSchItemClone);

            //     }
            // }

            // ProjectTaskTriggerHandler.blnSkipTaskTrigger = true;
            // insert projectInsertTaskMap.values();
            // ProjectTaskTriggerHandler.blnSkipTaskTrigger = false;

            // for (String key : predecessorMap.keySet()) {
            //     projectInsertTaskMap.get(key).buildertek__Dependency__c = projectInsertTaskMap.get(predecessorMap.get(key)).Id;
            // }

            // ProjectTaskTriggerHandler.blnSkipTaskTrigger = true;
            // update projectInsertTaskMap.values();
            // ProjectTaskTriggerHandler.blnSkipTaskTrigger = false;

            return scheduleCopy.Id;
        }else{
            return null;
        }
    }
    
}