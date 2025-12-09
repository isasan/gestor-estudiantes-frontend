import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);  // inyectamos el servicio de autenticación
  const router = inject(Router);     // inyectamos el router para redirección

  if (auth.estaAutenticado()) {
    return true; // Permite acceder a la ruta
  } else {
    router.navigate(['/login']); // Redirige a login si no está autenticado
    return false;
  }
};
