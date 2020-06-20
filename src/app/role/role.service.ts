import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Components
import { Role } from './role';
import { url } from '../common/helpers/defineUrl';

@Injectable({ providedIn: 'root' })
export class RoleService {

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getRoles(page: number, size: number): Observable<Role[]> {
        return this.http.get<Role[]>(`${url.roleUrl}?page=${page}&size=${size}`);
    }

    addRole(data): Observable<Role> {
        return this.http.post<Role>(`${url.roleUrl}/create`, data, this.httpOptions);
    }
}
