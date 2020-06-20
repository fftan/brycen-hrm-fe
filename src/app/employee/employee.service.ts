import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

// Components
import { Skill } from './../skill/skill';
import { Employee, EmpSkill } from './employee';
import { Department } from '../department/department';
import { Status } from '../status/status';
import { Role } from '../role/role';
import { TokenStorageService } from '../common/services/token-storage.service';
import {url} from '../common/helpers/defineUrl';

@Injectable({ providedIn: 'root' })
export class EmployeeService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(
        private http: HttpClient,
        private tokenService: TokenStorageService
    ) { }

    getEmployees(page, size): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${url.employeeUrl}?page=${page}&size=${size}`);
    }

    addEmployee(emp: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${url.employeeUrl}/create`, emp, this.httpOptions);
    }

    updateEmployee(emp: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${url.employeeUrl}/${emp.id}`, this.httpOptions);
    }

    // Get table relationship
    getDepartments(): Observable<Department[]> {
        return this.http.get<Department[]>(`${url.mainUrl}/departments/list`);
    }

    getStatus(): Observable<Status[]> {
        return this.http.get<Status[]>(`${url.mainUrl}/status/list`);
    }

    getRoles(): Observable<Role[]> {
        return this.http.get<Role[]>(`${url.mainUrl}/roles/list`);
    }

    getSkills(): Observable<Skill[]> {
        return this.http.get<Skill[]>(`${url.mainUrl}/skills`);
    }

    getEmpSkills(): Observable<EmpSkill[]> {
        return this.http.get<EmpSkill[]>(`${url.mainUrl}/employee-skill`);
    }
}
