public class RFQResponseClass {

    public static String rfqVendorID { get; set; }

    public RFQResponseClass() {
    }
    
    @AuraEnabled
    public static RFQResponseClass.allData getallData(Id rfqVen) {
        RFQResponseClass.allData allData = new RFQResponseClass.allData();
        try{
            System.debug('getallmethod ' + rfqVen);
        
            allData.vendorRFQItemColumns = BT_Lightning_Utils.getFieldSetForDataTable('buildertek__RFQ_Vendor_Item__c', 'buildertek__RFQ_vender_filed');
        
            String dynamicQuery = 'SELECT Id, buildertek__RFQ_Item__r.buildertek__Public_Folder__c, buildertek__RFQ_Item__r.buildertek__RFQ_Package__c, ';
            for (BT_Lightning_Utils.dataTableFields field : allData.vendorRFQItemColumns) {
                dynamicQuery += field.fieldName + ', ';
            }
            dynamicQuery = dynamicQuery.removeEnd(', ');
            dynamicQuery += ' FROM buildertek__RFQ_Vendor_Item__c where buildertek__Vendor__c = \'' + rfqVen + '\'';
            System.debug('dynamicQuery:=> ' + dynamicQuery);
            allData.vendorRFQItems = Database.query(dynamicQuery);
        
            String RFQId = '';
        
            if (allData.vendorRFQItems != null || allData.vendorRFQItems.size() != 0) {
                RFQId = allData.vendorRFQItems[0].buildertek__RFQ_Item__r.buildertek__RFQ_Package__c;
            }
        
            System.debug('getallmethod' + rfqVen);
        
            allData.RFQFields = BT_Lightning_Utils.getFieldSetForDataTable('buildertek__RFQ__c', 'buildertek__RFQ_vfPage');
            dynamicQuery = 'SELECT Id, ';
            for (BT_Lightning_Utils.dataTableFields field : allData.RFQFields) {
                if (field.type == 'reference') {
                    dynamicQuery += field.fieldName.removeEnd('__c') + '__r.Name, ';
                } else {
                    dynamicQuery += field.fieldName + ', ';
                }
            }
            dynamicQuery = dynamicQuery.removeEnd(', ');
            dynamicQuery += ' FROM buildertek__RFQ__c where Id = \'' + RFQId + '\'';
            System.debug('dynamicQuery:=> ' + dynamicQuery);
            allData.RFQData = (buildertek__RFQ__c)Database.query(dynamicQuery);
        
            allData.Status = 'Success';
        
            return allData;
        }catch(Exception e){
            allData.Status = 'Error: ' + e.getMessage();
            return allData;
        }
}


    public class allData {
        
        @AuraEnabled
        public List<BT_Lightning_Utils.dataTableFields> vendorRFQItemColumns;
        
        @AuraEnabled
        public List<buildertek__RFQ_Vendor_Item__c> vendorRFQItems;

        @AuraEnabled
        public List<BT_Lightning_Utils.dataTableFields> RFQFields;

        @AuraEnabled
        public buildertek__RFQ__c RFQData;

        @AuraEnabled
        public string Status;

    }
}