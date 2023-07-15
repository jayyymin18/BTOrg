({
    doInit: function(component, event, helper) {
        console.log('doInit');
            component.set("v.parentRecordId", component.get("v.recordId"));
            helper.getFields(component, event, helper);
    },

    closePopup: function(component, event, helper) {
        $A.get("e.force:closeQuickAction").fire();
    },
})