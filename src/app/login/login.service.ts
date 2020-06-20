import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Components
import { url } from '../common/helpers/defineUrl';

@Injectable({ providedIn: 'root' })
export class LoginService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(
        private http: HttpClient
    ) { }

    login(data): Observable<{}> {
        return this.http.post<{}>(`${url.mainUrl}/login`, data, this.httpOptions);
    }
}
