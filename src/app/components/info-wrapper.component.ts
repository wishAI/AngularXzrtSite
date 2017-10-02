import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";

@Component({
    selector: "info-wrapper",
    templateUrl: "../resource/templates/info-wrapper.component.html",
    styleUrls: ["../resource/styles/info-wrapper.component.css"]
})
export class InfoWrapperComponent implements OnInit {
    public lang: string;
    public pageType: string;

    constructor(
        private route: ActivatedRoute,
        private slimBarService: SlimLoadingBarService
    ) {
        this.lang = "zh";
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(this.resolveQuery.bind(this));
    }

    resolveQuery(query: Object): void {
        this.slimBarService.start();

        this.lang = query["lang"];
        this.pageType = query["type"];

        this.slimBarService.complete();
    }
}
