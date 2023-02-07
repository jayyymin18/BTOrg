({
	searchHelper: function(component, event, helper){
		var searchNameValue = component.get("v.searchNameFilter");
		var oldSearchNameValue = component.get("v.oldSearchNameFilter");
        if (oldSearchNameValue != '' && searchNameValue == '') {
            var action = component.get("c.searchQuote");
            $A.enqueueAction(action);
        }
        var action = component.get("c.getQuote");
		action.setParams({
	        recordId : component.get("v.recordId"),
            searchNameValue : searchNameValue
	    });
		action.setCallback(this, function (response) {
			component.set("v.Spinner", false);
            var state = response.getState();
			console.log('state---->',{state});
            if (state == 'SUCCESS') {
				console.log('===SUCCESS===');
				var result = response.getReturnValue();
                console.log('Result => ',{result});
				console.log(result.buildertek__RFQs__r[0]);
				console.log(result.buildertek__RFQs__r[0].Id);

				// component.set('v.rfqRecordId')
			}
            component.set("v.displayNameList", false);
		});
	$A.enqueueAction(action); 
	}
})