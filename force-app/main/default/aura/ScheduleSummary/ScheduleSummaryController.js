({
    doInit: function (component, event, helper) {
        var recordId = component.get("v.recordId");
        helper.loadTasks(component, recordId);
        helper.getContractorListHelper(component, event, helper);
    },
    filterRec: function(component, event,helper) {
        var contractorId = component.get("v.selectedContractorId");
        // if contractorId is null or empty make logic to show all contractor data in picklist
        if (contractorId == null || contractorId == '') {
          var result =  component.get('v.allContractorRecords');
            if(result.length > 50){
                var contractorListLimited = [];
                for(var  i=0; i<=49; i++){
                    contractorListLimited.push(result[i]);
                }
                component.set("v.contractorList", contractorListLimited);
                console.log("contractorList => ", contractorListLimited);
            }
            else{
                component.set('v.contractorList' ,result);
            }
        //   console.log('ContractorList',ContractorList);
        //   component.set("v.contractorList",ContractorList);
        }
        console.log('contractor id : '+contractorId);

        var recordId = component.get("v.recordId");
        helper.FieterTaskWithVendorNameAndCurrentProject(component, recordId, contractorId);
    },
    searchContractorData : function(component, event, helper) {
        component.set('v.displayContractor', true);
        console.log('displayContractor > ', component.get('v.displayContractor'));
        event.stopPropagation();
    },
    keyupContractorData: function (component, event, helper) {
        component.set('v.displayContractor', true);
        var searchFilter = event.getSource().get("v.value").toUpperCase();
        setTimeout($A.getCallback(function() {
            var listOfAllRecords = component.get('v.allContractorRecords');
            var tempArray = [];
            var i;
            
            for (i = 0; i < listOfAllRecords.length; i++) {
                var recordName = listOfAllRecords[i].Name;
                if (recordName && recordName.toUpperCase().indexOf(searchFilter) !== -1) {
                    tempArray.push(listOfAllRecords[i]);
                }
            }
            
            if (tempArray.length === 0) {
                component.set('v.selectedContractorId', ' ');
                component.set("v.contractorList", []);
                component.set("v.Message", 'There are no Contractors.');
                // component.set("v.Spinner", false);
                
            } else  if(tempArray.length <= 50){
                component.set("v.contractorList", tempArray);
            }
            else if(tempArray.length > 50){
                var tempArrayLimited = [];
                for(var  i=0; i<=49; i++){
                    tempArrayLimited.push(tempArray[i])
                }
                component.set("v.contractorList", tempArrayLimited);
            }
        }), 1000);
    },
    keyupContractorData2: function (component, event, helper) {
        var startTime = new Date();
        console.log('keyupContractorData2 startTime', startTime);
        component.set('v.displayContractor', true);
        var searchFilter = event.getSource().get("v.value").toUpperCase();
        // setTimeout($A.getCallback(function() {
            var listOfAllRecords = component.get('v.allContractorRecords');
            var tempArray = [];
            var i;
            
            for (i = 0; i < listOfAllRecords.length; i++) {
                // var recordName = listOfAllRecords[i].Name;
                if (listOfAllRecords[i].Name && listOfAllRecords[i].Name.toUpperCase().indexOf(searchFilter) !== -1) {
                    tempArray.push(listOfAllRecords[i]);
                }
            }
            
            if (tempArray.length === 0) {
                component.set('v.selectedContractorId', ' ');
                component.set("v.contractorList", []);
                component.set("v.Message", 'There are no Contractors.');
                // component.set("v.Spinner", false);
                
            } else {
                component.set("v.contractorList", tempArray);
            }
        // }), 2000);
        var endTime = new Date();
        console.log('keyupContractorData2 startTime', endTime);
        console.log('time diff >> ', endTime - startTime, " s");

    },
    hideList : function(component, event, helper) {
        component.set('v.displayContractor', false);
    },
    clearInput: function(component, event, helper) {
        component.set('v.selectedContractorName','');
        component.set('v.selectedContractorId','');

        var contractorId = '';
        // if contractorId is null or empty make logic to show all contractor data in picklist
        if (contractorId == null || contractorId == '') {
            var result =  component.get('v.allContractorRecords');
              if(result.length > 50){
                  var contractorListLimited = [];
                  for(var  i=0; i<=49; i++){
                      contractorListLimited.push(result[i]);
                  }
                  component.set("v.contractorList", contractorListLimited);
                  console.log("contractorList => ", contractorListLimited);
              }
              else{
                  component.set('v.contractorList' ,result);
              }
          //   console.log('ContractorList',ContractorList);
          //   component.set("v.contractorList",ContractorList);
        }
        console.log('contractor id : '+contractorId);

        var recordId = component.get("v.recordId");
        helper.FieterTaskWithVendorNameAndCurrentProject(component, recordId, contractorId);
        
    },
    preventHide: function(component, event, helper) {
        event.preventDefault();
        
    },
    clickHandlerContractor: function(component, event, helper){
        component.set('v.displayContractor', false);
        var recordId = event.currentTarget.dataset.value;
        component.set('v.selectedContractorId', recordId);
        var contractorList = component.get("v.contractorList");
        contractorList.forEach(element => {
            if (recordId == element.Id) {
                component.set('v.selectedContractorName', element.Name);

            }
        });
    },

    scrollDownLoading: function(component, event, helper){
        try {
            var ScrolledDiv = event.target;
            // var scrollHeight = component.get("v.scrollHeight");
            // var contractorCount = component.get("v.contractorCount");
            
            // if(ScrolledDiv.scrollTop >= scrollHeight){
            //     console.log('scrollHeight>> ', ScrolledDiv.scrollHeight);
            //     console.log('Scrolled >> ', ScrolledDiv.scrollTop);
            //     console.log('scrollHeight >> ', scrollHeight);
            //     console.log('contractorCount >> ', contractorCount);
            //     var result =  component.get('v.allContractorRecords');
            //     if(result.length > (contractorCount+50)){
            //         var contractorListLimited = component.get("v.contractorList");
            //         for(var  i=contractorCount; i<(contractorCount+50); i++){
            //             contractorListLimited.push(result[i]);
            //         }
            //         component.set("v.contractorList", contractorListLimited);
            //     }
            //     else{
            //         component.set('v.contractorList' ,result);
            //     }
            //     console.log("contractorList => ", component.get("v.contractorList"));
            //     var scrollHeight = component.set("v.scrollHeight", (scrollHeight+1500));
            //     var contractorCount = component.set("v.contractorCount", (contractorCount+50))
            // }
            
            
        } catch (error) {
            console.log('error >> ', error.message);            
        }
    }
})