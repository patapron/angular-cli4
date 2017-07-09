import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes

import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from "app/home/home.component";
import { ContactoComponent } from "app/contacto/contacto.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pagina-principal', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'contacto/:page', component: ContactoComponent },
    { path: 'empleado', component: EmpleadoComponent },
    { path: 'fruta', component: FrutaComponent },
    { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);