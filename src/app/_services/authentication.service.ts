import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }


    readonly API_URL  = "http://localhost:8080/twitter/"



    login(username : string , password:string ) {
       
        var reqHeader = new HttpHeaders({'Content-type':'application/json'});

        return this.http.post( this.API_URL + 'signUp/', {
            "login" : username,
            "pass" : password,
            "pConfirmationPass" : ""
    
           } , {headers:reqHeader });




    }


    

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
