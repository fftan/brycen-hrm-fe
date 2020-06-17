
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

// Components

@Injectable({providedIn: 'root'})
export class EmployeeSkillService {

    mainUrl = 'http://192.168.4.203:8080';

    constructor(private http: HttpClient){}

    getSkill(): Observable<[]> {
        return this.http.get<[]>(`${this.mainUrl}/skill`);
    }

    getLevel(): Observable<[]> {
        return this.http.get<[]>(`${this.mainUrl}/levels`);
    }
}
