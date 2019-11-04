import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [ // Declaracion de los componentes que podemos usar en este modulo
    AppComponent,
    PersonsComponent,
    PersonInputComponent
  ],
  imports: [//Para importar otros modulos
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Se agrega el componente root tan solo
})
export class AppModule { }
