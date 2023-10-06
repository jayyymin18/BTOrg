({
    getPricebooksProduct:function(component, event, helper, searchFilter) {
		console.log("HELPER METHOD" ,searchFilter);
        component.set("v.dropdownInfo", 'Loading...');
		var action = component.get("c.getProduct");
		action.setParams({
			prodName:searchFilter
		});
		action.setCallback(this, function(response) {
            console.log("result",response.getState());
			var state = response.getState();
			var result= response.getReturnValue();
			if (state === "SUCCESS") {
				component.set('v.productList' , result);
                if (result.length == 0) {
                    component.set("v.dropdownInfo", 'There are no Products');
                }
			}
		});
		$A.enqueueAction(action);
	 },
})