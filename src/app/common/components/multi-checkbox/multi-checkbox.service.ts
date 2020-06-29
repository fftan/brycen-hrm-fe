import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

import { url } from '../../helpers/defineUrl';

@Injectable({ providedIn: 'root' })
export class MultiCheckBoxService {

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    constructor(private http: HttpClient) { }

    getSkills(urlSkill): Observable<[]> {
        return this.http.get<[]>(`${urlSkill}/list`);
    }

    createSkill(dataRequest, url): Observable<{}> {
    console.log("MultiCheckBoxService -> constructor -> data", dataRequest)
        return this.http.post<{}>(`${url}/create`, dataRequest, this.httpOptions);
    }
}