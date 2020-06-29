import { tap, catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Components
import { Skill } from './skill';
import { MessageService } from './../department/message.service';
import { Observable, of } from 'rxjs';
import { url } from '../common/helpers/defineUrl';

@Injectable({ providedIn: 'root' })
export class SkillService {

    skillUrl = '';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    testSkill(page, size): Observable<Skill[]> {
        return this.http.get<Skill[]>(`${this.skillUrl}?page=${page}&size=${size}`);
    }

    getSkill(page, size): Observable<Skill[]> {
        return this.http.get<Skill[]>(`${url.skillUrl}?page=${page}&size=${size}`);
    }

    addSkill(skill: Skill): Observable<Skill> {
        return this.http.post<Skill>(`${url.skillUrl}/create`, skill, this.httpOptions);
    }

    updateSkill(skill: Skill): Observable<Skill> {
    console.log("SkillService -> skill", skill)
        return this.http.put<Skill>(`${url.skillUrl}/${skill.id}`, skill, this.httpOptions);
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
