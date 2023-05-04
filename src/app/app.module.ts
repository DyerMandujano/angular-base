import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './contador/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent,

  ],
  //*CUALQUIER MODULO QUE DESEAMOS UTILIZAR, LO DEBEMOS COLOCAR SIEMPRE EN EL APARTADO DE 'imports'
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
