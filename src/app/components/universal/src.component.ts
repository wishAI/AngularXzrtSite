import {Component, Input, OnInit} from "@angular/core";
import {SrcService} from "../../services/src.service";
import {Observable} from "rxjs";

declare var urlToQuery: any;

@Component({
    selector: "src",
    templateUrl: "../../resource/templates/src.component.html",
    providers: [SrcService]
})
export class SrcComponent implements OnInit{
    @Input() public srcType: string;
    @Input() public srcUrl: string;

    text: string;

    constructor(private srcService: SrcService) {
    }

    public ngOnInit(): void {
        let query: Object = urlToQuery(this.srcUrl);

        switch(this.srcType) {
            case "text": {
                this.srcService.loadText(query).subscribe(this.resolveText.bind(this), this.handleError.bind(this));
            }
        }
    }

    private handleError(err: Object): Observable<Object> {
        return Observable.throw(err);
    }

    private resolveText(text: string): void {
        this.text = text;
    }
}
