({
    getQuoteDataHelper : function(component, event, helper) {
        try {
            console.log('*** getQuoteDataHelper ***');
            var page = component.get("v.page") || 1
            var action = component.get("c.getQuoteData");
            var groupFieldList = component.get("v.groupFieldList");
            action.setStorable({
                ignoreExisting: true
            });
            action.setParams({
                quoteId: component.get("v.recordId"),
                pageNumber: page,
                recordToDisply: 50,
                groupingList: groupFieldList
            });
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    var result = response.getReturnValue();
                    console.log('Quote Data ==> ',{ result });
                }
            });
            $A.enqueueAction(action);
        } catch (error) {
            console.log('getQuoteDataHelper Error => ',error);
        }
       
    }
})