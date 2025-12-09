import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';
import { DetalleEstudianteComponent } from './components/detalle-estudiante/detalle-estudiante.component';
import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', component: ListaEstudiantesComponent, canActivate: [authGuard] },
  { path: 'detalle/:id', component: DetalleEstudianteComponent, canActivate: [authGuard] },

  // NUEVA RUTA
  { path: 'crear', component: CrearEstudianteComponent, canActivate: [authGuard] },

  { path: '**', redirectTo: '' }
];
