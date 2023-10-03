public with sharing class importTakeoff {
    
    @AuraEnabled(Cacheable=true)
    public static List<buildertek__Project_Takeoff__c> fetchTakeoff (String searchKeyword){
        String search = '%' + searchKeyword + '%';
        List<buildertek__Project_Takeoff__c> takeoffList = new List<buildertek__Project_Takeoff__c>([ SELECT Id, Name, buildertek__Build_Phase__c, buildertek__Status__c, buildertek__Project__r.Name, buildertek__Name__c, buildertek__Number_of_TakeOff_Lines__c FROM buildertek__Project_Takeoff__c WHERE buildertek__Status__c = 'Approved' AND (Name LIKE :search OR buildertek__Name__c LIKE :search)]);

        return takeoffList;
    }
    
    @AuraEnabled(cacheable=true)
    public static void fetchTakeoffLines(List<String> listOfTakeoffIds) {
        List<buildertek__Project_Takeoff_Lines__c> takeoffLineList = new List<buildertek__Project_Takeoff_Lines__c>([SELECT Id, Name, buildertek__Build_Phase__c, buildertek__Build_Phase__r.Name, buildertek__Project_Takeoff__c,buildertek__Quantity__c, buildertek__Product_Type__c, buildertek__Cost_Code__c FROM buildertek__Project_Takeoff_Lines__c WHERE buildertek__Project_Takeoff__c IN :listOfTakeoffIds]);

        Id grouppingId = [SELECT buildertek__Grouping__r.Id FROM buildertek__Quote_Item__c WHERE buildertek__Grouping__r.Name = 'TakeOff' LIMIT 1].buildertek__Grouping__r.Id;
        List<buildertek__Quote_Item__c> quotelineList = new List<buildertek__Quote_Item__c>();

        for(buildertek__Project_Takeoff_Lines__c takeoffline: takeoffLineList){
            buildertek__Quote_Item__c quoteLine = new buildertek__Quote_Item__c();
            quoteLine.buildertek__Quantity__c = takeoffline.buildertek__Quantity__c;
            quoteLine.buildertek__Cost_Code__c = takeoffline.buildertek__Cost_Code__c;
            quoteLine.buildertek__Unit_Cost__c = 0;
            quoteLine.buildertek__Status__c = 'Accept';
            quoteLine.buildertek__Build_Phase__c = takeoffline.buildertek__Build_Phase__c;
            quoteLine.buildertek__Grouping__c = grouppingId;
            
            quotelineList.add(quoteLine);
        }
        System.debug('quoteLine: ' + quotelineList);
        insert quotelineList;
    }
    
}