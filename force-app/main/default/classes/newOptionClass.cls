public class newOptionClass {
    @AuraEnabled
    public static String createoption(buildertek__Question__c option){
        insert option;
        return option.Id;
    }

    @AuraEnabled
    public static Product2 getProduct(String productId){
        Product2 prod = [SELECT Id, Name, buildertek__Manufacturer__c FROM Product2 WHERE Id =: productId];
        return prod;
    }
    @AuraEnabled
    public static List<buildertek__Budget_Item__c> getBudgetLine(String budgetId){
        List<buildertek__Budget_Item__c> budgetLineList = [SELECT Id, buildertek__Budget__c FROM buildertek__Budget_Item__c WHERE Id =: budgetId];
        return budgetLineList;
    }
    
}