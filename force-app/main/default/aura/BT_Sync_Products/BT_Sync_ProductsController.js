({
    doInit : function(component, event, helper) {
        helper.getQuoteLinesRecords(component, event, helper);
    },
    closeModel : function (component,event,helper) {
        component.set("v.showModel",false);
        var checkboxes = component.find("checkboxInput");
        checkboxes.forEach(function(checkbox) {
            checkbox.set("v.checked", false);
        });
        component.set("v.selectedRecords", []);
        component.set("v.selectedPricebookId", '');
        console.log("All checkboxes unchecked.");
    },
    
    openPopupModel:function(component, event, helper) {
        var Id=  event.currentTarget.dataset.iconattr;
        component.set("v.quoteLineId",Id);
        console.log('id On Save-->', component.get("v.quoteLineId"));
        component.set("v.showModel",true);
        helper.getPricebookRecords(component, event, helper);
    },
    changePricebook: function(component, event, helper) {
        // var priceBookId = component.find("selectedPricebook").get("v.value");
        var selected = [];
        component.set("v.selectedRecords", selected);
        console.log("All checkboxes unchecked.");
        helper.changePricebookHelper(component, event, helper);
    },
    changeProductFamily: function(component, event, helper) {
        var checkboxes = component.find("checkboxInput");
        checkboxes.forEach(function(checkbox) {
            checkbox.set("v.checked", false);
        });
        component.set("v.selectedRecords", []);
        console.log("All checkboxes unchecked.");
        var priceBookId = component.find("selectedPricebook").get("v.value");
        var selectedProductFamily = component.find("selectedProductFamily").get("v.value");
        helper.changeProductFamilyHelper(component, event, helper , priceBookId, selectedProductFamily);
    },
    searchInDatatable: function(component, event, helper){
        console.log('in method');
        var checkboxes = component.find("checkboxInput");
        checkboxes.forEach(function(checkbox) {
            checkbox.set("v.checked", false);
        });
        component.set("v.selectedRecords", []);
        console.log("All checkboxes unchecked.");
        var inputElement = event.getSource().get('v.value');
            var prevInput = component.get('v.prevInput');
            var searchTimeout = component.get('v.searchTimeout');
            
            clearTimeout(searchTimeout);
    
            // if (inputElement.trim() !== '') {
                // console.log('in if');
                if (inputElement === prevInput) {
                    helper.searchDatatableHelper(component, event, helper);
                } else {
                    searchTimeout = setTimeout($A.getCallback(function() {
                        if (inputElement === component.get('v.sProductName')) {
                            helper.searchDatatableHelper(component, event, helper);
                        }
                    }), 2000);
                    component.set('v.searchTimeout', searchTimeout);
                }
                component.set('v.prevInput', inputElement);
            // } 
        
    }, 
    // checkboxChange : function(component, event, helper) {
    //     var selectedRecords = component.get("v.selectedRecords");
    //     var tableDataList = component.get("v.tableDataList");
    //     var selectedCheckbox = event.getSource(); // Get the checkbox that fired the event
    //     var productId = selectedCheckbox.get("v.id");
    //     var isChecked = selectedCheckbox.get("v.checked");
    //     var selectedRecord = tableDataList.find(record => record.Id === productId);

    //     if (isChecked) {
    //         selectedRecords.push(selectedRecord);
    //     } else {
    //         var indexToRemove = selectedRecords.indexOf(selectedRecord);
    //         if (indexToRemove !== -1) {
    //             selectedRecords.splice(indexToRemove, 1);
    //         }
    //     }

    //     component.set("v.selectedRecords", selectedRecords);
    //     console.log('selectedRecordIds------>',component.get("v.selectedRecords"));
    //     var tableDataList = component.get("v.tableDataList");
    //     var checkAll = true;
    //     tableDataList.forEach(element => {
    //         if (!element.Selected) {
    //             checkAll = false
    //         }
    //     });


    // },
        checkboxChange: function(component, event, helper) {
            var selectedRecords = [];
            var tableDataList = component.get("v.tableDataList");
            var selectedCheckbox = event.getSource(); // Get the checkbox that fired the event
            var productId = selectedCheckbox.get("v.id");
            var isChecked = selectedCheckbox.get("v.checked");
            var selectedRecord = tableDataList.find(record => record.Id === productId);
    
            if (isChecked) {
                selectedRecords.push(selectedRecord);
            }
    
            component.set("v.selectedRecords", selectedRecords);
            console.log('selectedRecordIds------>', component.get("v.selectedRecords"));
            
            // Uncheck all other checkboxes
            var checkboxes = component.find("checkboxInput");
            checkboxes.forEach(function(checkbox) {
                var checkboxId = checkbox.get("v.id");
                if (checkboxId !== productId) {
                    checkbox.set("v.checked", false);
                }
            });
        },
        saveProduct: function(component, event, helper){
            console.log("save Product Called");
            console.log("save Product qutLine-->" , component.get("v.quoteLineId"));
            console.log("save Product Called", component.get("v.selectedRecords") );
        }
    
    

})