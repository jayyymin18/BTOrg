public class RFQResponseClass {

    public static String rfqVendorID { get; set; }

    public RFQResponseClass() {
        rfqVendorID = ApexPages.currentPage().getParameters().get('id');
        System.debug('rfqVendorID:=> ' + rfqVendorID);
    }

    @AuraEnabled
    public static RFQResponseClass.allData getallData(Id rfqVendorId) {
        RFQResponseClass.allData allData = new RFQResponseClass.allData();
        System.debug('rfqVendorID:=> ' + rfqVendorID);

        allData.vendorRFQItemColumns = BT_Lightning_Utils.getFieldSetForDataTable('buildertek__RFQ_Vendor_Item__c', 'buildertek__RFQ_vender_filed');

        String dynamicQuery = 'SELECT Id,';
        for (BT_Lightning_Utils.dataTableFields field : allData.vendorRFQItemColumns) {
            dynamicQuery += field.fieldName + ', ';
        }
        dynamicQuery = dynamicQuery.removeEnd(', '); 
        dynamicQuery += ' FROM buildertek__RFQ_Vendor_Item__c where buildertek__Vendor__c = \'' + rfqVendorID + '\'';
        System.debug('dynamicQuery:=> ' + dynamicQuery);
        allData.vendorRFQItems = Database.query(dynamicQuery);
        
        allData.Status = 'Sucess';

        return allData;
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