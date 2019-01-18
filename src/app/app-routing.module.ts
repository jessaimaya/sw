import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonajesListComponent } from './personajes-list/personajes-list.component';
import { PersonajeComponentComponent } from './personaje-component/personaje-component.component';

const routes: Routes = [
  { path: 'personajes', component: PersonajesListComponent },
  { path: 'personaje/:nombre', component: PersonajeComponentComponent },
  { path: 'residentes', component: PersonajesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true }
   )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
