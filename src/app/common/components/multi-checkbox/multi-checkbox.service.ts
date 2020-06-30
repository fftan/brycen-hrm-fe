import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class MultiCheckBoxService {
    constructor(private http: HttpClient) { }

    getData(dataUrl): Observable<[]> {
        return this.http.get<[]>(dataUrl);
    }
}
