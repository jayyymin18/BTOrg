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
				var appQuoteRFQIdList=[];
				var addedQuoteRFQIdList=[];

				if(result.buildertek__RFQs__r != null){
					result.buildertek__RFQs__r.forEach(function(element , index){
						appQuoteRFQIdList.push(element.Id);
					});
					component.set('v.quoteRFQ' , appQuoteRFQIdList);

				}

				if(result.buildertek__RFQs1__r !=null){
					result.buildertek__RFQs1__r.forEach(function(element , index){
						addedQuoteRFQIdList.push(element.Id);

					});
					component.set('v.addedQuoteRFQ' , addedQuoteRFQIdList);

					
				}
			}
            component.set("v.displayNameList", false);
		});
	$A.enqueueAction(action); 
	},

})