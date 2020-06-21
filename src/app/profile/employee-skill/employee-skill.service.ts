
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Components
import { url } from '../../common/helpers/defineUrl';

@Injectable({ providedIn: 'root' })
export class EmployeeSkillService {

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getSkill(): Observable<[]> {
        return this.http.get<[]>(`${url.mainUrl}/skills/list`);
    }

    getLevel(): Observable<[]> {
        return this.http.get<[]>(`${url.mainUrl}/levels/list`);
    }

    getDataByEmployeeId(id): Observable<[]> {
        console.log("EmployeeSkillService -> constructor -> id", id)
        return this.http.get<[]>(`${url.mainUrl}/employee-skill?employee_id=${id}`);
    }

    saveSkill(data): Observable<{}> {
        console.log('EmployeeSkillService -> constructor -> data', data)
        return this.http.post<{}>(`${url.mainUrl}/employee-skill/create`, data, this.httpOptions);
    }
}
