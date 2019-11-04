import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // Declaracion de los componentes que podemos usar en este modulo
    AppComponent
  ],
  imports: [//Para importar otros modulos
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
