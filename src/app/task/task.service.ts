import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Components
import { Task } from './task';
import { url } from '../common/helpers/defineUrl';

@Injectable({ providedIn: 'root' })
export class TaskService {

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getTasks(page: number, size: number): Observable<Task[]> {
        return this.http.get<Task[]>(`${url.taskUrl}?page=${page}&size=${size}`);
    }

    addTask(data: Task): Observable<Task> {
        return this.http.post<Task>(`${url.taskUrl}/create`, data, this.httpOptions);
    }

    updateTask(data: Task): Observable<Task> {
        return this.http.put<Task>(url.taskUrl, data, this.httpOptions);
    }

    // Relationship
    getType(): Observable<[]> {
        return this.http.get<[]>(`${url.mainUrl}/project-types/list`);
    }
}
