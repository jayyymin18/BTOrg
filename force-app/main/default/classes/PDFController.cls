public with sharing class PDFController {
    @AuraEnabled(cacheable=true)
    public static void convertBlobToHTML(String pdfBlob) {
        System.debug('method called' + pdfBlob);
        // try {
        //     String pdfContent = EncodingUtil.base64Encode(pdfBlob);
        //     String hexChars = '0123456789ABCDEF';
        //     String htmlBody = '';
            
        //     for (Integer i = 0; i < pdfContent.length(); i++) {
        //         String currentChar = pdfContent.substring(i, i + 1);
        //         Integer decimalValue = hexChars.indexOf(currentChar.toUpperCase());
                
        //         if (decimalValue >= 0 && decimalValue <= 15) {
        //             htmlBody += String.fromCharArray(new Integer[] { decimalValue + 32 });
        //         }
        //     }
        //     System.debug('htmlBody ==>  ' + htmlBody);
        //     return htmlBody;
        // } catch (Exception ex) {
        //     // Handle any exceptions
        //     System.debug('Error converting Blob to HTML: ' + ex.getMessage());
        //     return '';
        // }

        // String pdfString = pdfBlob.toString();

        // // Perform any necessary operations with the Blob value
        // System.debug('PDF Blob Value: ' + pdfString);

        // // Return the HTML body
        // String htmlBody = '<html><body>PDF Blob Value: ' + pdfString + '</body></html>';
        // System.debug('html' + htmlBody);
        // return htmlBody;
    }
}