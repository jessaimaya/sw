import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';

export class Personaje {
    public nombre: string;
    public altura: number;
    public peso: number;
    public color_cabello: string;
    public color_piel: string;
    public color_ojos: string;
    public fecha_nacimiento: string;
    public genero: string;
    public mundo: string;
    public peliculas: Array<string>;
    public especies: Array<string>;
    public vehículos: Array<string>;
    public naves: Array<string>;
    public creado: string;
    public editado: string;
    public url: string;

    constructor(personaje: any = null) {
        this.nombre = personaje ? personaje.name : 'Unknown';
        this.altura = personaje ? +personaje.height : 0;
        this.peso = personaje ? +personaje.mass : 0;
        this.color_cabello = personaje ? personaje.hair_color : 'transparent';
        this.color_piel = personaje ? personaje.skin_color : 'transparent';
        this.color_ojos = personaje ? personaje.eye_color : 'transparent';
        this.fecha_nacimiento = personaje ? personaje.birth_year : '1/1/0000';
        this.genero =  personaje ? personaje.gender : 'aphrodite';
        this.mundo = personaje ? personaje.homeworld : 'Unknown';
        this.peliculas = personaje ? personaje.films : [];
        this.especies = personaje ? personaje.species : [];
        this.naves = personaje ? personaje.starships : [];
        this.creado = personaje ? personaje.created : 'Sat Jan 01 2000 00:00:00 GMT-0600 (Central Standard Time)';
        this.editado = personaje ? personaje.edited : 'Sat Jan 01 2000 00:00:00 GMT-0600 (Central Standard Time)';
        this.url = personaje ? personaje.url : '';
    }
}
@Injectable({
    providedIn: 'root'
})

export class PersonajeAdapter implements Adapter<Personaje> {
    adapt(item: any): Personaje {
        return new Personaje(
            ... item
        );
    }
}