import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { catchError, tap, mergeMap, concatMap, map, pluck, takeUntil } from 'rxjs/operators';
import {forkJoin} from 'rxjs';

import { Personajes } from '../models/personajes.model';
import { PersonajeAdapter, Personaje } from '../models/personaje.model';

@Injectable({ providedIn: 'root' })
export class PersonajeService {
    private baseUrl = 'https://swapi.co/api';
    constructor(private http: HttpClient, private adapter: PersonajeAdapter) {}

    getPersonajes(): Observable<Personajes>  {
        let personajesRes = new Personajes();
        let urlsReq = Array<number>(5).fill(0).map((_, i) => this.http.get(`${this.baseUrl}/people/?page=${i+1}`)
            .pipe(
                mergeMap((personajes: Personajes) => {
                    const personajes$ = personajes.results.map((personaje: any) =>
                        this.http.get(personaje.homeworld).pipe(
                            map((hw: any) => {
                                personaje.homeworld = hw.name;
                                return this.adapter.adapt(personaje);
                            })
                        )
                    );
                    return forkJoin(...personajes$);
                })
            ));
        return forkJoin([...urlsReq]).pipe(map(([p1,p2,p3,p4,p5]) => {
            personajesRes.results.push(...p1, ...p2, ...p3, ...p4, ...p5);
            return personajesRes;
        }));
    }

    getPersonaje(): Observable<Personajes>  {
        console.log(`https://swapi.co/api/people/?search=${window.location.pathname.split('/')[2]}`);
        return this.http.get<Personajes>(`https://swapi.co/api/people/?search=${window.location.pathname.split('/')[2]}`).pipe(
            map(personajes => {
                console.log('Personaje: ', personajes);
                return personajes;
            })
        );
    }
}