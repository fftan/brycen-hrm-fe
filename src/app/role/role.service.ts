import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

// Components
import { Role } from './role';

@Injectable({ providedIn: 'root' })
export class RoleService {
    url = 'http://192.168.4.203:8080/roles';
    
    constructor(private http: HttpClient) { }

    getRoles(page: number, size: number): Observable<Role[]> {
        return this.http.get<Role[]>(`${this.url}?page=${page}&size=${size}`);
    }
}