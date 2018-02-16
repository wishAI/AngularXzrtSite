
import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";

declare var XzrtConfig: any;

@Injectable()
export class JoinService {
    constructor(private http: Http) {
    }

    private extractResponse(res: Response): string {
        return res.text();
    }

    private handleError(err: Object): Observable<Object> {
        return Observable.throw(err);
    }

    public storeForm(data: Object): Observable<Object> {
        let headers = new Headers({"Content-Type": "application/json"});
        let options: RequestOptions = new RequestOptions({ headers: headers });

        return this.http.post(XzrtConfig.BACKWARD_ROOT_URL + "/doSaveApplicant", data, options)
            .map(this.extractResponse.bind(this))
            .catch(this.handleError.bind(this));
    }
}
