({
	getQuoteLinesRecords:function(component, event) {
		var action = component.get("c.getQuoteLineRecordList");
        action.setParams({
            recordId: component.get("v.recordId")
        });
        action.setCallback(this, function (response) {
            if (response.getState() == 'SUCCESS') {
                var QuoteLineList = response.getReturnValue();
                console.log('QuoteLineList ',QuoteLineList);
                component.set("v.quoteLineList", QuoteLineList);
            }
        });
        $A.enqueueAction(action);
	},
	changePricebookHelper : function(component, event, helper , priceBookId){
		console.log("method called");
		component.set('v.Spinner', true);
		var priceBookId = component.find("selectedPricebook").get("v.value");
		console.log('BADDDD : ', priceBookId);
        component.set("v.sProductFamily", '');
        component.set("v.sProductName", '');
        console.log('selectedPricebook => '+priceBookId);
        if (priceBookId != '') {
            var action = component.get("c.getProductsthroughPriceBook2");
            action.setParams({
                "pbookId": priceBookId 
            });
            action.setCallback(this, function(response) {
                var rows = response.getReturnValue();
                if (response.getState() == "SUCCESS" && rows != null) {
                    console.log('productList ==> ',{rows});
                    var selectedRecords = component.get("v.selectedRecords");
                    var selectedRows = [];
                    var remainingRows = [];

                    rows.forEach(function(row) {
                        var matchingRecord = selectedRecords.find(function(record) {
                            return record.Id === row.Id;
                        });

                        if (matchingRecord) {
                            row.Selected = true; 
                            selectedRows.push(row);
                        } else {
                            row.Selected = false;
                            remainingRows.push(row);
                        }
                    });

                    var updatedRows = selectedRecords.concat(remainingRows);
					updatedRows.forEach(function(item) {
							if (item.Name.length > 80) {
								item.Name = item.Name.substring(0, 77) + '...';
							}
							if (item.Description && item.Description.length > 80) {
								item.Description = item.Description.substring(0, 77) + '...';
							}
						});
					

                    // component.set("v.quoteLineList", updatedRows);
                    component.set("v.tableDataList", updatedRows);
					console.log(updatedRows);


                    //--------------------------------------------------------------------------
                    var productFamilySet = new Set();
                    rows.forEach(element => {
                        if (element.Family != undefined && element.Family != '') {
                            productFamilySet.add(element.Family);
                        }
                    });
                    var productFamilyList = [];
                    productFamilyList.push({
                        key: '-- All Product Family --',
                        value: ''
                    });
                    productFamilySet.forEach(function(value) {
                        productFamilyList.push({
                            key: value,
                            value: value
                        });
                    });
                    console.log(component.get('v.getPhase') , 'getPhase::::::;');
                    if(component.get('v.getPhase') != undefined){
                        var quotelineGroupOptions = component.get("v.quoteLineGroupOptions");
                        console.log('quoteLineGroupOptions ==>', component.get("v.quoteLineGroupOptions"));
                        var name = '';
                        quotelineGroupOptions.forEach(function(element){
                            if(element.value == component.get('v.getPhase')){
                                name = element.key;
                            }
                        });
                        var productFamily = '';
                        productFamilyList.forEach(function(element){
                            if(element.key == name){
                                productFamily = element.value;
                            }
                        });
                        console.log('productFamily from phase ==> ',{productFamily});
                        if(productFamily != ''){
                            console.log('inside if');
                            component.set("v.sProductFamily", productFamily);
                        }
                    }
                    console.log('productFamilyList ==> ',{productFamilyList});
                    component.set("v.productFamilyOptions", productFamilyList);
                }
                // component.set('v.Spinner', false);
            });
            $A.enqueueAction(action);
        } else {
            // component.set("v.quoteLineList", []);
            component.set("v.tableDataList", []);
            // component.set('v.Spinner', false);
        }
    },
    getPricebookRecords:function(component, event) {	
		console.log("It is loading");
		

		component.set('v.Spinner', true);
        var action = component.get("c.getPricebookList");
        action.setParams({
            recordId:component.get("v.recordId")
        })
        action.setCallback(this, function(response){
            var result = response.getReturnValue();
			console.log(result);
            let projectHavePricebook=result[0].defaultValue;
            console.log(Object.keys(projectHavePricebook).length);
            var pricebookOptions = [];
            if(Object.keys(projectHavePricebook).length !=0){

                pricebookOptions.push({ key: projectHavePricebook.Name, value: projectHavePricebook.Id });
                result[0].priceWrapList.forEach(function(element){
                    if(projectHavePricebook.Id !== element.Id){
                        pricebookOptions.push({ key: element.Name, value: element.Id });
                    }else{
                        pricebookOptions.push({ key: "None", value: "" });
                    }
                });
                component.set('v.selectedPricebookId' , projectHavePricebook.Id);

            }else{
				console.log("inelse");
                pricebookOptions.push({ key: "None", value: "" });
                result[0].priceWrapList.forEach(function(element){
                    pricebookOptions.push({ key: element.Name, value: element.Id });
                });
				console.log(pricebookOptions);
            }
            if(component.get('v.selectedPricebookId')!= undefined){
				console.log("IN if");
				var priceBookId = component.find("selectedPricebook").get("v.value");
				console.log('BADDDD : ', priceBookId);
				console.log("It is loading 2" , priceBookId);				
                this.changePricebookHelper(component, event);
            }
			else{
                 component.set('v.Spinner', false);    
            }
            component.set("v.pricebookoptions", pricebookOptions);
        });
        $A.enqueueAction(action);

        //create a action tgetQuoteLineGroups and set callback without parameters
        var action1 = component.get("c.getQuoteLineGroups");
		console.log("calling");
        action1.setCallback(this, function(response){
            var result = response.getReturnValue();
			console.log(result);
            var quoteLineGroupOptions = [];
            var selectedProducts = [];
                result.forEach(element => {
                    quoteLineGroupOptions.push({ key: element.Name, value: element.Id });
                });

            component.set("v.quoteLineGroupOptions", quoteLineGroupOptions);
            // console.log({quoteLineGroupOptions});
            component.set("v.selectedQuoteLineGroupId", '');
        });  
        $A.enqueueAction(action1);     
	}, 
	changeProductFamilyHelper : function(component, event, helper , priceBookId, productFamilyId){
        console.log('method is calllll');
        component.set('v.Spinner', true);
        console.log('selectedPricebook====>',priceBookId);
        console.log('selectedProductFamily=====>',productFamilyId);
        let sProductFamily = component.get("v.sProductFamily");
        console.log('sProductFamily=====>',sProductFamily);
        if (priceBookId != '' && productFamilyId != '') {
            
            var action = component.get("c.getProductsthroughProductFamily");
            action.setParams({
                "pbookId": priceBookId ,
                "pfId": productFamilyId
            });
            action.setCallback(this, function(response) {
                var rows = response.getReturnValue();
                if (response.getState() == "SUCCESS" && rows != null) {
                    console.log('productList ==> ',{rows});
                    var selectedRecords = component.get("v.selectedRecords");
                    var selectedRows = [];
                    var remainingRows = [];

                    rows.forEach(function(row) {
                        var matchingRecord = selectedRecords.find(function(record) {
                            return record.Id === row.Id;
                        });

                        if (matchingRecord) {
                            row.Selected = true; // Assuming there's a field like 'Selected__c'
                            selectedRows.push(row);
                        } else {
                            row.Selected = false;
                            remainingRows.push(row);
                        }
                    });

                    // Combine selectedRows and remainingRows while maintaining selected order
                    var updatedRows = selectedRecords.concat(remainingRows);
					updatedRows.forEach(function(item) {
							if (item.Name.length > 80) {
								item.Name = item.Name.substring(0, 77) + '...';
							}
							if (item.Description && item.Description.length > 80) {
								item.Description = item.Description.substring(0, 77) + '...';
							}
						});
                    component.set("v.tableDataList", updatedRows);


                    //--------------------------------------------------------------------------
                }
                component.set('v.Spinner', false);
            });
            $A.enqueueAction(action);
        } else {
            component.set("v.tableDataList", []);
            if(component.get('v.selectedPricebookId')!= undefined){
                var priceBookId = component.find("selectedPricebook").get("v.value");
                helper.changePricebookHelper(component, event);
            }
        }
    },
	searchDatatableHelper : function(component, event, helper){
        console.log('searchDatatableHelper method is called------');
        component.set('v.Spinner', true);
        if (component.get("v.selectedPricebookId") != '') {
			console.log("INSIDE IF 1");
            let sProductFamily = component.get("v.sProductFamily");
            let sProductName = component.get("v.sProductName");
            let sPriceBook = component.get("v.selectedPricebookId");
            var tableDataList = [];
            if (sProductName != '' && sProductFamily == '') {
				console.log("INSIDE IF 2");

                    var action = component.get("c.getProductsbyName");
                    action.setParams({
                        "pbookId": sPriceBook ,
                        "pName": sProductName
                    });
                    action.setCallback(this, function(response) {
                        var rows = response.getReturnValue();
                        if (response.getState() == "SUCCESS" && rows != null) {
                            console.log('productList ==> ',{rows});
                            var selectedRecords = component.get("v.selectedRecords");
                            rows.forEach(function(row) {
                                var matchingRecord = selectedRecords.find(function(record) {
                                    return record.Id === row.Id;
                                });
                                if (matchingRecord) {
                                    row.Selected = true;
                                }
                            });

                            // Sort the records with selected ones on top
                            rows.sort(function(a, b) {
                                if (a.Selected && !b.Selected) {
                                    return -1; // a comes before b
                                } else if (!a.Selected && b.Selected) {
                                    return 1; // b comes before a
                                }
                                return 0; // no change in order
                            });
                            
                            component.set("v.tableDataList", rows);
                            component.set('v.Spinner', false);
                        }
                    });
                    $A.enqueueAction(action);
                
            }
            else if (sProductName != '' && sProductFamily != '') {
				console.log("INSIDE ELSE IF 1");

                    var action = component.get("c.getProductsbyNameandFamily");
                    action.setParams({
                        "pbookId": sPriceBook ,
                        "pName": sProductName ,
                        "pfId": sProductFamily
                    });
                    action.setCallback(this, function(response) {
                        var rows = response.getReturnValue();
                        if (response.getState() == "SUCCESS" && rows != null) {
                            console.log('productList ==> ',{rows});
                            var selectedRecords = component.get("v.selectedRecords");
                            rows.forEach(function(row) {
                                var matchingRecord = selectedRecords.find(function(record) {
                                    return record.Id === row.Id;
                                });
                                if (matchingRecord) {
                                    row.Selected = true;
                                }
                            });

                            // Sort the records with selected ones on top
                            rows.sort(function(a, b) {
                                if (a.Selected && !b.Selected) {
                                    return -1; // a comes before b
                                } else if (!a.Selected && b.Selected) {
                                    return 1; // b comes before a
                                }
                                return 0; // no change in order
                            });
                            
                            component.set("v.tableDataList", rows);
                            component.set('v.Spinner', false);
                        }
                    });
                    $A.enqueueAction(action);
                
            }
            else if (sProductName == '' && sProductFamily != '') {
				console.log("INSIDE ELSE IF 2");
                var selectedPricebook = component.find("selectedPricebook").get("v.value");
                var selectedProductFamily = component.find("selectedProductFamily").get("v.value");
                helper.changeProductFamilyHelper(component, event, helper , selectedPricebook, selectedProductFamily);
            }
            else if (sProductName == '' && sProductFamily == '') {
				console.log("INSIDE ELSE IF 3");

                var selectedPricebook = component.find("selectedPricebook").get("v.value");
                helper.changePricebookHelper(component, event, helper , selectedPricebook);
            }
        }
    }, 
})