
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Components
import { Employee } from 'src/app/employee/employee';

import { url } from '../common/helpers/defineUrl';

@Injectable({ providedIn: 'root' })
export class ProfileService {

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) { }

    getUserById(id: number): Observable<Employee> {
        return this.http.get<Employee>(`${url.employeeUrl}/${id}`);
    }

    updateProfile(data): Observable<{}>{
        return this.http.post<{}>(`${url.employeeUrl}/create`, data, this.httpOptions);
    }
}
