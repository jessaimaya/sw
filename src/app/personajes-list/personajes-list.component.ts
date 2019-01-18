import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AppState } from '../models/app.state';
import { Personajes } from '../models/personajes.model';
import * as PersonajeActions from '../store/personajes.actions';

@Component({
  selector: 'app-personajes-list',
  templateUrl: './personajes-list.component.html',
  styleUrls: ['./personajes-list.component.css']
})
export class PersonajesListComponent implements OnInit {
  personajes$: Observable<any>;
  loading$: Observable<any>;
  loading: boolean;
  personajes: Personajes;
  orden: string;
  url: string;
  constructor(private store: Store<AppState>, private route: ActivatedRoute, private location: Location) {
    this.personajes$ = this.store.select('applicationState');
    this.loading$ = this.store.select('applicationState');
    this.route.url.subscribe(url => {
      this.url = url.toString();
    });
    this.route.queryParams.subscribe(params => {
      this.url === 'residentes' ? this.orden = 'mundo' : this.orden = params['ordenar'];
    }); 
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.url === 'residentes' ? this.orden = 'mundo' : this.orden = params['ordenar'];
    }); 
    this.getPersonajes();
    this.personajes$.subscribe((state: AppState) => {
      this.personajes = state.personajes;
    });
    this.loading$.subscribe((state: AppState) => this.loading = state.loading);
  }

  getPersonajes() {
    this.store.dispatch(new PersonajeActions.loadPersonajesAction());
  }
  customComparator(itemA, itemB) {
    return itemA < itemB ? -1 : (itemA > itemB ) ? 1 : 0;
  }
}