import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';
  private tokenKey = 'token';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(this.apiUrl + '/login', {
      username,
      password
    }, { responseType: 'text' }); // token como texto
  }

  guardarToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  obtenerToken() {
    return localStorage.getItem(this.tokenKey);
  }

  estaAutenticado() {
    return this.obtenerToken() != null;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
