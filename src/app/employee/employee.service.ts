import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

// Components
import { Skill } from './../skill/skill';
import { Employee, EmpSkill } from './employee';
import { Department } from '../department/department';
import { Status } from '../status/status';
import { Role } from '../role/role';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
    private mainUrl = 'http://localhost:8080/';
    private employeeUrl = 'http://localhost:8080/employees';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(
        private http: HttpClient
    ) { }

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.employeeUrl);
    }

    addEmployee(emp: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.employeeUrl}/create`, emp, this.httpOptions);
    }

    updateEmployee(emp: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.employeeUrl}/${emp.id}`, this.httpOptions);
    }

    // Get table relationship
    getDepartments(): Observable<Department[]> {
        return this.http.get<Department[]>(`${this.mainUrl}/departments`);
    }

    getStatus(): Observable<Status[]> {
        return this.http.get<Status[]>(`${this.mainUrl}/status`);
    }

    getRoles(): Observable<Role[]> {
        return this.http.get<Role[]>(`${this.mainUrl}/roles`);
    }

    getSkills(): Observable<Skill[]> {
        return this.http.get<Skill[]>(`${this.mainUrl}/skills`);
    }

    getEmpSkills(): Observable<EmpSkill[]> {
        return this.http.get<EmpSkill[]>(`${this.mainUrl}/employee-skill`);
    }
}