import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

// Components

@Injectable({ providedIn: 'root' })
export class DashboardService {
    url = 'http://192.168.4.203:8080/dashboard';
    mainUrl = 'http://192.168.4.203:8080';
    
    constructor(private http: HttpClient) { }

    getData(): Observable<[]> {
        return this.http.get<[]>(`${this.url}`);
    }

    getDepartment(): Observable<[]> {
        return this.http.get<[]>(`${this.mainUrl}/departments/list`);
    }
}