import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Components
import { Permission } from './permission';
import { url } from '../common/helpers/defineUrl';

@Injectable({ providedIn: 'root' })
export class PermissionService {

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };

    constructor(private http: HttpClient) { }

    getPermissions(page: number, size: number): Observable<Permission[]> {
        return this.http.get<Permission[]>(`${url.permissionUrl}?page=${page}&size=${size}`);
    }

    addPermission(data): Observable<{}> {
        return this.http.post<{}>(`${url.permissionUrl}/create`, data, this.httpOptions);
    }
}
