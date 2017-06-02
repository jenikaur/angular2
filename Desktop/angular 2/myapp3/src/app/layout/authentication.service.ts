import { Injectable } from '@angular/core';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AuthenticationService {
    constructor(private _http: Http) { }

    login (body: Object): Observable<Comment> {
        let bodyString = JSON.stringify(body); 
        let headers = new Headers({ 'Content-Type': 'application/json' }); 
        let options = new RequestOptions({ headers: headers }); 
        return this._http.post('/login', body, options) 
         .map((res:Response) => res.json()) 
         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    }   

}
