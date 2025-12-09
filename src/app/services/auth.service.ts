import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export interface TokenPayload {
  sub: string;
  rol: string;  // ← tu token usa "rol"
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<string> {
    return this.http.post(`${this.API_URL}/login`, { username, password }, { responseType: 'text' });
  }

  guardarToken(token: string) {
    localStorage.setItem('token', token);
  }

  obtenerToken(): string | null {
    return localStorage.getItem('token');
  }

  borrarToken() {
    localStorage.removeItem('token');
  }

  estaAutenticado(): boolean {
    return !!this.obtenerToken();
  }

  obtenerRoles(): string[] {
    const token = this.obtenerToken();
    if (!token) return [];

    try {
      const payload = jwtDecode<TokenPayload>(token);

      // Tu token solo tiene "rol": "ADMIN"
      return payload.rol ? [payload.rol] : [];

    } catch (error) {
      console.error("Error al decodificar token:", error);
      return [];
    }
  }

  tieneRol(rol: string): boolean {
    return this.obtenerRoles().includes(rol);
  }

  obtenerRolUsuario(): string | null {
    const roles = this.obtenerRoles();
    return roles.length > 0 ? roles[0] : null;
  }
}
