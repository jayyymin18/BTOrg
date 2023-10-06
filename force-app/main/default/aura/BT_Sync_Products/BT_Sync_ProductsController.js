({
    doInit : function(component, event, helper) {
        var action = component.get("c.getQuoteLineRecordList");
        action.setParams({
            recordId: component.get("v.recordId")
        });
        action.setCallback(this, function (response) {
            if (response.getState() == 'SUCCESS') {
                var QuoteLineList = response.getReturnValue();
                console.log('QuoteLine_modified ',QuoteLineList);
                component.set("v.quoteLineList", QuoteLineList);
            }
        });
        $A.enqueueAction(action);
    },
    closeModel : function (component,event,helper) {
        $A.get("e.force:closeQuickAction").fire();
    },

    openPopupModel:function(component, event, helper) {
        var Id=  event.currentTarget.dataset.iconattr;
        console.log('id On Save-->',Id);
    },
})