import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { catchError, Observable } from "rxjs";


export interface Config{
    userid : string;
   name:string;
   email: string;
   role:string;
   iat:string;
   
}

@Injectable ()
export class LoginsService{


    constructor (private http: HttpClient){ }

    getToken( body:any ) {
        return this.http.post('http://api.swagkari.com/auth/login', body );
        // .pipe(
        //     catchError(this.handleError);
        // )
        
    }
    

    //     getConfigResponse(): Observable<HttpResponse<Config>>{
    //     return this.http.get<Config>(
    //         this.loginUrl, {observe:'response'}
    //     )
    // }

    // private handleError(error: HttpResponse) {
    //     if(error.status === 0){
    //         console.error('An error ouccurred:' error.error);
    //     }else{
    //         console.error(
    //             `Backend returned code ${error.status}, body was:`, error.error
    //         );

    //     }
    //         return throwError (() => new Error('Something gone Wrong; plese try again later'));
            
    // }


}
