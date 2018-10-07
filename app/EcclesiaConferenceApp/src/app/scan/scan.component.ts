import { Component, OnInit } from "@angular/core";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { alert, AlertOptions } from "tns-core-modules/ui/dialogs";

@Component({
    selector: "Scan",
    moduleId: module.id,
    templateUrl: "./scan.component.html"
})
export class ScanComponent implements OnInit {

    result: string;

    constructor(
        private barcodeScanner: BarcodeScanner
    ) {}

    ngOnInit(): void {}

    scanBarcode() {
        this.barcodeScanner.scan({ 
            formats: "QR_CODE",
            showTorchButton: true,
            beepOnScan: true,
            resultDisplayDuration: 0
        }).then((result) => {
            this.result = result.text;
          }, (errorMessage) => {
            console.log("No scan. " + errorMessage);
          }
        );
    }
}
