import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DemoService {

    constructor(private http:Http) {
    }


    // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
    // The entire operation will result in an error state if any single request fails.
    getPeoples() {
        return Observable.forkJoin(
            this.http.get('/app/api/profile.json').map((res:Response) => res.json()),

        );
    }






}
