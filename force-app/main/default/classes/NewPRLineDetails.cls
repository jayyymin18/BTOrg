public without sharing class NewPRLineDetails {
    @AuraEnabled
    public static String createPRLineDetails(buildertek__Pricing_Request_Line_Details__c PRLineDetails) {
        System.debug('in method calling');
        insert PRLineDetails;
        return PRLineDetails.Id;
    }

    @AuraEnabled
    public static List<Product2> getProductDetails(String priceBookId, String searchProductFilter){
        List<PricebookEntry> pbEntryList = [SELECT Id, Name, Product2Id, Product2.Name FROM PricebookEntry WHERE Pricebook2Id =: priceBookId];
        List<Product2> productList = new List<Product2>();
        for (PricebookEntry pbEntry : pbEntryList) {
            if (pbEntry.Product2.Name.toLowerCase().contains(searchProductFilter.toLowerCase())) {
                Product2 product = new Product2();
                product.Id = pbEntry.Product2Id;
                product.Name = pbEntry.Product2.Name;
                productList.add(product);
            }
        }
        return productList;
    }

    @AuraEnabled
    public static List<buildertek__Question__c> getOptions(String recordId){
        List<buildertek__Question__c> questionList = [SELECT Id, Name, buildertek__Pricing_Request_Line__c FROM buildertek__Question__c WHERE buildertek__Pricing_Request_Line__c =: recordId];
        return questionList;
    }
}