import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Components
import { url } from '../common/helpers/defineUrl';

@Injectable({ providedIn: 'root' })
export class TypeService {

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getTypes(page: number, size: number): Observable<[]> {
        return this.http.get<[]>(`${url.typeUrl}?page=${page}&size=${size}`);
    }

    addType(data): Observable<{}> {
        return this.http.post<{}>(`${url.typeUrl}/create`, data, this.httpOptions);
    }
}
