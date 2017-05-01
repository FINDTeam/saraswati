import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { Klass } from "app/models/class";

@Injectable()
export class ClassService {
  private url: string = 'http://localhost:5000/api/classes';
  constructor(private http: Http) { }

    getClasses(): Observable<Klass[]> {
        // add authorization header with jwt token
        //let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        //let options = new RequestOptions({ headers: headers });
console.log(this.url);
        // get carmake from api
        return this.http.get(this.url)
            .map((response: Response) => response.json())
            .catch(this.handleError);
            
    }

    getClass(id): Observable<Klass> {
        // add authorization header with jwt token
        //let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        //let options = new RequestOptions({ headers: headers });

        // get carmake from api
        return this.http.get(this.getUrlwith(id))
            .map((response: Response) => {
                if (response.status == 204)
                    this.handleError(response);
                return response.json();})
            .catch(this.handleError);
    }

    addClass(klass: Klass): Observable<Klass> {
       
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        //let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, klass)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    updateClass(klass: Klass): Observable<boolean> {
       
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        //let options = new RequestOptions({ headers: headers });

        return this.http.put(this.getUrlwith(klass.id), klass)
            .map((response: Response) => {
                return true;
                //response.json()
            })
            .catch(this.handleError);
    }

    deleteClass(id): Observable<boolean> {
        //let body = JSON.stringify(carmake);
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        //let options = new RequestOptions({ headers: headers });

        return this.http.delete(this.getUrlwith(id))
            .map((response: Response) => {
                return true;
            })
            .catch(this.handleError);
    }

    private getUrlwith(id) {
        return this.url + "/" + id;
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        let body: any;
        let err: any;
        console.log(error);
        if (error instanceof Response) {
            /*if (error.constructor  == Object)
            {            
                body = error.json() || '';
                err = body.error || JSON.stringify(body);
            } else
            {*/
            err = error.text();//['_body']; 
            //}

            errMsg = error.status ? `${error.status} - ${error.statusText || ''} ${err}` : 'Server No Response';//`${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
