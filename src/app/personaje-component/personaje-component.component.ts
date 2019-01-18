import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Personajes } from '../models/personajes.model';
import { AppState } from '../models/app.state';
import * as PersonajeActions from '../store/personajes.actions';


@Component({
  selector: 'app-personaje-component',
  templateUrl: './personaje-component.component.html',
  styleUrls: ['./personaje-component.component.css']
})
export class PersonajeComponentComponent implements OnInit {
  personajes$: Observable<any>;
  loading$: Observable<any>;
  loading: boolean;
  personajes: Personajes;
  constructor(private store: Store<AppState>) {
    this.personajes$ = this.store.select('applicationState');
    this.loading$ = this.store.select('applicationState');
  }

  ngOnInit() {
    this.getPersonaje();
    this.personajes$.subscribe((state: AppState) => {
      this.personajes = state.personajes;
    });
    this.loading$.subscribe((state: AppState) => this.loading = state.loading);
  }

  getPersonaje() {
    this.store.dispatch(new PersonajeActions.loadPersonajeAction());
  }

}
