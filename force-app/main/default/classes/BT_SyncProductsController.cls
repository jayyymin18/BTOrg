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
            prodList= [SELECT Id, Name FROM Product2 WHERE  Product2.Name LIKE :filterValue ORDER BY Name ASC LIMIT 100  ];
        }else{
            prodList=[SELECT Id, Name FROM Product2 ORDER BY Name ASC LIMIT 100  ];
        }
        return prodList;
    }
    @AuraEnabled
    public static List<sObject> getProductRecords(String searchKeyWord, String ObjectName, String filter, string parentId, string prodctfamly){
        String[] searchTerms = searchKeyWord.split(' ');
        String searchKey = '';
        for (Integer i = 0; i < searchTerms.size(); i++) {
            searchKey += 'Name LIKE \'%' + searchTerms[i] + '%\'';
            if (i < searchTerms.size() - 1) {
                searchKey += ' AND ';
            }
        }
        List<sObject> returnList = new List<sObject>();
        String sQuery;
        list<string> ProdIds = new list<string>();
        list<pricebookEntry> PElist;

            if (ObjectName == 'Product2' && parentId != null && parentId != ''){

                String familyFilter = '';
                if (prodctfamly != 'All Families') {
                    familyFilter = (prodctfamly == '--None--') ? 'AND toLabel(product2.family) = null' : 'AND toLabel(product2.family) = :prodctfamly';
                }

                String peQuery = 'SELECT id, Product2Id, product2.family FROM PricebookEntry WHERE pricebook2Id = :parentId ' + familyFilter;
                PElist = Database.query(peQuery);

                for (pricebookEntry PE : PElist){
                     ProdIds.add(PE.Product2Id);
                }
                if (filter != null){
                     filter = filter + ' AND Id IN: ProdIds';
                }else{
                     filter = 'Id IN: ProdIds';
                } 

            }else if(ObjectName == 'Product2' && (parentId == null || parentId == '')){
                System.debug('inisde 2nd if');
     
                 PElist = [select id, Product2Id, product2.family from pricebookEntry];   
                 for (pricebookEntry PE : PElist){
                     ProdIds.add(PE.Product2Id);
                 } 
                 
                //  if (filter != null){
                //      filter = filter + ' AND Id NOT IN: ProdIds';
                //  }else{
                //      filter = 'Id NOT IN: ProdIds';
                //  }      
            }
            if(filter != null){
                sQuery = 'select id, Name from ' + ObjectName + ' WHERE ' + searchKey + ' AND ' + filter + ' order by Name ASC LIMIT 800';
            }
            else{
                System.debug('------------------IN ELSE CONDITION----------');
                sQuery = 'select id, Name from ' + ObjectName + ' WHERE ' + searchKey + ' order by Name ASC LIMIT 800';
            }
        // Query Log
        System.debug(sQuery);
        // Query Log
        List<sObject> lstOfRecords = Database.query(sQuery);

        for (sObject obj : lstOfRecords){
            returnList.add(obj);
        }

        return returnList;
    }
}