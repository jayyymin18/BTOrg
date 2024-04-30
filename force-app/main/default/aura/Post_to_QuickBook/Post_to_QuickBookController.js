({
    doInit : function(component, event, helper) {
        var id = component.get("v.recordId");
        console.log('RecordId---> ',id);

        var action = component.get('c.verifyAccessToken');
        action.setCallback(this, function(response){
            var result = response.getReturnValue();
            if(result != null){
                if(result == 'success'){
                    
                    var Objectname = component.get("v.sobjecttype");
                    console.log('Objectname---> ',Objectname);

                    if(Objectname == "Account"){
                        component.set("v.ShowAccountTypeOpt", true);
                    }
                    else if (Objectname == 'buildertek__Purchase_Order__c') {
                        helper.SyncPO(component, event, helper);
                    }
                    else if(Objectname == 'buildertek__Account_Payable__c'){
                        helper.SyncCOInvoice(component, event, helper)
                    }
                    else if(Objectname == 'buildertek__Account_Payable_Clone__c'){
                        helper.SyncPayableInvoice(component, event, helper)
                    }
                    else if(Objectname == 'buildertek__Billings__c'){
                        helper.SyncSIInvoice(component, event, helper)
                    }
                    else if(Objectname == 'buildertek__Expense__c'){
                        helper.SyncExpense(component, event, helper)
                    }
                    else if(Objectname == 'buildertek__Receipt__c'){
                        helper.SyncReceipt(component, event, helper)
                    }
                }
                else{
                    helper.ShowResponsePopupHelper(component, event, helper, result, result);
                    $A.get("e.force:closeQuickAction").fire();
                }
            }
            else{
                component.find('notifLib').showNotice({
                    "variant": "error",
                    "header": "Warning!",
                    "message": 'Something Went Wrong !!!',
                });  
                $A.get("e.force:closeQuickAction").fire();

            }
        });
        $A.enqueueAction(action);	


        
    },

    // this method only run when Object Is Account
    handleRecordLoaded: function(component, event, helper) {

        console.log(component.get("v.BTAccountType.buildertek__BT_Account_Type__c"));
        var BTAccountType = component.get("v.BTAccountType")["buildertek__BT_Account_Type__c"];
        var QBID = component.get("v.BTAccountType")["buildertek__QB_Id__c"];
        var QBType = component.get("v.BTAccountType")["buildertek__QB_Type__c"];
        if(BTAccountType == "Customer" || BTAccountType == "Vendor"){
            component.set("v.AccountType", BTAccountType)
        }
        if(QBID == null){
            helper.SyncAccountToQuickbook(component, event, helper);
        }
        else if(QBID != null){
            if(BTAccountType == QBType){
                helper.SyncAccountToQuickbook(component, event, helper);
            }
            else{
                component.find('notifLib').showNotice({
                    "variant": "warning",
                    "header": "Validation Warning",
                    "message":  'This account is synced as ' + QBType + ' in QB, you can not resync this account as ' + BTAccountType +  '.',
                }); 
                $A.get("e.force:closeQuickAction").fire();
            }
        }

    },

    handleChangeAccountType: function(component, event, helper){
        var auraIdField = event.getSource().getLocalId();

        console.log('Selected account type : ',component.find(auraIdField).get("v.value"));

        component.set("v.AccountType",component.find(auraIdField).get("v.value"));
    },

    CloseQuickAction: function(component, event, helper){
        $A.get("e.force:closeQuickAction").fire();
    },

})