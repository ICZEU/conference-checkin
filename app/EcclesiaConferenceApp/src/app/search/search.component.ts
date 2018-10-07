import { Component, OnInit } from "@angular/core";
import { BarcodeScanner } from "nativescript-barcodescanner";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    constructor(
        private barcodeScanner: BarcodeScanner
    ) {}

    ngOnInit(): void {
    }

    scanBarcode() {
        this.barcodeScanner.scan({
            formats: "QR_CODE",
            closeCallback: function () { console.log("Scanner closed"); },
        }).then((result) => {
            console.log("Format: " + result.format + ",\nValue: " + result.text);
          }, (errorMessage) => {
            console.log("No scan. " + errorMessage);
          }
        );
      }
}
