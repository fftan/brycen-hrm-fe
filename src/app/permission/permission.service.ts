import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

// Components
import { Permission } from './permission';

@Injectable({ providedIn: 'root' })
export class PermissionService {
    url = 'http://192.168.4.203:8080/permissions';
    
    constructor(private http: HttpClient) { }

    getPermissions(page: number, size: number): Observable<Permission[]> {
        return this.http.get<Permission[]>(`${this.url}?page=${page}&size=${size}`);
    }
}