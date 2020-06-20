import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// Components
import { MessageService } from './message.service';
import { Department } from './department';
import { url } from '../common/helpers/defineUrl';

@Injectable({ providedIn: 'root' })
export class DepartmentService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    getDepartments(page, size): Observable<Department[]> {
        return this.http.get<Department[]>(`${url.departmentUrl}?page=${page}&size=${size}`).pipe(
            tap(_ => this.log('fetched department')),
            catchError(this.handleError<Department[]>('getDepartments', []))
        );
    }

    addDepartment(data): Observable<Department[]> {
        return this.http.post<Department[]>(`${url.departmentUrl}/create`, data, this.httpOptions);
    }

    // catch error, show message
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`DepartmentService: ${message}`);
    }
}
