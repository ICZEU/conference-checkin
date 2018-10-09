import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "ScanResult",
    moduleId: module.id,
    templateUrl: "./scan-result.component.html"
})
export class ScanResultComponent implements OnInit {
    
    id: any;

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.id = id;
    }
}
