import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ConductorComponent } from './components/conductor/conductor.component';
import { LoginComponent } from './components/login/login.component';
import { PasajeroComponent } from './components/pasajero/pasajero.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VerificarUsuarioComponent } from './verificar-usuario/verificar-usuario.component';
import { ViajesRealizadosComponent } from './viajes-realizados/viajes-realizados.component';
import { VerificarAdminComponent } from './verificar-admin/verificar-admin.component';
import { ReportesHistoricosComponent } from './reportes-historicos/reportes-historicos.component';
import { ViajesChoferComponent } from './viajes-chofer/viajes-chofer.component';
import { RegistrarVehiculoComponent } from './registrar-vehiculo/registrar-vehiculo.component';
import { VerificarChoferComponent } from './verificar-chofer/verificar-chofer.component';

const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegistroComponent},
  {path: 'Admin', component: AdministradorComponent},
  {path: 'Driver', component: ConductorComponent},
  {path: 'Passenger', component: PasajeroComponent},
  {path: 'Navbar',component: NavbarComponent},
  {path: 'Vusuario',component: VerificarUsuarioComponent}, 
  {path: 'viajes',component: ViajesRealizadosComponent}, 
  {path: 'Vadmin',component: VerificarAdminComponent}, 
  {path: 'Reportes',component: ReportesHistoricosComponent}, 
  {path: 'viajesChofer',component: ViajesChoferComponent}, 
  {path: 'registrarVehiculo',component: RegistrarVehiculoComponent}, 
  {path: 'verificarChofer',component: VerificarChoferComponent}, 





  {path: '', redirectTo: '/Login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
