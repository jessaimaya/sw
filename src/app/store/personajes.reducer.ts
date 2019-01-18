import * as personajesActions from './personajes.actions';
import * as types from './action.types';
import { AppState } from '../models/app.state';
import { Personajes } from '../models/personajes.model';

export const initialState: AppState = {
    personajes: null,
    loading: true
}
export function PersonajeReducer(state=initialState, action: personajesActions.Actions):AppState {
    switch(action.type) {
        case types.LOAD_PERSONAJES_SUCCESS: {
            return {...state, personajes: <Personajes>action.payload, loading: action.loading };
        }
        case types.LOAD_PERSONAJE_SUCCESS: {
            console.log('PERSONAJE CARGADO!', action.payload, action.loading);
            return {...state, personajes: <Personajes>action.payload, loading: action.loading };
        }
        default:
            return state;
    }
}