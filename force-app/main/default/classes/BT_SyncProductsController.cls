public class BT_SyncProductsController {
    @AuraEnabled
    public static List<buildertek__Quote_Item__c> getQuoteLineRecordList(String recordId) {
       
        List<buildertek__Quote_Item__c>  QuoteLineList = [SELECT Id, Name, buildertek__Product__r.Id ,buildertek__Product__r.Name,buildertek__Grouping__r.Name FROM buildertek__Quote_Item__c WHERE buildertek__Quote__c =:recordId AND buildertek__Product__c =''];
        return QuoteLineList;
    }
    @AuraEnabled
    public static List<Product2> getProduct(String prodName){
        String filterValue='%'+prodName+'%';
        List<Product2> prodList = new List<Product2>();
        if(prodName !=null ){
            prodList= [SELECT Id, Name FROM Product2 WHERE  Product2.Name LIKE :filterValue LIMIT 100  ];
        }else{
            prodList=[SELECT Id, Name FROM Product2 LIMIT 100  ];
        }
        return prodList;
    }
}