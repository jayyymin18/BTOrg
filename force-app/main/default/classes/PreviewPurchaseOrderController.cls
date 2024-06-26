public with sharing class PreviewPurchaseOrderController {
   
    @AuraEnabled
   public Static List<EmailTemplate> getTemplates(){
    List<Emailtemplate> temrec;
     if(Schema.sObjectType.Emailtemplate.fields.Id.isAccessible()&&
           Schema.sObjectType.Emailtemplate.fields.Name.isAccessible() &&
           Schema.sObjectType.Emailtemplate.fields.folderid.isAccessible() &&
           Schema.sObjectType.Folder.fields.Name.isAccessible()){
            List<String> nameList = new List<String>();
            nameList.add('Purchase Order Lien Template');
            nameList.add('Purchase Order Approved Template');

          // temrec = [Select Id, Name, folder.name from Emailtemplate where folder.name = 'BT PO' and Name !=:'Purchase Order Line Template'];
           temrec = [Select Id, Name, folder.name,DeveloperName from Emailtemplate where folder.name = 'BT PO' and Name !=: nameList and  DeveloperName !=:'Purchase_Order_Template'];
           }
       return temrec;
   }
   
   @AuraEnabled
   public static string getPurchaseOrderLines(String recordId, String templateId){
        string templateBody = '';
       string templateBody1 = '';
       string templateBody2 = '';
       Contact con ;
       if(Schema.sObjectType.Contact.fields.Id.isAccessible()&&
           Schema.sObjectType.Contact.fields.Name.isAccessible() &&
           Schema.sObjectType.Contact.fields.email.isAccessible()  ){
           con = [select id, Email from Contact where email != null order by createddate desc limit 1 ];
           }
       String[] toaddres;
       toaddres = new String[]{con.email};
       Savepoint sp = Database.setSavepoint();
       list<Messaging.SingleEmailMessage> msgList= new List<Messaging.SingleEmailMessage>(); 
       list<Messaging.SingleEmailMessage> msgList1= new List<Messaging.SingleEmailMessage>(); 
       List<String> templateList = new List<String>();
       Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
       
       string theTemplate = [SELECT Id FROM EmailTemplate WHERE Id =: templateId].Id; 
       email.setTemplateId(theTemplate);
       email.setWhatId(recordId);                        
       email.setTargetObjectId(con.Id);       
       email.setSaveAsActivity(true);
       email.setToAddresses(toaddres);
       msgList.add(email);
       
       Messaging.SendEmailResult [] r = Messaging.sendEmail(new Messaging.SingleEmailMessage[] {email}); 
       System.debug('Email Results isSuccess = ' +  r[0].IsSuccess());
       Database.rollback(sp); 
       for (Messaging.SingleEmailMessage emailNew : msgList) {                   
           templateBody1 = emailNew.getHTMLBody(); 
       }
       templateBody = templateBody1 ;
       system.debug('Final templateBody ----------> '+templateBody);

       List<buildertek__Purchase_Order__c> corec=[SELECT id,  buildertek__TemplateId__c , buildertek__Template_Name__c  from buildertek__Purchase_Order__c where Id=:recordId limit 1];
       List<EmailTemplate> emailTemp = [SELECT Id,Name,Subject FROM EmailTemplate WHERE Id =:templateId];
       if(corec.size()>0){
            corec[0].buildertek__TemplateId__c = templateId;
            if(!emailTemp.isEmpty()){
                corec[0].buildertek__Template_Name__c= emailTemp[0].Name;
            }
        }
        update corec;
        
       return templateBody;
       
   }
   
   @AuraEnabled
   public static String sendProposal(String htmlBody, String recordId, String templateId, List<String> to, List<String> cc,String fileid, List<Id> attacheDocs, String emailSubject){
       try{

           System.debug('attacheDocs ==> '+attacheDocs);
           String body = '';
           //String subject = 'Purchase Order';
           String subject = emailSubject; 
           System.debug(subject);
           string templateBody1 = '';
           Blob filebody;
           list<buildertek__Admin_Interface_Node_Configuration__c> adminInterfaceNodeConfigurations = [Select Id,
                                                                                                buildertek__Quote_Configuration__c,buildertek__Email_Subject__c 
                                                                                                from buildertek__Admin_Interface_Node_Configuration__c
                                                                                                WHERE Name=:'Purchase Order Configuration' and buildertek__Email_Subject__c !=null limit 1];
        //   if(adminInterfaceNodeConfigurations.size()>0){
        //       subject = adminInterfaceNodeConfigurations[0].buildertek__Email_Subject__c;
        //   }else{
        //       subject = 'Purchase Order'; 
        //   } 
          List<buildertek__ConfirmationPageSiteURL__c> confirmationurl = buildertek__ConfirmationPageSiteURL__c.getall().values();
           string SiteUrl;
           if(confirmationurl.size() > 0){
             SiteUrl = confirmationurl[0].buildertek__SiteURL__c ;
           }
          List<string> strTO = new List<string>();
          List<string> strCC = new List<string>();
          SET<Id> contactIdSet = new SET<Id>();
          List<Contact> conList = new List<Contact>();
          if(Schema.sObjectType.Contact.fields.Id.isAccessible()
              && Schema.sObjectType.Contact.fields.email.isAccessible()){
              conList = [Select Id, email from Contact where Id IN:to and email != null];        
          }
          system.debug('conList -------> '+conList);
          for(Contact con: conList){
              strTO.add(con.email);
          }
          List<Contact> ccConList = new List<Contact>(); 
          if(cc.size() > 0 && Schema.sObjectType.Contact.fields.Id.isAccessible()
              && Schema.sObjectType.Contact.fields.Email.isAccessible()){
              ccConList = [Select Id, email from Contact where Id IN:cc and Email != null];        
          }
          if(ccConList.size() > 0){
              for(Contact con: ccConList){
                  strCC.add(con.email);
              }    
          }
          System.debug('conList[0].Id-->'+conList[0].Id);

          List<Messaging.SingleEmailMessage> msgList = new List<Messaging.SingleEmailMessage>();
          Savepoint sp = Database.setSavepoint();
          Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
          string theTemplatebodyid = [SELECT Id  FROM EmailTemplate  WHERE DeveloperName = 'PurchaseOrderBodyTemplate'].Id;
          email.setTemplateId(theTemplatebodyid);
          email.setTargetObjectId(conList[0].Id);
          email.setSaveAsActivity(false);
          email.setWhatId(recordId);
          email.setToAddresses(new List<String>{'noreplay@buildertek.com'});
          msgList.add(email);
          System.debug('msgList---->'+msgList);
          Messaging.SendEmailResult[] r = Messaging.sendEmail(new Messaging.SingleEmailMessage[]{email});
          Database.rollback(sp);
          for (Messaging.SingleEmailMessage emailNew : msgList){
              system.debug(emailNew);
              templateBody1 = emailNew.getHTMLBody();
          }
           
          List<ContentVersion> contentList = [SELECT id, Title, Versiondata, FileType FROM ContentVersion WHERE ContentDocumentId IN: attacheDocs];
          System.debug('contentList => '+contentList);

           List<Messaging.SingleEmailMessage> mails = new List<Messaging.SingleEmailMessage>();
           Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
           system.debug('strTO ---------> '+strTO);
           mail.setToAddresses(strTO);
           if(strCC != null && strCC.size() > 0) {
               system.debug('strCC -------> '+strCC);
              mail.setCcAddresses(strCC);
           }
           EmailServicesAddress eServices;
           if(Schema.sObjectType.EmailServicesAddress.fields.Id.isAccessible()&&
              Schema.sObjectType.EmailServicesAddress.fields.AuthorizedSenders.isAccessible() &&
              Schema.sObjectType.EmailServicesAddress.fields.EmailDomainName.isAccessible() &&
              Schema.sObjectType.EmailServicesAddress.fields.LocalPart.isAccessible() &&
              Schema.sObjectType.EmailServicesAddress.fields.IsActive.isAccessible()){
               eServices =  [SELECT Id,AuthorizedSenders,EmailDomainName,IsActive,LocalPart FROM EmailServicesAddress where LocalPart = 'projects'];
          } 
           string fromAddress = eServices.LocalPart+'@'+eServices.EmailDomainName;
        //     body += 'Hi, <br/><br/> ';
        //    body += '</br> Please &nbsp;'; 
        //    body += '<a href='+ SiteUrl +'buildertek__ConfirmationPage?Id='+recordId+'&templateId='+templateId+'>Click here</a>';
        //    body += '&nbsp;to confirm your Purchase Order details.' ;
           mail.setReplyTo(fromAddress);
        //    subject = subject +'[ref:'+recordId+']'; 
           mail.setSubject(subject+'[ref:'+recordId+']');
           mail.setHTMLBody(templateBody1);
           mail.setSaveAsActivity(false);
           List<Messaging.Emailfileattachment> fileAttachments = new List<Messaging.Emailfileattachment>();
           Messaging.Emailfileattachment efa = new Messaging.Emailfileattachment();
           efa.setFileName('PurchaseOrder.pdf');
           system.debug('Blob ---> '+setAttachmentBody(recordId, templateId,fileid));
           filebody = setAttachmentBody(recordId, templateId,fileid);
           efa.setBody(setAttachmentBody(recordId, templateId,fileid));
           fileAttachments.add(efa); 
           for (ContentVersion condocs : contentList) {
               System.debug('condocs=> '+condocs);
               Messaging.Emailfileattachment efat = new Messaging.Emailfileattachment();
               efat.setFileName(condocs.Title+'.'+condocs.FileType);
               efat.setBody(condocs.Versiondata);
               fileAttachments.add(efat);
           }
           System.debug('fileAttachments => '+fileAttachments);
           mail.setFileAttachments(fileAttachments);
           mails.add(mail);
           Messaging.SendEmailResult[] results = Messaging.sendEmail(mails);
           String message = 'Success';
              if(results.size() > 0){
              if (results[0].isSuccess()) {
                  string Toaddresses= '';
                  string CCaddresses= '';
                  integer i = 0;
                  for(String Str : strTO){
                      Toaddresses += Str;
                      if(strTO.size() > i){
                          Toaddresses += ';';
                      }
                      i++;
                  }
                  for(String Str : strCC){
                      CCaddresses += Str;
                      if(strCC.size() > i){
                          CCaddresses += ';';
                      }
                      i++;
                      
                  }

                  String anchorTagRegex = '<a href=\"(.*?)">(.*?)</a>';
                   String plainText = templateBody1.replaceAll(anchorTagRegex, ' ');
                   String plainText2 = plainText.stripHtmlTags();

                  system.debug('CCaddresses ----------> '+CCaddresses);
                   EmailMessage caseEmailMessage = new EmailMessage();
                  caseEmailMessage.fromAddress= UserInfo.getUserEmail();
                  caseEmailMessage.ToAddress = Toaddresses;
                  caseEmailMessage.FromName = UserInfo.getUserName();
                  caseEmailMessage.CcAddress = CCaddresses;
                  caseEmailMessage.Subject = subject;
                  caseEmailMessage.HtmlBody = templateBody1;
                  caseEmailMessage.Incoming= False;
                  //caseEmailMessage.IsTracked=true;
                  caseEmailMessage.buildertek__Is_Incoming_Email__c = false;
                  caseEmailMessage.MessageDate = system.now();
                  caseEmailMessage.TextBody = plainText2;
                  caseEmailMessage.status = '5';
                  caseEmailMessage.RelatedToId = recordId;
                  caseEmailMessage.buildertek__Subject__c = 'Re: '+subject;
                  
                  insert caseEmailMessage;        

                  ContentVersion conVer1 = new ContentVersion();
                   conVer1.PathOnClient = 'PO.pdf'; // The files name, extension is very important here which will help the file in preview.
                   conver1.Title = 'PO.pdf';
                   conVer1.VersionData = filebody; // converting your binary string to Blog
                   insert conVer1;    //Insert ContentVersion

                   ContentDocumentLink conDocLink1 = New ContentDocumentLink();
                   conDocLink1.LinkedEntityId = caseEmailMessage.Id; // Specify RECORD ID here i.e Any Object ID (Standard Object/Custom Object)
                   conDocLink1.ContentDocumentId = [SELECT ContentDocumentId FROM ContentVersion WHERE Id =:conVer1.Id].ContentDocumentId;  //ContentDocumentId Id from ContentVersion
                   conDocLink1.Visibility = 'AllUsers';
                   insert conDocLink1; 
                  
                  
                  
                  EmailMessageRelation emr = new EmailMessageRelation();
                  emr.emailMessageId = caseEmailMessage.id;
                  emr.relationId = UserInfo.getUserId(); // user id / contact Id of the sender
                  emr.relationType = 'FromAddress';
                  emr.relationAddress = caseEmailMessage.fromAddress;
                  insert emr;        
                 
              }
          }
           return message;                   
       }
       catch(Exception exp){
            system.debug('Error Message --------> '+exp);
            String message = 'Error Message => '+exp.getMessage() + 'Error Line no => '+exp.getLineNumber();

            return message;    
       }
   }
    
     @AuraEnabled
   public static String acceptandsendProposal(String htmlBody, String recordId, String templateId, List<String> to, List<String> cc,string Emailsubject, string fileid){
        try{
            String body = '';
           // String subject = 'Purchase Order';
            String subject=Emailsubject;
            list<buildertek__Admin_Interface_Node_Configuration__c> adminInterfaceNodeConfigurations = [Select Id,
                                                                                                 buildertek__Quote_Configuration__c,buildertek__Email_Subject__c 
                                                                                                 from buildertek__Admin_Interface_Node_Configuration__c
                                                                                                 WHERE Name=:'Purchase Order Configuration' and buildertek__Email_Subject__c !=null limit 1];
        //    if(adminInterfaceNodeConfigurations.size()>0){
        //        subject = adminInterfaceNodeConfigurations[0].buildertek__Email_Subject__c;
        //    }else{
        //        subject = 'Purchase Order'; 
        //    } 
             List<buildertek__ConfirmationPageSiteURL__c> confirmationurl = buildertek__ConfirmationPageSiteURL__c.getall().values();
            string SiteUrl;
            if(confirmationurl.size() > 0){
              SiteUrl = confirmationurl[0].buildertek__SiteURL__c ;
            }

           List<string> strTO = new List<string>();
           List<string> strCC = new List<string>();
           SET<Id> contactIdSet = new SET<Id>();
           List<Contact> conList = new List<Contact>();
           if(Schema.sObjectType.Contact.fields.Id.isAccessible()
               && Schema.sObjectType.Contact.fields.email.isAccessible()){
               conList = [Select Id, email from Contact where Id IN:to and email != null];        
           }
           system.debug('conList -------> '+conList);
           for(Contact con: conList){
               strTO.add(con.email);
           }
           List<Contact> ccConList = new List<Contact>(); 
           if(cc.size() > 0 && Schema.sObjectType.Contact.fields.Id.isAccessible()
               && Schema.sObjectType.Contact.fields.Email.isAccessible()){
               ccConList = [Select Id, email from Contact where Id IN:cc and Email != null];        
           }
           if(ccConList.size() > 0){
               for(Contact con: ccConList){
                   strCC.add(con.email);
               }    
           }
            
            List<Messaging.SingleEmailMessage> mails = new List<Messaging.SingleEmailMessage>();
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            system.debug('strTO ---------> '+strTO);
            mail.setToAddresses(strTO);
            if(strCC != null && strCC.size() > 0) {
                system.debug('strCC -------> '+strCC);
               mail.setCcAddresses(strCC);
            }
            EmailServicesAddress eServices;
            if(Schema.sObjectType.EmailServicesAddress.fields.Id.isAccessible()&&
               Schema.sObjectType.EmailServicesAddress.fields.AuthorizedSenders.isAccessible() &&
               Schema.sObjectType.EmailServicesAddress.fields.EmailDomainName.isAccessible() &&
               Schema.sObjectType.EmailServicesAddress.fields.LocalPart.isAccessible() &&
               Schema.sObjectType.EmailServicesAddress.fields.IsActive.isAccessible()){
                eServices =  [SELECT Id,AuthorizedSenders,EmailDomainName,IsActive,LocalPart FROM EmailServicesAddress where LocalPart = 'projects'];
           } 
            string fromAddress = eServices.LocalPart+'@'+eServices.EmailDomainName;
             body += 'Hi, <br/><br/> ';
            body += '</br> Please &nbsp;'; 
            body += '<a href='+ SiteUrl +'buildertek__ConfirmationPage?Id='+recordId+'&templateId='+templateId+'>Click here</a>';
            body += '&nbsp;to confirm your Purchase Order details.' ;
            mail.setReplyTo(fromAddress);
            // subject = subject +'[ref:'+recordId+']'; 
            mail.setSubject(subject+'[ref:'+recordId+']');
            mail.setHTMLBody(body);
            List<Messaging.Emailfileattachment> fileAttachments = new List<Messaging.Emailfileattachment>();
            Messaging.Emailfileattachment efa = new Messaging.Emailfileattachment();
            efa.setFileName('PurchaseOrder.pdf');
            system.debug('Blob ---> '+setAttachmentBody(recordId, templateId,fileid));
            efa.setBody(setAttachmentBody(recordId, templateId,fileid));
            fileAttachments.add(efa); 
            mail.setFileAttachments(fileAttachments);
            mails.add(mail);
            Messaging.SendEmailResult[] results = Messaging.sendEmail(mails);
            String message = 'Success';
                if(results.size() > 0){
               if (results[0].isSuccess()) {
                   string Toaddresses= '';
                   string CCaddresses= '';
                   integer i = 0;
                   for(String Str : strTO){
                       Toaddresses += Str;
                       if(strTO.size() > i){
                           Toaddresses += ';';
                       }
                       i++;
                   }
                   for(String Str : strCC){
                       CCaddresses += Str;
                       if(strCC.size() > i){
                           CCaddresses += ';';
                       }
                       i++;
                       
                   }
                   system.debug('CCaddresses ----------> '+CCaddresses);
                    EmailMessage caseEmailMessage = new EmailMessage();
                   caseEmailMessage.fromAddress= UserInfo.getUserEmail();
                   caseEmailMessage.ToAddress = Toaddresses;
                   caseEmailMessage.FromName = UserInfo.getUserName();
                   caseEmailMessage.CcAddress = CCaddresses;
                   caseEmailMessage.Subject = subject;
                   caseEmailMessage.HtmlBody = body;
                   caseEmailMessage.Incoming= False;
                   caseEmailMessage.buildertek__Is_Incoming_Email__c = false;
                   caseEmailMessage.MessageDate = system.now();
                   caseEmailMessage.TextBody = body.replaceAll('<br/>', '\n');
                   system.debug('Content length ---------> '+body.length());
                   caseEmailMessage.status = '5';
                   caseEmailMessage.RelatedToId = recordId;
                   caseEmailMessage.buildertek__Subject__c = 'Re: '+subject;
                   
                   insert caseEmailMessage;        
                   
                   
                   
                   EmailMessageRelation emr = new EmailMessageRelation();
                   emr.emailMessageId = caseEmailMessage.id;
                   emr.relationId = UserInfo.getUserId(); // user id / contact Id of the sender
                   emr.relationType = 'FromAddress';
                   emr.relationAddress = caseEmailMessage.fromAddress;
                   insert emr;        
                  
               }
           }
            list<buildertek__Purchase_Order__c> porec = [select id,
                                                               Name,
                                                               buildertek__Status__c,
                                                               buildertek__Customer_Accepted_Date__c,
                                                               buildertek__Date_Confirmed__c
                                                               from buildertek__Purchase_Order__c where Id=:recordId limit 1];
               if(porec.size() > 0 ){
                //    porec[0].buildertek__Date_Confirmed__c = System.today();
                //    update porec;
               }
               
            return message;                   
        }
        catch(Exception exp){
            system.debug('Error Message --------> '+exp);
           String message = exp.getMessage();
           return message;    
        }
   }
   
    private static Blob setAttachmentBody(String recordId, String templateId, String fileid){
       pagereference pdf;
       pdf = Page.buildertek__BT_GeneratePdf;
       pdf.getParameters().put('recordId',recordId);  
       pdf.getParameters().put('templateId',templateId); 
       pdf.getParameters().put('fileId',fileId);
       pdf.setRedirect(true);
       
       Blob blobbody = !Test.isRunningTest() ? pdf.getContent() : Blob.ValueOf('dummy text');
       return blobbody;
   }
   
   
   
   
    /* To Save the Signature in Files */
   @AuraEnabled
   public static string saveSign(String recId,String base64Data, String contentType,string signName){
       system.debug('base64Data-------------'+base64Data);
       string conversn;
       if(base64Data.length() > 1696 || Test.isRunningTest()){  
           base64Data = EncodingUtil.urlDecode(base64Data, 'UTF-8');   
           ContentVersion conVer = new ContentVersion();
           conVer.ContentLocation = 'S'; // to use S specify this document is in Salesforce, to use E for external files
           conVer.PathOnClient = 'SignatureName.png'; // The files name, extension is very important here which will help the file in preview.
           conVer.Title = signName; // Display name of the files
           conVer.VersionData = EncodingUtil.base64Decode(base64Data); // converting your binary string to Blog
           insert conVer;    //Insert ContentVersion
           system.debug('*******conVer*******'+conVer);
           // First get the Content Document Id from ContentVersion Object
           Id conDoc = [SELECT ContentDocumentId FROM ContentVersion WHERE Id =:conVer.Id].ContentDocumentId;
           //create ContentDocumentLink  record 
           ContentDocumentLink conDocLink = New ContentDocumentLink();
           conDocLink.LinkedEntityId = recId; // Specify RECORD ID here i.e Any Object ID (Standard Object/Custom Object)
           conDocLink.ContentDocumentId = conDoc;  //ContentDocumentId Id from ContentVersion
           conDocLink.shareType = 'I';
           insert conDocLink;  
          system.debug('conDocLink---'+conDocLink.id);
          
          list<buildertek__Purchase_Order__c> porec = [select id,
                                                               Name,
                                                               buildertek__Status__c,
                                                               buildertek__Customer_Accepted_Date__c,
                                                               buildertek__Date_Confirmed__c,
                                                               buildertek__Rejection_Reason__c
                                                               from buildertek__Purchase_Order__c where Id=:recId limit 1];
               if(porec.size() > 0 ){
                //    porec[0].buildertek__Date_Confirmed__c = System.today();
                   porec[0].buildertek__Status__c = 'Vendor Accepted';
                   update porec;
               }
            conversn = [SELECT Id,VersionData FROM ContentVersion WHERE ContentDocumentId = :conDoc AND IsLatest = true].Id;
           //system.debug('conversn[0].Id ='+conversn[0].Id);
           return conversn;
       }else{
            String message = 'NoImage';
           return message;
       }
       
   } 
   
   
   @AuraEnabled
   public static string rejectSign(String recId,String base64Data, String contentType,string signName,String rejectionReason){
       system.debug('base64Data-------------'+base64Data);
       string conversn;
       if(base64Data.length() > 1696 || Test.isRunningTest()){  
           base64Data = EncodingUtil.urlDecode(base64Data, 'UTF-8');   
           ContentVersion conVer = new ContentVersion();
           conVer.ContentLocation = 'S'; // to use S specify this document is in Salesforce, to use E for external files
           conVer.PathOnClient = 'SignatureName.png'; // The files name, extension is very important here which will help the file in preview.
           conVer.Title = signName; // Display name of the files
           conVer.VersionData = EncodingUtil.base64Decode(base64Data); // converting your binary string to Blog
           insert conVer;    //Insert ContentVersion
           system.debug('*******conVer*******'+conVer);
           // First get the Content Document Id from ContentVersion Object
           Id conDoc = [SELECT ContentDocumentId FROM ContentVersion WHERE Id =:conVer.Id].ContentDocumentId;
           //create ContentDocumentLink  record 
           ContentDocumentLink conDocLink = New ContentDocumentLink();
           conDocLink.LinkedEntityId = recId; // Specify RECORD ID here i.e Any Object ID (Standard Object/Custom Object)
           conDocLink.ContentDocumentId = conDoc;  //ContentDocumentId Id from ContentVersion
           conDocLink.shareType = 'I';
           insert conDocLink;  
          system.debug('conDocLink---'+conDocLink.id);
          
          list<buildertek__Purchase_Order__c> porec = [select id,
                                                               Name,
                                                               buildertek__Status__c,
                                                               buildertek__Customer_Accepted_Date__c,
                                                               buildertek__Date_Confirmed__c,
                                                               buildertek__Rejection_Reason__c
                                                               from buildertek__Purchase_Order__c where Id=:recId limit 1];
               if(porec.size() > 0 ){
                   porec[0].buildertek__Date_Confirmed__c = System.today();
                   porec[0].buildertek__Status__c = 'Vendor Rejected';
                   porec[0].buildertek__Rejection_Reason__c = rejectionReason;
                   update porec;
               }
            conversn = [SELECT Id,VersionData FROM ContentVersion WHERE ContentDocumentId = :conDoc AND IsLatest = true].Id;
           //system.debug('conversn[0].Id ='+conversn[0].Id);
           return conversn;
       }else{
            String message = 'NoImage';
           return message;
       }
       
   } 
   
    /* To Save the Signature in Files */
   @AuraEnabled
   public static string rejectionWithReason(String recId,String base64Data, String contentType,string signName,String rejectionReason){
       system.debug('base64Data-------------'+base64Data);
       string conversn;
       if(base64Data.length() > 1696 || Test.isRunningTest()){  
           base64Data = EncodingUtil.urlDecode(base64Data, 'UTF-8');   
           ContentVersion conVer = new ContentVersion();
           conVer.ContentLocation = 'S'; // to use S specify this document is in Salesforce, to use E for external files
           conVer.PathOnClient = 'SignatureName.png'; // The files name, extension is very important here which will help the file in preview.
           conVer.Title = signName; // Display name of the files
           conVer.VersionData = EncodingUtil.base64Decode(base64Data); // converting your binary string to Blog
           insert conVer;    //Insert ContentVersion
           system.debug('*******conVer*******'+conVer);
           // First get the Content Document Id from ContentVersion Object
           Id conDoc = [SELECT ContentDocumentId FROM ContentVersion WHERE Id =:conVer.Id].ContentDocumentId;
           //create ContentDocumentLink  record 
           ContentDocumentLink conDocLink = New ContentDocumentLink();
           conDocLink.LinkedEntityId = recId; // Specify RECORD ID here i.e Any Object ID (Standard Object/Custom Object)
           conDocLink.ContentDocumentId = conDoc;  //ContentDocumentId Id from ContentVersion
           conDocLink.shareType = 'I';
           insert conDocLink;  
           system.debug('conDocLink---'+conDocLink.id);
          
          list<buildertek__Purchase_Order__c> porec = [select id,
                                                               Name,
                                                               buildertek__Status__c,
                                                               buildertek__Customer_Accepted_Date__c,
                                                               buildertek__Date_Confirmed__c,
                                                               buildertek__Rejection_Reason__c
                                                               from buildertek__Purchase_Order__c where Id=:recId limit 1];
               if(porec.size() > 0 ){
                   porec[0].buildertek__Date_Confirmed__c = System.today();
                   porec[0].buildertek__Status__c = 'Vendor Rejected';
                   porec[0].buildertek__Rejection_Reason__c = rejectionReason;
                   
                   update porec;
               }
            conversn = [SELECT Id,VersionData FROM ContentVersion WHERE ContentDocumentId = :conDoc AND IsLatest = true].Id;
           //system.debug('conversn[0].Id ='+conversn[0].Id);
           return conversn;
       }else{
            String message = 'NoImage';
           return message;
       }
       
   } 
   @AuraEnabled
    public static String getBlobBody(String recordId, String templateId, String fileid){

        pagereference pdf;
        pdf = Page.buildertek__BT_GenerateQuotePDF;
        system.debug('*********'+pdf);
        pdf.getParameters().put('recordId', recordId);
        pdf.getParameters().put('templateId', templateId);
        pdf.getParameters().put('fileId', fileId);
        pdf.setRedirect(true);

        return EncodingUtil.base64Encode(pdf.getContent());
    }
   
}