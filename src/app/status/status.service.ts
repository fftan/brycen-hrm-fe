import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Components
import { Status } from './status';
import { url } from '../common/helpers/defineUrl';

@Injectable({ providedIn: 'root' })
export class StatusService {

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) { }

    getStatus(page: number, size: number): Observable<Status[]> {
        return this.http.get<Status[]>(`${url.statusUrl}?page=${page}&size=${size}`);
    }

    addStatus(data): Observable<{}> {
        return this.http.post<{}>(`${url.statusUrl}/create`, data, this.httpOptions);
    }
}
