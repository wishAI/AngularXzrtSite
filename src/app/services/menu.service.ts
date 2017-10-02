import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";

declare var XzrtConfig: any;

@Injectable()
export class MenuService {
    constructor(private http: Http) {
    }

    public loadPage(query: Object): Observable<Response> {
        return this.http.get(XzrtConfig.BACKWARD_ROOT_URL + "/menu", new RequestOptions({search: query}))
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this));
    }

    public loadList(query: Object): Observable<Response> {
        return this.http.get(XzrtConfig.BACKWARD_ROOT_URL + "/menu/list", new RequestOptions({search: query}))
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this));
    }

    private extractData(res: Response): Object {
        return res.json();
    }

    private handleError(err: Object): Observable<Object> {
        return Observable.throw(err);
    }
}
