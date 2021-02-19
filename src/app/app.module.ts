import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { PasajeroComponent } from './components/pasajero/pasajero.component';
import { ConductorComponent } from './components/conductor/conductor.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VerificarUsuarioComponent } from './verificar-usuario/verificar-usuario.component';
import { ViajesRealizadosComponent } from './viajes-realizados/viajes-realizados.component';
import { NavbardosComponent } from './navbardos/navbardos.component';
import { VerificarAdminComponent } from './verificar-admin/verificar-admin.component';
import { ReportesHistoricosComponent } from './reportes-historicos/reportes-historicos.component';
import { NavbartresComponent } from './navbartres/navbartres.component';
import { VerificarChoferComponent } from './verificar-chofer/verificar-chofer.component';
import { RegistrarVehiculoComponent } from './registrar-vehiculo/registrar-vehiculo.component';
import { ViajesChoferComponent } from './viajes-chofer/viajes-chofer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    AdministradorComponent,
    PasajeroComponent,
    ConductorComponent,
    NavbarComponent,
    VerificarUsuarioComponent,
    ViajesRealizadosComponent,
    NavbardosComponent,
    VerificarAdminComponent,
    ReportesHistoricosComponent,
    NavbartresComponent,
    VerificarChoferComponent,
    RegistrarVehiculoComponent,
    ViajesChoferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
