/*({
	init : function(component, event, helper) {
	    var recordId = component.get("v.recordId");
	    var action = component.get("c.getPayableLines");
	    action.setParams({
	        recordId : recordId
	    });
	    action.setCallback(this, function(response){
	        var state = response.getState();
	        if(state === "SUCCESS"){
	            var result =  response.getReturnValue();
	            component.set("v.payableLines", result);
	        }
	    });
	    $A.enqueueAction(action);
	}
}) */

({
	init : function(component, event, helper) {
	    component.set("v.Spinner", true);
	    var dbAction = component.get("c.getTemplates");
	    dbAction.setParams({
	        recordId : component.get("v.recordId")
	    });
        dbAction.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
				var templates = response.getReturnValue();
				if (templates.length === 1) {
					component.set("v.selectedTemplate", templates[0].Id);
					component.set("v.isTemplateSelected", true);
                    $A.enqueueAction(component.get('c.preiewEmailTemplate'));
				}
				component.set("v.templates", templates);
			} else {
				console.error("Failed to retrieve templates");
			}
			component.set("v.Spinner", false);
			if (component.get("v.templates").length === 1) {
				helper.getTemplateBody(component, event, helper);
			}
		});
		$A.enqueueAction(dbAction);
	},	
	
	preiewEmailTemplate : function(component, event, helper) {
	    var selectedTemplate = component.get("v.selectedTemplate");
	    if(selectedTemplate != undefined){
            component.set("v.isTemplateSelected", true);
              
            helper.getTemplateBody(component, event, helper);
        }
	},
	
	closeModel : function(component, event, helper) {
	   $A.get("e.force:closeQuickAction").fire();    
	},
	
	sendEmail : function(component, event, helper){
	    component.set("v.Spinner", true);
	    var toIds = []; 
	    var ccIds = [];
	    var to = component.get("v.selectedToContact");
		var cc = component.get("v.selectedCcContact");
        var emailIds = component.get("v.emailIds");
		to.forEach(function(v){ toIds.push(v.Id) });
		cc.forEach(function(v){ ccIds.push(v.Id) });
		if(toIds.length != 0|| emailIds.length != 0){
		    var action = component.get("c.sendProposal"); 
    	    action.setParams({
    	        htmlBody : component.get("v.payableLines"),
    	        recordId : component.get("v.recordId"),
    	        templateId : component.get("v.selectedTemplate"),
    	        to : toIds,
                cc : ccIds,
                emailIds: emailIds,
    	    });
    	    action.setCallback(this, function(response){
    	        var state = response.getState();
    	        var subject = 'Bill[ref:'+component.get("v.recordId")+']';
    	        if(state === "SUCCESS"){
    	            var result = response.getReturnValue();
    	            if(result === 'Success'){
    	                component.set("v.Spinner", false);
        	            $A.get("e.force:closeQuickAction").fire();  
        	            var toastEvent = $A.get("e.force:showToast");
                        toastEvent.setParams({
                            "title": "Success!",
                            "type": 'success',
                            "message": "Email Sent Successfully"
                        });
                        toastEvent.fire();
                         /* var taskaction = component.get("c.createTask");
    		              taskaction.setParams({
    		                "whatId" : component.get("v.recordId"),
    		                "emailSubject" : subject
    		            });
    		            $A.enqueueAction(taskaction);*/
    	            }else{
    	                $A.get("e.force:closeQuickAction").fire();  
        	            var toastEvent = $A.get("e.force:showToast");
                        toastEvent.setParams({
                            "type": 'error',
                            "message": result
                        });
                        toastEvent.fire();    
    	            }
    	            $A.get('e.force:refreshView').fire();
    	        }
    	    });
    	    $A.enqueueAction(action);    
		}else{
		    component.set("v.Spinner", false);
		    var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "Error!",
                "type": 'error',
                "message": "Please select To Address to send Email"
            });
            toastEvent.fire();    
		}
	},
    onEmailChange: function (component, event, helper) {
        var emailId = component.find('emailForm').get('v.value');
        var emailIds = component.get('v.emailIds');
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (emailId.charAt(emailId.length - 1) == ';') {
            emailId = emailId.replace(';', '');
            if (reg.test(emailId)) {
                component.set("v.toEmail", '');
                if (!emailIds.includes(emailId)) {
                    emailIds.push(emailId);
                }
            }
        }
        if(emailIds != null && emailIds != ''){
          component.set('v.emailIds', emailIds);  
        }else{
            component.set('v.emailIds', emailId);
        }
        
    },
     handleEmailRemove: function (component, event, helper) {
        var removeIndex = event.getSource().get("v.name");
        var emailIds = component.get('v.emailIds');
        emailIds.splice(removeIndex, 1);
        component.set('v.emailIds', emailIds);
    },
})