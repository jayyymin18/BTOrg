({
    doInit : function(component, event, helper) {
        component.set("v.isLoading", true);
        var value = helper.getParameterByName(component, event, 'inContextOfRef');
        console.log('value-->>',{value});
        var context = '';
        var parentRecordId = '';
        component.set("v.parentRecordId", parentRecordId)
        var getFields = component.get("c.getFieldSet");
        getFields.setParams({
            objectName: 'buildertek__Account_Payable__c',
            fieldSetName: 'buildertek__New_InvoicePO_ComponentFields'
        });
        getFields.setCallback(this, function (response) {
            if (response.getState() == 'SUCCESS' && response.getReturnValue()) {
                var listOfFields0 = JSON.parse(response.getReturnValue());
                console.log({listOfFields0});
                component.set("v.listOfFields0", listOfFields0);
                component.set("v.isLoading", false);
            }
        });
        $A.enqueueAction(getFields);
        if (value != null) {
            console.log('in if');
            context = JSON.parse(window.atob(value));
            parentRecordId = context.attributes.recordId;
            var isproject = context.attributes.objectApiName;
            if (isproject == 'buildertek__Project__c') {
                component.set("v.parentRecordId", parentRecordId);
                component.set("v.forProject", true);
                helper.handleChangeProjectHelper(component, event, helper);
            }
        } else {
            console.log('in else');
            var relatedList = window.location.pathname;
            var stringList = relatedList.split("/");
            console.log('stringList==>',stringList);
            parentRecordId = stringList[4];
            if (parentRecordId == 'related') {
                var stringList = relatedList.split("/");
                parentRecordId = stringList[3];
            }
            if (stringList.includes('buildertek__Project__c')) {
                // If 'buildertek_project__c' is found in the stringList, set a specific value
                component.set("v.parentRecordId", parentRecordId);
                component.set("v.forProject", true);
                helper.handleChangeProjectHelper(component, event, helper);
            }
            console.log('parentRecordId-->>',{parentRecordId});
        }
        if(parentRecordId != null && parentRecordId != ''){
            var action = component.get("c.getobjectName");
            action.setParams({
                recordId: parentRecordId,
            });
            action.setCallback(this, function (response) {
                component.set("v.Spinner", false);
                if (response.getState() == 'SUCCESS' && response.getReturnValue()) {
                    var objName = response.getReturnValue();
                    if(objName == 'buildertek__Purchase_Order__c'){
                        component.set("v.parentprojectRecordId", parentRecordId);
                    }
                } 
            });
            $A.enqueueAction(action);
        }
    },

    handleSubmit: function (component, event, helper) {
        component.set("v.isDisabled", true);
		component.set("v.isLoading", true);
        event.preventDefault(); // Prevent default submit
        var fields = event.getParam("fields");
        var poId = component.get("v.selectedPOId");
        if (poId != null && poId != '' && poId != undefined) {
            fields["buildertek__Purchase_Order__c"] = poId;
        }
        var allData = JSON.stringify(fields);

        var action = component.get("c.saveData");
        action.setParams({
            allData : allData
        });
        action.setCallback(this, function(response){
            if(response.getState() == 'SUCCESS') {            
                var result = response.getReturnValue();
                console.log({result});
                var saveNnew = component.get("v.isSaveNew");
                if(saveNnew){
                    $A.get('e.force:refreshView').fire();
                    component.set("v.isSaveNew", false);
                }else{
                    var workspaceAPI = component.find("workspace");
                    var focusedTabId = response.tabId;
                    //timeout
                    window.setTimeout(
                        $A.getCallback(function() {
                            workspaceAPI.getFocusedTabInfo().then(function(response) {
                                workspaceAPI.closeTab({tabId: focusedTabId});
                                component.set("v.isLoading", false);
                            })
                        }), 1000
                        );
                    var navEvt = $A.get("e.force:navigateToSObject");
                    navEvt.setParams({
                        "recordId": result,
                        "slideDevName": "Detail"
                    });
                    navEvt.fire();
                }
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Success!",
                    "message": "The record has been saved successfully.",
                    "type": "success"
                });
                toastEvent.fire();
                component.set("v.isDisabled", false);
            }else{
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Error!",
                    "message": "Something went wrong. Please try again.",
                    "type": "error"
                });
                toastEvent.fire();
                component.set("v.isDisabled", false);
                component.set("v.isLoading", false);
            }
        });
        $A.enqueueAction(action);
    },

    handlesaveNnew : function(component, event, helper) {
        component.set("v.isSaveNew", true);
    },

    closeModel: function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getFocusedTabInfo().then(function(response) {
            var focusedTabId = response.tabId;
            workspaceAPI.closeTab({tabId: focusedTabId});
        })
        .catch(function(error) {
            console.log(error);
        });
        $A.get("e.force:closeQuickAction").fire();
        component.set("v.isOpen", false);
        window.setTimeout(
            $A.getCallback(function() {
                $A.get('e.force:refreshView').fire();
            }), 1000
        );
   },


    changeProject:function(component, event, helper) {
        component.set('v.displayPO', false);
        component.set('v.selectedPOName' , '');
        component.set('v.selectedPOId' , '');
    },

    keyupPOData:function(component, event, helper) {
        var listOfAllRecords=component.get('v.allPORecords');
        var searchFilter = event.getSource().get("v.value").toUpperCase();
        var tempArray = [];
        var i;
        for (i = 0; i < listOfAllRecords.length; i++) {
            console.log(listOfAllRecords[i].Name);
            console.log(listOfAllRecords[i].Name.toUpperCase().indexOf(searchFilter) != -1);
            if ((listOfAllRecords[i].Name && listOfAllRecords[i].Name.toUpperCase().indexOf(searchFilter) != -1)) {
                    tempArray.push(listOfAllRecords[i]);
            }else{
                component.set('v.selectedPOId' , ' ')
            }
        }

        component.set("v.poList", tempArray);
        console.log({searchFilter});
        if(searchFilter == undefined || searchFilter == ''){
            component.set("v.poList", listOfAllRecords);
        }

    },

    clickHandlerPO: function(component, event, helper){
        component.set('v.displayPO', false);
        var recordId = event.currentTarget.dataset.value;
        console.log('recordId ==> '+recordId);
        component.set('v.selectedPOId', recordId);

        var poList = component.get("v.poList");
        poList.forEach(element => {
            console.log('element => ',element);
            if (recordId == element.Id) {
                component.set('v.selectedPOName', element.Name);

            }
        });
    },
    
    searchPOData : function(component, event, helper) {
        component.set('v.displayPO', true);
        helper.handleChangeProjectHelper(component, event, helper);
        event.stopPropagation();
    },

    hideList : function(component, event, helper) {
        component.set('v.displayPO', false);
    },

    preventHide: function(component, event, helper) {
        event.preventDefault();
    },

    clearInput: function(component, event, helper) {
        component.set('v.selectedPOName','');
        component.set('v.selectedPOId','');
    },
    
})