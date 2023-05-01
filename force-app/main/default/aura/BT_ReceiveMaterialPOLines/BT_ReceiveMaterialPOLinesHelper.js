({
	readFiles2 : function(component, event, helper, file,Index){
        var filesList = component.get("v.fileData2");
        var reader = new FileReader(); 
        //check the size of file 
        if(file.size > 4000000){
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "Error!",
                "type": "error",
                "message": "File size is too large. Max file size is 4MB."
            });
            toastEvent.fire();
            return;
        }
        reader.onload = () => {
            var base64 = reader.result.split(',')[1]; 
            var fileData2 = {
            'fileName': file.name,
            'fileContent': base64,
            'Index': Index,
        }

        console.log(JSON.stringify(fileData2));
        component.get("v.fileData2").push(fileData2);
        component.set("v.fileData2",component.get("v.fileData2"))
		console.log(component.get("v.fileData2"));
        var names = []
        for (var i = 0; i < component.get("v.fileData2").length; i++) {
            var name = {};
            name['FileName'] = [];
            name['Index'] = (JSON.parse(JSON.stringify(component.get("v.fileData2")[i])).Index)
            name['FileName'] = JSON.parse(JSON.stringify(component.get("v.fileData2")[i]))["fileName"];
            names.push(name);
        }
        component.set("v.FileNameList",names);
        component.set("v.fileBody", filesList.fileName);
		console.log(component.get("v.FileNameList"));
        }
        reader.readAsDataURL(file);
    },
})