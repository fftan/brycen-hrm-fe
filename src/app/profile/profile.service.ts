
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
}