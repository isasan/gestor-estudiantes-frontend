import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const rolesPermitidos: string[] = route.data['roles'];

  if (!auth.estaAutenticado() || !rolesPermitidos.some(r => auth.tieneRol(r))) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
