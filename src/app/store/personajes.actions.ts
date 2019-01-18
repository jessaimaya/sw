import { Action } from '@ngrx/store';
import * as types from './action.types';
import { Personajes } from '../models/personajes.model';

export class loadPersonajesAction implements Action {
    readonly type = types.LOAD_PERSONAJES;
}

export class loadPersonajesSuccessAction implements Action {
    readonly type = types.LOAD_PERSONAJES_SUCCESS;
    constructor(public payload: Personajes, public loading: boolean) {}
}

export class loadPersonajeAction implements Action {
    readonly type = types.LOAD_PERSONAJE;
}

export class loadPersonajeSuccessAction implements Action {
    readonly type = types.LOAD_PERSONAJE_SUCCESS;
    constructor(public payload: Personajes, public loading: boolean) {}
}


export type Actions = loadPersonajesAction | loadPersonajesSuccessAction | loadPersonajeAction | loadPersonajeSuccessAction;