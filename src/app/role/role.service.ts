import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

// Components
import { Role } from './role';

@Injectable({ providedIn: 'root' })
export class RoleService {
    url = 'http://192.168.4.203:8080/roles';

    httpOptions = {
        headers: new HttpHeaders({'ContentType': 'application/json'})
    };
    
    constructor(private http: HttpClient) { }

    getRoles(page: number, size: number): Observable<Role[]> {
        return this.http.get<Role[]>(`${this.url}?page=${page}&size=${size}`);
    }

    addRole(data): Observable<Role> {
        return this.http.post<Role>(`${this.url}/create`, data, this.httpOptions);
    }
}