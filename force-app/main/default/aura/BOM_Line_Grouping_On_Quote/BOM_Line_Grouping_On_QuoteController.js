({
    doInit: function(component, event, helper){
        // For Set Tab Name
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getEnclosingTabId().then((response) => {
            let opendTab = response.tabId;
            workspaceAPI.setTabLabel({
                tabId: opendTab,
                label: "BOM Grouping On Quote"
            });
            workspaceAPI.setTabIcon({
                tabId: opendTab,
                icon: 'custom:custom5',
                iconAlt: 'BOM Grouping On Quote'
            });
        });
        helper.doInitHelper(component, event, helper);
    }, 

    expandCollapeAll: function(component, event, helper){
        var iconName = event.currentTarget.dataset.iconname;
        var recordId = component.get("v.recordId");

        var expandallicon = document.getElementById("expandAllBtn_" + recordId);
        var collapeallIcon = document.getElementById("collapeseAllBtn_" + recordId);

        if (iconName == 'Expand All') {
            collapeallIcon.style.display = 'block';
            expandallicon.style.display = 'none';
        } else if (iconName == 'Collapse All') {
            collapeallIcon.style.display = 'none';
            expandallicon.style.display = 'block';
        }
    },

    expandCollapeGroup: function(component, event, helper){
        var iconName = event.currentTarget.dataset.iconname;
        var spanId = event.target.id;
        console.log('spanId ==> '+spanId);

        var spanGroupId;
    
        if (iconName == 'Expand Group') {
            spanGroupId = spanId.replace('expandGroupBtn_','');
        } else if (iconName == 'Collapse Group') {
            spanGroupId = spanId.replace('collapeseGroupBtn_','');
        }
        console.log('spanGroupId => ' + spanGroupId);

        var recordDiv = 'record_'+spanGroupId;
        for(let i = 0; i < recordDiv.length; i++) {
            recordDiv[i].style.display = 'none';
        }

        // if (component.get("v.forthGrouping")) {
            
        // } else if (component.get("v.thirdGrouping")) {

        // } else if (component.get("v.secondGrouping")) {

        // } else if(component.get("v.firstGrouping")){
         
        // }

        

    }
})