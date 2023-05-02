({
    doInit: function(component, event, helper) {
        // $A.get("e.force:closeQuickAction").fire();
    },


    createRecord: function(component, event, helper) {
        try {
            component.set("v.Spinner", true);
            var changeOrderFields = component.get('v.changeOrder');
            var action = component.get("c.changeOrderList");
            action.setParams({
                cOrder: changeOrderFields,
                optionId: component.get("v.recordId")
            });
            action.setCallback(this, function(response) {
                var state = response.getState();
                console.log({ state });
                var result = response.getReturnValue();
                console.log({ result });
                if(result=='Error'){
                    helper.showToast("Error", "Error", "CO is already exist", "5000");
                    $A.get("e.force:closeQuickAction").fire();
                }else {
                    $A.get("e.force:closeQuickAction").fire();
                    $A.get('e.force:refreshView').fire();
                    helper.showToast("Success", "Success", "Your Change Order is created", "5000");
                    var navEvent = $A.get("e.force:navigateToSObject");
                    navEvent.setParams({
                        "recordId": result,
                    });
                    navEvent.fire();
                }
                component.set("v.Spinner", false);
            });
            $A.enqueueAction(action);
        } catch (e) {
            console.log({ e });
        }
    },
    closePopup: function(component, event, helper) {
        $A.get("e.force:closeQuickAction").fire();
    }
});