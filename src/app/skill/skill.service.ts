import { tap, catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

// Components
import { Skill } from './skill';
import { MessageService } from './../department/message.service';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SkillService {
    private skillUrl = 'http://localhost:8080/skills';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    getSkill(): Observable<Skill[]> {
        return this.http.get<Skill[]>(this.skillUrl).pipe(
            tap(_ => this.log('fetched skill')),
            catchError(this.handleError<Skill[]>('getSkills', []))
        );
    }

    addSkill(skill: Skill): Observable<Skill> {
        return this.http.post<Skill>(`${this.skillUrl}/create`, skill, this.httpOptions);
    }

    updateSkill(skill: Skill): Observable<Skill> {
        return this.http.put<Skill>(`${this.skillUrl}/${skill.id}`, skill, this.httpOptions);
    }

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
        this.messageService.add(`HeroService: ${message}`);
    }
}
