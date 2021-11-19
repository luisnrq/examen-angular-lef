import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { MenuComponent } from './components/menu/menu.component';

import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ServicePeliculas } from './services/peliculas.service';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { DetallepeliculaComponent } from './components/detallepelicula/detallepelicula.component';
import { BuscarpeliculaComponent } from './components/buscarpelicula/buscarpelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    MenuComponent,
    PeliculasComponent,
    DetallepeliculaComponent,
    BuscarpeliculaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders, ServicePeliculas],
  bootstrap: [AppComponent]
})
export class AppModule { }
