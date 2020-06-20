import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Components
import { url } from '../common/helpers/defineUrl';

@Injectable({ providedIn: 'root' })
export class LevelService {
    private levelUrl = 'http://192.168.4.203:8080/level';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(
        private http: HttpClient
    ) { }

    getLevels(page: number, size: number): Observable<[]> {
        return this.http.get<[]>(`${url.levelUrl}?page=${page}&size=${size}`);
    }

    addLevel(data): Observable<{}> {
        return this.http.post<{}>(`${url.levelUrl}s/create`, data, this.httpOptions);
    }
}
