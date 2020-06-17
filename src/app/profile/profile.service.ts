
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

// Components
import { Employee } from 'src/app/employee/employee';
import { Department } from 'src/app/department/department';
import { Status } from '../status/status';
import { Role } from '../role/role';

@Injectable({providedIn: 'root'})
export class ProfileService {

    mainUrl = 'http://192.168.4.203:8080';
    url = 'http://192.168.4.203:8080/employees';

    constructor(private http: HttpClient){}

    getUserById(id:number): Observable<Employee> {
        return this.http.get<Employee>(`${this.url}/${id}`);
    }

    // relationship data
    getDepartments(): Observable<Department[]>{
        return this.http.get<Department[]>(`${this.mainUrl}/departments`);
    }

    getStatus(): Observable<Status[]>{
        return this.http.get<Status[]>(`${this.mainUrl}/status`);
    }

    getRoles(): Observable<Role[]>{
        return this.http.get<Role[]>(`${this.mainUrl}/roles`);
    }
}