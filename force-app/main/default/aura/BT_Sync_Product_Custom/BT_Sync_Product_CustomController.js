({
    searchProductData: function(component, event, helper) {
        event.stopPropagation();
        var compEvent = component.getEvent("hideProdListInPerent");
        compEvent.setParams({
            hideProductList : false
        });
        compEvent.fire();
        component.set('v.hideProducts', true);
        console.log("Search for Product---->");
        // component.set('v.displayProduct', true);
        var searchFilter = '';
        console.log('id ==> ', event.getSource().get("v.id"));
        helper.getPricebooksProduct(component, event, helper, searchFilter);
        component.set("v.displayProduct", !component.get("v.displayProduct"));
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
    clickHandlerProduct: function(component, event, helper){
        event.stopPropagation();
        component.set('v.displayProduct', false);   
        var recordId = event.currentTarget.dataset.value;
        console.log('clickHandlerProduct',recordId);
        component.set('v.selectedProductId', recordId);
        var productList = component.get("v.productList");
        productList.forEach(element => {
            if (recordId == element.Id) {
                component.set('v.selectedProductName', element.Name);
                component.set('v.selectedProductId', element.Id);
            }
        });
    },
    hideList: function(component, event, helper){
        console.log("called");
        component.set('v.displayProduct', false);   
    }
})