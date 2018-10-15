import { Component, OnInit } from "@angular/core";
import { ScanData } from "../core/scan.data";

@Component({
    selector: "ScanResult",
    moduleId: module.id,
    templateUrl: "./scan-result.component.html"
})
export class ScanResultComponent implements OnInit {

    constructor(
        public data: ScanData
    ) { }

    ngOnInit(): void {
    }
}
