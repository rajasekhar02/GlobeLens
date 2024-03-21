import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable, catchError, map, of, throwError } from 'rxjs';

import { Timezone } from './timezone';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class TimezoneService {
    heroesUrl = 'https://api.timezonedb.com/v2.1/list-time-zone';  // URL to web api

    constructor(private http: HttpClient) {
    }
    /** GET heroes from the server */
    getTimezones(): Observable<Timezone[]> {
        return this.http.get<any>(this.heroesUrl, { params: new HttpParams().set("key", "ZC83N2L3U36W").set("format", "json") })
            .pipe(
                map(x => x.zones),
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

}
