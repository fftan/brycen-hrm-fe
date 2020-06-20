import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Components
import { url } from '../../common/helpers/defineUrl';

@Injectable({ providedIn: 'root' })
export class DashboardService {
    constructor(private http: HttpClient) { }

    getData(): Observable<[]> {
        return this.http.get<[]>(`${url.dashboard}`);
    }

    getDepartment(): Observable<[]> {
        return this.http.get<[]>(`${url.mainUrl}/departments/list`);
    }
}
