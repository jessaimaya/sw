import { Injectable } from '@angular/core';
import { PersonajeService } from '../services/personaje.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, filter, concatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import * as types from './action.types';
import * as personajeActions from './personajes.actions';

@Injectable({ providedIn: 'root' })

export class PersonajeEffects {
    constructor(private personajeService: PersonajeService, private actions$:Actions) {}

    @Effect() loadPersonajes$: Observable<Action> = this.actions$.pipe(
        ofType<personajeActions.loadPersonajesAction>(types.LOAD_PERSONAJES),
        mergeMap(() => this.personajeService.getPersonajes().pipe(
            map(personajes => (new personajeActions.loadPersonajesSuccessAction(personajes, false)))
        ))
    )

    @Effect() loadPersonaje$: Observable<Action> = this.actions$.pipe(
        ofType<personajeActions.loadPersonajeAction>(types.LOAD_PERSONAJE),
        mergeMap(() => this.personajeService.getPersonaje().pipe(
            map(personajes => (new personajeActions.loadPersonajeSuccessAction(personajes, false)))
        ))
    )
}