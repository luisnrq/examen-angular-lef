import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';


const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "peliculas/genero/:idgenero", component: PeliculasComponent },
    { path: "peliculas/nacionalidad/:idnacionalidad", component: PeliculasComponent },
    { path: "**", component: Error404Component }
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);