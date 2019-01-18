import { Personajes } from './personajes.model';

export interface AppState {
    readonly personajes: Personajes;
    readonly loading: boolean;
}