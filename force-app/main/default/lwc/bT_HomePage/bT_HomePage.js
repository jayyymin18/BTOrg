import { LightningElement, track, wire } from 'lwc';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import PDF_Resource from '@salesforce/resourceUrl/Releasenote';
import Resource from '@salesforce/resourceUrl/Release';

import convertBlobToHTML from '@salesforce/apex/PDFController.convertBlobToHTML';

export default class Qf_guide2 extends LightningElement {
  @track spinnerdatatable = false;
  error_toast = true;
  pdfUrl;
  img;
  pdfBlob;
  htmlBody;

  connectedCallback() {
    this.img = Resource;
    this.pdfUrl = PDF_Resource;
    document.title = 'BT Admin Configuration';
  }
openPDF() {
  window.open(this.pdfUrl);
}
  // @wire(convertBlobToHTML)
  // wiredConvertBlobToHTML({ error, data }) {
  //   if (data) {
  //     this.pdfUrl = data;
  //     console.log("HTML Body:", this.pdfUrl);
  //     // this.createPdfUrl();
  //     // Perform any additional operations with the HTML body
  //   } else if (error) {
  //     console.error('Error converting Blob to HTML:', error);
  //   }
  // }
  renderedCallback() {
    this.template.querySelectorAll("a").forEach(element => {
      element.addEventListener("click", evt => {
        let target = evt.currentTarget.dataset.tabId;

        this.template.querySelectorAll("a").forEach(tabel => {
          if (tabel === element) {
            tabel.classList.add("active-tab");
          } else {
            tabel.classList.remove("active-tab");
          }
        });
        this.template.querySelectorAll(".tab").forEach(tabdata => {
          tabdata.classList.remove("active-tab-content");
        });
        this.template.querySelector('[data-id="' + target + '"]').classList.add("active-tab-content");
      });
    });
  }

  tabing() {
    const target = "tab1";
    this.template.querySelectorAll("a").forEach(tabel => {
      tabel.classList.remove("active-tab");
    });
    this.template.querySelectorAll(".tab").forEach(tabdata => {
      tabdata.classList.remove("active-tab-content");
    });
    this.template.querySelector('[data-tab-id="' + target + '"]').classList.add("active-tab");
    this.template.querySelector('[data-id="' + target + '"]').classList.add("active-tab-content");
  }
}