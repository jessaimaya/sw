import { Personaje } from './personaje.model';

export class Personajes {
    public contador?: number;
    public next?: string;
    public previous?: string;
    public results: Array<Personaje>;
    constructor(personajes: any = null) {
        this.contador = personajes ? personajes.count : 0;
        this.next = personajes ? personajes.next : '';
        this.previous = personajes ? personajes.previous : '';
        this.results = personajes ? personajes.results : [];
    }
}