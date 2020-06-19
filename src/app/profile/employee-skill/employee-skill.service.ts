
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

// Components

@Injectable({providedIn: 'root'})
export class EmployeeSkillService {

    mainUrl = 'http://192.168.4.203:8080';

    httpOptions = {
        headers: new HttpHeaders({'ContentType': 'application/json'})
    };

    constructor(private http: HttpClient){}

    getSkill(): Observable<[]> {
        return this.http.get<[]>(`${this.mainUrl}/skills/list`);
    }

    getLevel(): Observable<[]> {
        return this.http.get<[]>(`${this.mainUrl}/levels/list`);
    }

    saveSkill(data): Observable<{}> {
    console.log("EmployeeSkillService -> constructor -> data", data)
        return this.http.post<{}>(`${this.mainUrl}/employee-skill/create`, data, this.httpOptions);
    }
}
