
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Components
import { Employee } from 'src/app/employee/employee';

import { url } from '../common/helpers/defineUrl';

@Injectable({ providedIn: 'root' })
export class ProfileService {

    constructor(private http: HttpClient) { }

    getUserById(id: number): Observable<Employee> {
        return this.http.get<Employee>(`${url.employeeUrl}/employees/${id}`);
    }
}
