import { map, catchError } from 'rxjs/operators';
import { Employee } from './../employee/employee';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {
    private employeeUrl = 'http://192.168.4.203:8080/login';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(
        private http: HttpClient
    ) { }

    login(data): Observable<{}> {
        return this.http.post<{}>(`${this.employeeUrl}`, data, this.httpOptions);
    }
}