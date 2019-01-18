import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajeReducer } from './store/personajes.reducer';
import { PersonajeEffects } from './store/personajes.effects';
import { environment } from 'src/environments/environment';
import { PersonajesListComponent } from './personajes-list/personajes-list.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LoaderComponent } from './loader/loader.component';
import { PersonajeComponentComponent } from './personaje-component/personaje-component.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PersonajesListComponent,
    LoaderComponent,
    PersonajeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule,
    StoreModule.forRoot({ applicationState: PersonajeReducer }),
    EffectsModule.forRoot([PersonajeEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
