import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

// Components
import { Status } from './status';

@Injectable({ providedIn: 'root' })
export class StatusService {
    url = 'http://192.168.4.203:8080/status';
    
    constructor(private http: HttpClient) { }

    getStatus(page: number, size: number): Observable<Status[]> {
        return this.http.get<Status[]>(`${this.url}?page=${page}&size=${size}`);
    }
}