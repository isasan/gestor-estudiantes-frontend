import { Routes } from '@angular/router';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';
import { DetalleEstudianteComponent } from './components/detalle-estudiante/detalle-estudiante.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'estudiantes', pathMatch: 'full' },
  { path: 'estudiantes', component: ListaEstudiantesComponent, canActivate: [authGuard] },
  { path: 'estudiantes/:id', component: DetalleEstudianteComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent }
];
