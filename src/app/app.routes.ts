import { Routes } from '@angular/router';

// IMPORTA LOS COMPONENTES (muy importante)
import { LoginComponent } from './components/login/login.component';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';
import { DetalleEstudianteComponent } from './components/detalle-estudiante/detalle-estudiante.component';
import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component';

// IMPORTA LOS GUARDS
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', component: ListaEstudiantesComponent, canActivate: [authGuard] },

  { path: 'detalle/:id', component: DetalleEstudianteComponent, canActivate: [authGuard] },

  {
    path: 'crear',
    component: CrearEstudianteComponent,
    canActivate: [roleGuard],
    data: { roles: ['ADMIN'] }
  }
];
