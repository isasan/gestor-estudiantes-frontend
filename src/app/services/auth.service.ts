import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private estaLogueado = false; // inicialmente el usuario no está logueado
  private token: string | null = null; // aquí guardaremos un JWT ficticio

  constructor() {}

  // Simular login: genera un "token" y marca como logueado
  loginSimulado() {
    this.token = 'jwt-simulado'; // más adelante será un JWT real
    this.estaLogueado = true;
  }

  // Cerrar sesión
  logout() {
    this.token = null;
    this.estaLogueado = false;
  }

  // Comprobar si el usuario está autenticado
  estaAutenticado(): boolean {
    return this.estaLogueado;
  }

  // Obtener token (simulado)
  obtenerToken(): string | null {
    return this.token;
  }
}
