import { Routes } from '@angular/router';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';
import { DetalleEstudianteComponent } from './components/detalle-estudiante/detalle-estudiante.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'estudiantes', pathMatch: 'full' },
  { path: 'estudiantes', component: ListaEstudiantesComponent },
  { path: 'estudiantes/:id', component: DetalleEstudianteComponent },
  { path: 'login', component: LoginComponent },
];
