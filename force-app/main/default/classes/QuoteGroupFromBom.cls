global without sharing class QuoteGroupFromBom {

    public string quoteId;
    public List<buildertek__Quote_Item__c> allQuoteLineList {get;set;}
    public List<BT_Lightning_Utils.dataTableFields> columns {get;set;}
    public quoteLineWrapperClass quoteLineWrapper {get;set;}
    List<String> groupingList {get;set;}
    Boolean layer1 {get;set;}
    Boolean layer2 {get;set;}
    Boolean layer3 {get;set;}
    Boolean layer4 {get;set;}

    public QuoteGroupFromBom() {
        allQuoteLineList = new List<buildertek__Quote_Item__c>();
        columns = new List<BT_Lightning_Utils.dataTableFields>();
        quoteLineWrapper = new quoteLineWrapperClass();
        groupingList = new List<String>();
        layer1 = false;
        layer2 = false;
        layer3 = false;
        layer4 = false;
    }

    public void setrelatedToId(string Id){
        this.quoteId = Id;
        getQuoteData();
    }
    
    public string getrelatedToId( ){
        return quoteId;
    }

    public void getQuoteData(){
        System.debug('-- getQuoteData --');
        String quoteId = this.quoteId;
        System.debug('quoteId ==> '+quoteId);

        // Grouping field list for set 4 layer grouping on quote lines (Fix Value Used Only For Development)
        groupingList = new List<String>{'buildertek__Grouping__c', 'buildertek__Build_Phase__c', 'buildertek__Location_Detailed_Area__c', 'buildertek__Product_Family__c'};

        // All fields in list that can be available in grouping fields.
        List<String> gorupingFieldList = new List<String>{'id','buildertek__Build_Phase__c', 'buildertek__Build_Reference_1__c','buildertek__Base_Location__c','buildertek__Location_Picklist__c','buildertek__Location_Detailed_Area__c','buildertek__Location_Detail_Reference_1__c','buildertek__BL_SERVICE_CATEGORY__c', 'buildertek__Product_Family__c', 'buildertek__Sub_Group__c', 'buildertek__Grouping__c'};
        String apiString = '';

        // Get field data from buildertek__BT_Related_List_View_Fields field set
        List<BT_Lightning_Utils.dataTableFields> column = BT_Lightning_Utils.getFieldSetForDataTable('buildertek__Quote_Item__c', 'buildertek__BT_Related_List_View_Fields');
        for(BT_Lightning_Utils.dataTableFields s : column){
            if (!gorupingFieldList.contains(s.fieldName)) {
                apiString += s.fieldName + ', ';
            }
        }

        // SOQL Query for get data from buildertek__Quote_Item__c
        String query = 'SELECT Id, '+apiString+' buildertek__Build_Phase__c, buildertek__Build_Phase__r.Name, buildertek__Build_Reference_1__c, buildertek__Base_Location__c, buildertek__Location_Picklist__c, buildertek__Location_Detailed_Area__c, ';
        query += 'buildertek__Location_Detail_Reference_1__c, buildertek__BL_SERVICE_CATEGORY__c, buildertek__Product_Family__c, buildertek__Sub_Group__c, buildertek__Sub_Group__r.Name, buildertek__Grouping__c, buildertek__Grouping__r.Name ';
        query += 'FROM buildertek__Quote_Item__c WHERE buildertek__Quote__c =\''+quoteId+'\'';
        if (groupingList.size() > 0) {
            query += ' ORDER BY '+groupingList[0];
            layer1 = true;
        }
        if (groupingList.size() > 1) {
            query += ', '+groupingList[1];
            layer2 = true;
        }
        if (groupingList.size() > 2) {
            query += ', '+groupingList[2];
            layer3 = true;
        }
        if (groupingList.size() > 3) {
            query += ', '+groupingList[3];
            layer4 = true;
        }
        query += ' NULLS LAST';
        System.debug('query ==> '+query);

        allQuoteLineList = Database.query(query);
        System.debug('allQuoteLineList ==> '+allQuoteLineList);

        quoteLineWrapper.quoteLineList = allQuoteLineList;
        quoteLineWrapper.columns = columns;

        if (layer1 & allQuoteLineList.size() > 0) {
            quoteLineWrapper.groupWrapperList = firstLayerGrouping();
        }

    }

    // Use method for 1st layer grouping
    public List<group1Wrapper> firstLayerGrouping(){
        System.debug('-- firstLayerGrouping --');
        List<group1Wrapper> group1WrapperList = new List<group1Wrapper>();

        // Total quote line record count
        Integer quoteLineListSize = allQuoteLineList.size();

        // Check field type of all grouping fields.
        Map<String, Schema.SObjectField> objectMap = Schema.SObjectType.buildertek__Quote_Item__c.fields.getMap();
        Schema.SObjectField field = objectMap.get(groupingList[0]);
        Schema.DisplayType fldType = field.getDescribe().getType();

        // Get 1st grouping value
        String selectedGroupName = '';
        if (String.valueOf(fldType) == 'REFERENCE') {
            selectedGroupName = String.valueOf(allQuoteLineList[0].getSobject(groupingList[0].removeEnd('c')+'r').get('Name'));
        } else {
            selectedGroupName = String.valueOf(allQuoteLineList[0].get(groupingList[0]));
        }
        System.debug('Group => '+selectedGroupName);

        List<buildertek__Quote_Item__c> quoteLineList = new List<buildertek__Quote_Item__c>();

        for (Integer i = 0; i < quoteLineListSize; i++) {
            // Get current grouping name
            String currentGroupName = '';
            if (String.valueOf(fldType) == 'REFERENCE') {
                currentGroupName = String.valueOf(allQuoteLineList[i].getSobject(groupingList[0].removeEnd('c')+'r').get('Name'));
            } else {
                currentGroupName = String.valueOf(allQuoteLineList[i].get(groupingList[0]));
            }

            // create grouping accouring to the currentGroupName value
            if (selectedGroupName == currentGroupName) {
                quoteLineList.add(allQuoteLineList[i]);
                if (quoteLineListSize == i+1) {
                    group1Wrapper group1Wrap = new group1Wrapper();
                    group1Wrap.index = group1WrapperList.size() +1;
                    group1Wrap.groupName = selectedGroupName;
                    group1Wrap.quoteLineList = quoteLineList;
                    if (layer2) {
                        group1Wrap.groupWrapperList = secordLayerGrouping();
                    }
                    group1WrapperList.add(group1Wrap);
                }
            } else {
                group1Wrapper group1Wrap = new group1Wrapper();
                group1Wrap.index = group1WrapperList.size() +1;
                group1Wrap.groupName = selectedGroupName;
                group1Wrap.quoteLineList = quoteLineList;
                if (layer2) {
                    group1Wrap.groupWrapperList = secordLayerGrouping();
                }
                group1WrapperList.add(group1Wrap);

                quoteLineList = new List<buildertek__Quote_Item__c>();
                quoteLineList.add(allQuoteLineList[i]);
                selectedGroupName = currentGroupName;
                System.debug('Group => '+selectedGroupName);

                if (quoteLineListSize == i+1) {
                    group1Wrapper group1WrapDup = new group1Wrapper();
                    group1WrapDup.index = group1WrapperList.size() +1;
                    group1WrapDup.groupName = selectedGroupName;
                    group1WrapDup.quoteLineList = quoteLineList;
                    if (layer2) {
                        group1WrapDup.groupWrapperList = secordLayerGrouping();
                    }
                    group1WrapperList.add(group1WrapDup);
                }
            }
        }
        return group1WrapperList;
    }

    // Use method for 2nd layer grouping
    public List<group2Wrapper> secordLayerGrouping(){
        System.debug('-- secordLayerGrouping --');
        List<group2Wrapper> group2WrapperList = new List<group2Wrapper>();

        return group2WrapperList;
    }

    // Use method for 3rd layer grouping
    public List<group3Wrapper> thirdLayerGrouping(){
        System.debug('-- thirdLayerGrouping --');
        List<group3Wrapper> group3WrapperList = new List<group3Wrapper>();

        return group3WrapperList;
    }

    // Use method for 4th layer grouping
    public List<group4Wrapper> forthLayerGrouping(){
        System.debug('-- forthLayerGrouping --');
        List<group4Wrapper> group4WrapperList = new List<group4Wrapper>();

        return group4WrapperList;
    }

    public class quoteLineWrapperClass{
        public List<buildertek__Quote_Item__c> quoteLineList {get; set;}
        public List<fieldClassWrapper> fieldClassWrapperList {get; set;}
        public List<BT_Lightning_Utils.dataTableFields> columns {get; set;}
        public List<group1Wrapper> groupWrapperList {get; set;}
    }

    public class group1Wrapper{
        public Integer index {get; set;}
        public String groupName {get; set;}
        public List<buildertek__Quote_Item__c> quoteLineList {get; set;}
        public List<fieldClassWrapper> fieldClassWrapperList {get; set;}
        public totalFieldClass totalField {get; set;}
        public List<group2Wrapper> groupWrapperList {get; set;}
    }

    public class group2Wrapper{
        public Integer index {get; set;}
        public String groupName {get; set;}
        public List<buildertek__Quote_Item__c> quoteLineList {get; set;}
        public List<fieldClassWrapper> fieldClassWrapperList {get; set;}
        public totalFieldClass totalField {get; set;}
        public List<group3Wrapper> groupWrapperList {get; set;}
    }
    
    public class group3Wrapper{
        public Integer index {get; set;}
        public String groupName {get; set;}
        public List<buildertek__Quote_Item__c> quoteLineList {get; set;}
        public List<fieldClassWrapper> fieldClassWrapperList {get; set;}
        public totalFieldClass totalField {get; set;}
        public List<group4Wrapper> groupWrapperList {get; set;}
    }

    public class group4Wrapper{
        public Integer index {get; set;}
        public String groupName {get; set;}
        public List<buildertek__Quote_Item__c> quoteLineList {get; set;}
        public List<fieldClassWrapper> fieldClassWrapperList {get; set;}
        public totalFieldClass totalField {get; set;}
    }

    public class fieldClassWrapper{
        public buildertek__Quote_Item__c quoteLine {get; set;}
        public List<fieldClass> fieldClass {get; set;}
    }

    public class fieldClass{
        public String fieldName {get; set;}
        public String fieldType {get; set;}
        public String fieldValue {get; set;}
    }

    public class totalFieldClass{

    }

}