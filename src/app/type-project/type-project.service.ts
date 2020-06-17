import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TypeService {

    url = 'http://192.168.4.203:8080/project-type';

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient){}

    getTypes(page:number, size:number): Observable<[]> {
        return this.http.get<[]>(`${this.url}?page=${page}&size=${size}`);
    }

    addType(data): Observable<{}> {
        return this.http.post<{}>(`${this.url}s/create`, data, this.httpOptions)
    }
}