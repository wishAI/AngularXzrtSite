import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";

declare var XzrtConfig: any;

@Injectable()
export class ContentService {
    constructor(private http: Http) {
    }

    private extractData(res: Response): Object {
        return res.json();
    }

    private handleError(err: Object): Observable<Object> {
        return Observable.throw(err);
    }

    loadPage(query: Object): Observable<Response> {
        return this.http.get(XzrtConfig.BACKWARD_ROOT_URL + "/article", new RequestOptions({search: query}))
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this));
    }
}
