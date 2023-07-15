public with sharing class NewPaymentRequestController{
    @AuraEnabled
	public static String getobjectName(Id recordId){
        String sObjName = recordId.getSObjectType().getDescribe().getName();  
        return sObjName;
    }
	@AuraEnabled
	public static String getFieldSet(){
		String result = '';
		List<String> pickListValuesList = new List<String>();
		try{
			SObjectType objToken = Schema.getGlobalDescribe().get('buildertek__Payment_Request__c');
			Schema.DescribeSObjectResult d = objToken.getDescribe();
			Map<String, Schema.FieldSet> FsMap = d.fieldSets.getMap();
			if (FsMap.containsKey('buildertek__paymentRequestFromPO')){
				for (Schema.FieldSetMember f : FsMap.get('buildertek__paymentRequestFromPO').getFields()){
					if (result != ''){
						result += ',';
					}
					String jsonPart = '{';
					jsonPart += '"label":"' + f.getLabel()+'",';
					jsonPart += '"required":"' + (f.getDBRequired() || f.getRequired())+'",';
					jsonPart += '"type":"' + (f.getType())+'",';
					jsonPart += '"name":"' + f.getFieldPath()+'"';
					if (String.valueOf(f.getType()) == 'PICKLIST'){
						pickListValuesList = getDropDown('buildertek__Payment_Request__c', String.valueOf(f.getFieldPath()));
						jsonPart += ',"pickListValuesList":' + JSON.serialize(pickListValuesList);
					}
					jsonPart += '}';
					result += jsonPart;
				}
			}

		} catch (Exception e){
			result += e.getLineNumber()+' : ' + e.getMessage();
			System.debug('Error::' + e.getMessage());
			System.debug('Error At Line::' + e.getLineNumber());
		}
		return '[' + result + ']';
	}

	@AuraEnabled
	public static List<String> getDropDown(String objName, String fieldName){
		List<String> pickListValuesList = new List<String>();
		try{
			Schema.SObjectType s = Schema.getGlobalDescribe().get(objName);
			Schema.DescribeSObjectResult r = s.getDescribe();
			Map<String, Schema.SObjectField> fields = r.fields.getMap();
			Schema.DescribeFieldResult fieldResult = fields.get(fieldName).getDescribe();
			List<Schema.PicklistEntry> ple = fieldResult.getPicklistValues();
			for (Schema.PicklistEntry pickListVal : ple){
				pickListValuesList.add(pickListVal.getLabel());
			}
		} catch (Exception e){
			throw new AuraHandledException(e.getMessage());
		}
		return pickListValuesList;
	}

	
    @AuraEnabled
	public static Map<Id, String> getNames(String RecordId){
		Map<Id, String> poNames= new Map<Id, String>();

        buildertek__Purchase_Order__c purchaseRec = [select id,Name,buildertek__Vendor__c from buildertek__Purchase_Order__c where id =: RecordId];
		poNames.put(purchaseRec.buildertek__Vendor__c , 'Vendor');
        return poNames;
    }
	@AuraEnabled
    public static String saveRecord(String vendorReviewData){
        buildertek__Payment_Request__c vendorReview = (buildertek__Payment_Request__c)JSON.deserialize(vendorReviewData, buildertek__Payment_Request__c.class);
        insert vendorReview;
        return vendorReview.Id;
    }

	
   /* @AuraEnabled
    public static  buildertek__Purchase_Order__c Name(buildertek__Purchase_Order__c field)
    { 
        system.debug('vemdor-->'+vemdor);
        if(vemdor != null){
            insert vemdor;
        }
        return vemdor;
    }  */
}