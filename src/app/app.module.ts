import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from 'app/app.routing';
import { AppComponent } from './app.component';

import { FrutaComponent } from 'app/fruta/fruta.component';
import { EmpleadoComponent } from 'app/empleado/empleado.component';
import { ContactoComponent } from 'app/contacto/contacto.component';
import { HomeComponent } from 'app/home/home.component';
import { ConversorPipe } from 'app/pipes/conversor.pipe';
import { CochesComponent } from 'app/coches/coches.component';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
