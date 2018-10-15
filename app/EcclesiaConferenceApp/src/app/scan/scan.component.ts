import { Component, OnInit } from "@angular/core";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { RouterExtensions } from "nativescript-angular/router";
import { ScanData } from "../core/scan.data";

@Component({
    selector: "Scan",
    moduleId: module.id,
    templateUrl: "./scan.component.html"
})
export class ScanComponent implements OnInit {

    constructor(
        private barcodeScanner: BarcodeScanner,
        private routerExtensions: RouterExtensions,
        private data: ScanData
    ) {}

    ngOnInit(): void {}

    scanBarcode() {
        this.barcodeScanner.scan({ 
            formats: "QR_CODE",
            showTorchButton: true,
            beepOnScan: true,
            resultDisplayDuration: 0
        }).then(
            (result) => {
                this.navigateToResultPage(result.text);
            },
            (errorMessage) => {
                console.log("No scan. " + errorMessage);
            }
        );
    }

    navigateToResultPage(qrCodeResult) {
        this.data.qrCodeValue = qrCodeResult;
        this.routerExtensions.navigate(
            [ '/', { outlets: { scanTab: ['scan-result'] } }],
            { transition: { name: "fade" } });
    }
}
