// ({
//     doInit: function(component, event, helper) {
//         var workspaceAPI = component.find("workspace");
//         var recordId = component.get("v.recordId");
//            workspaceAPI.getFocusedTabInfo().then(function(response) {
//                var focusedTabId = response.tabId;
//                var vfURL = '/apex/BT_SyncProductRedirectToAura?id=' +recordId;
//                var tabLabel = 'Sync Product';
//                workspaceAPI.openSubtab({
//                    parentTabId: focusedTabId,
//                    url: vfURL ,
//                    focus: true,
//                    pageReference: {
//                     "type": "standard__webPage",
//                     "attributes": {
//                         "url": vfURL,
//                         "label": tabLabel
//                     }
//                    }
//                });
//            })
//            .catch(function(error) {
//                console.log(error);
//            });
//        }
// });

({
    doInit: function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        var recordId = component.get("v.recordId");
        
        workspaceAPI.getFocusedTabInfo().then(function(response) {
            var focusedTabId = response.tabId;
            var vfURL = '/apex/BT_SyncProductRedirectToAura?id=' + recordId;
            var tabLabel = 'Sync Product';
            var tabIcon = 'custom:custom5'; // Custom tab icon
            
            // Open the subtab
            workspaceAPI.openSubtab({
                parentTabId: focusedTabId,
                url: vfURL,
                focus: true,
                pageReference: {
                    "type": "standard__webPage",
                    "attributes": {
                        "url": vfURL,
                    }
                }
            }).then(function(subtabId) {
                // Set the label of the subtab
                workspaceAPI.setTabLabel({
                    tabId: subtabId,
                    label: tabLabel
                });

                // Set the tab icon
                workspaceAPI.setTabIcon({
                    tabId: subtabId,
                    icon: tabIcon
                });
            });
        })
        .catch(function(error) {
            console.log(error);
        });
    }
});