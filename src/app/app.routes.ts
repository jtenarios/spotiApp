import { Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'search', component: SearchComponent},
    { path: 'artist/:id', component: ArtistaComponent},
    // Cualquier path redirije al home
    { path: '', pathMatch: 'full',  redirectTo: 'home'},
    // Cualquier otro path redirije al home
    { path: '**', pathMatch: 'full',  redirectTo: 'home'},
];