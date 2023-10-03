({
    doInit : function(component, event, helper) {
        var action = component.get("c.getQuoteLineRecordList");
        action.setParams({
            recordId: component.get("v.recordId")
        });
        action.setCallback(this, function (response) {
            if (response.getState() == 'SUCCESS') {
                var QuoteLineList = response.getReturnValue();
                component.set("v.quoteLineList", QuoteLineList);
                component.set("v.changeColorToRed", true);
                console.log(' QuoteLine-->',component.get("v.quoteLineList"));
            }
        });
        $A.enqueueAction(action);
    },
    closeModel : function (component,event,helper) {
        $A.get("e.force:closeQuickAction").fire();
    },
    editProduct: function(component, event, helper) {
        var Id=  event.currentTarget.dataset.iconattr;
        console.log('id-->',Id);
        component.set("v.selectedRecId", Id); 
        component.set('v.displayProduct', false);
        component.set("v.isFieldDisabled", false);
        console.log(component.get("v.selectedRecId"));

    },
    save:function(component, event, helper) {
        var Id=  event.currentTarget.dataset.value;
        console.log('id New-->',Id);

    },
    clickHandlerProduct: function(component, event, helper){
        console.log("Select Product---->");
        var prodName = '';
        component.set('v.displayProduct', false);   
        var recordId = event.currentTarget.dataset.value;
        console.log('clickHandlerProduct---->',recordId);
        component.set('v.selectedProductId', recordId);
        var productList = component.get("v.productList");
        productList.forEach(element => {
            if (recordId == element.Id) {
                prodName = element.Name;
                // component.set('v.selectedProductName', element.Name);
                component.set('v.selectedProductId', element.Id);
            }
        });
        var productId = recordId; 
        console.log("INPUT Name--->", prodName);
        var qutLineID = component.get("v.selectedRecId");
        console.log("INPUT Name New--->", qutLineID);
        var auraId = "productInputs_" + qutLineID;
        console.log("AuraId", auraId);
        var inputCmp = component.find(auraId);
        console.log("INPUT Name New 1--->", inputCmp);
        if (inputCmp) {
            inputCmp.set("v.selectedProductName", prodName);
        }
        // var inputCmp = component.find("productInputs");
        // console.log("INPUT--->", inputCmp);
        // for (var i = 0; i < inputCmp.length; i++) {
        //     console.log("NEW DASH ---->" , inputCmp[i].getElement().id);
        //     if (inputCmp[i].getElement().id === productId) {
        //         console.log("Prod Name---->", prodName);
        //         inputCmp[i].set("v.value",prodName);
        //         break; 
        //     }
        // }
    },
    searchProductData: function(component, event, helper) {
        console.log("Search for Product---->");
        component.set('v.displayProduct', true);
        var searchFilter = '';
        // var recordId = event.currentTarget.dataset.id;
        // console.log("REC ID--->",recordId);
        helper.getPricebooksProduct(component, event, helper, searchFilter);
        // event.stopPropagation();
    },
    keyupProductData:function(component, event, helper) {
        console.log("Search Enterd prod NAme---->");
        component.set('v.displayProduct', true);

            var allRecords = component.get("v.productList");
            var searchFilter = event.getSource().get("v.value").toUpperCase();
            var tempArray = [];
            var i;
            for (i = 0; i < allRecords.length; i++) {
                if ((allRecords[i].Name && allRecords[i].Name.toUpperCase().indexOf(searchFilter) != -1)) {
                    tempArray.push(allRecords[i]);
                }else{
                    component.set('v.selectedProductId' , ' ')
                }
            }
            component.set("v.productList", tempArray);
            helper.getPricebooksProduct(component, event, helper , searchFilter);
    },
    hideList : function(component, event, helper) {
        console.log("Method Called");
        component.set('v.displayProduct', false);
    }

    
})