public class RFQResponseClass {

    @AuraEnabled(cacheable=true)
    public static List<Map<String, Object>> getVendorItems() {
        List<buildertek__RFQ_Vendor_Item__c> vendorItems = [
            SELECT Id, Name, buildertek__Description__c, buildertek__Quantity__c, 
                   buildertek__Unit_Price__c, buildertek__Estimated_Work_Days__c, 
                   buildertek__Vendor_Note__c
            FROM buildertek__RFQ_Vendor_Item__c
            LIMIT 2
        ];

        List<Map<String, Object>> data = new List<Map<String, Object>>();
        for (buildertek__RFQ_Vendor_Item__c item : vendorItems) {
            Map<String, Object> mapItem = new Map<String, Object>();
            mapItem.put('id', item.Id);
            mapItem.put('label', item.Name);
            mapItem.put('description', item.buildertek__Description__c);
            mapItem.put('quantity', item.buildertek__Quantity__c != null ? item.buildertek__Quantity__c.toPlainString() : '');
            mapItem.put('unitPrice', item.buildertek__Unit_Price__c != null ? item.buildertek__Unit_Price__c.toPlainString() : '');
            mapItem.put('estimatedWork', item.buildertek__Estimated_Work_Days__c != null ? item.buildertek__Estimated_Work_Days__c.toPlainString() : '');
            mapItem.put('vendorNote', item.buildertek__Vendor_Note__c);
            data.add(mapItem);
        }
        return data;
    }
//save record for the 
    @AuraEnabled
    public static void saveRFQResponse(List<Map<String, Object>> rfqData) {
        System.debug('Method call');
        List<buildertek__RFQ_Vendor_Item__c> rfqItems = new List<buildertek__RFQ_Vendor_Item__c>();

        for (Map<String, Object> itemData : rfqData) {
            buildertek__RFQ_Vendor_Item__c rfqItem = new buildertek__RFQ_Vendor_Item__c();

            if (itemData.containsKey('id') && String.valueOf(itemData.get('id')) != null && String.valueOf(itemData.get('id')).trim() != '') {
                rfqItem.Id = String.valueOf(itemData.get('id'));
            }

            if (itemData.containsKey('label')) {
                rfqItem.Name = String.valueOf(itemData.get('label'));
            }

            if (itemData.containsKey('description')) {
                rfqItem.buildertek__Description__c = String.valueOf(itemData.get('description'));
            }

            if (itemData.containsKey('quantity') && String.valueOf(itemData.get('quantity')) != null && String.valueOf(itemData.get('quantity')).trim() != '') {
                rfqItem.buildertek__Quantity__c = Decimal.valueOf(String.valueOf(itemData.get('quantity')));
            }

            if (itemData.containsKey('unitPrice') && String.valueOf(itemData.get('unitPrice')) != null && String.valueOf(itemData.get('unitPrice')).trim() != '') {
                rfqItem.buildertek__Unit_Price__c = Decimal.valueOf(String.valueOf(itemData.get('unitPrice')));
            }

            if (itemData.containsKey('estimatedWork') && String.valueOf(itemData.get('estimatedWork')) != null && String.valueOf(itemData.get('estimatedWork')).trim() != '') {
                rfqItem.buildertek__Estimated_Work_Days__c = Decimal.valueOf(String.valueOf(itemData.get('estimatedWork')));
            }

            if (itemData.containsKey('vendorNote')) {
                rfqItem.buildertek__Vendor_Note__c = String.valueOf(itemData.get('vendorNote'));
            }

            rfqItems.add(rfqItem);
        }

        System.debug('after update==>'+rfqItems);

        // Upsert the RFQ Vendor Items
        upsert rfqItems;
    }
}