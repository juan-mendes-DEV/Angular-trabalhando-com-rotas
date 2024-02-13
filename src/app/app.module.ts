import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {IndexModule} from './pages/index/index.module'; //importando modulos criado
import {PortifolioModule} from './pages/portifolio/portifolio.module';
import { MenuNavComponent } from './shared/menu-nav/menu-nav.component'; //importando modulos criado

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule, //importando modulos criado
    PortifolioModule //importando modulos criado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
