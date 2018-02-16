import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";

declare var XzrtConfig: any;

@Injectable()
export class SrcService {
    constructor(private http: Http) {
    }

    private extractText(res: Response): string {
        return res.text();
    }

    private handleError(err: Object): Observable<Object> {
        return Observable.throw(err);
    }

    public loadText(query: Object) {
        return this.http.get(XzrtConfig.BACKWARD_ROOT_URL + "/src/text", new RequestOptions({search: query}))
            .map(this.extractText.bind(this))
            .catch(this.handleError.bind(this));
    }
}
