import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "footer-info",
    templateUrl: "../resource/templates/footer.component.html",
    styleUrls: ["../resource/styles/footer.component.css"]
})
export class FooterComponent implements OnInit{
    public lang: string;

    constructor(private route: ActivatedRoute) {
        this.lang = "zh";
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(this.resolveQuery)
    }

    resolveQuery(query: Object): void {
        this.lang = query["lang"];
    }
}
