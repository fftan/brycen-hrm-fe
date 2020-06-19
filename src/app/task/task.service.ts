import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Task } from './task';

@Injectable({providedIn: 'root'})
export class TaskService {

    url = 'http://192.168.4.203:8080/tasks';
    mainUrl = 'http://192.168.4.203:8080';

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient){}

    getTasks(page:number, size:number): Observable<Task[]> {
    console.log("TaskService -> constructor -> page", page)
        return this.http.get<Task[]>(`${this.url}?page=${page}&size=${size}`);
    }

    addTask(data: Task): Observable<Task> {
        return this.http.post<Task>(`${this.url}/create`, data, this.httpOptions)
    }

    updateTask(data: Task): Observable<Task> {
        return this.http.put<Task>(this.url, data, this.httpOptions);
    }

    // Relationship
    getType(): Observable<[]> {
        console.log("TaskService -> constructor -> mainUrl", this.mainUrl)
        return this.http.get<[]>(`${this.mainUrl}/project-types/list`);
    }
}