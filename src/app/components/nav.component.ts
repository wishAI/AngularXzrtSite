import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";

@Component({
    selector: "navigation",
    templateUrl: "../resource/templates/nav.component.html",
    styleUrls: ["../resource/styles/nav.component.css"]
})
export class NavComponent implements OnInit{
    public lang: string;

    constructor(
        private route: ActivatedRoute,
        private slimBarService: SlimLoadingBarService
    ) {
        this.lang = "zh";
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(this.resolveQuery);
    }

    resolveQuery(query: Object): void {
        this.lang = query["lang"];
    }
}
