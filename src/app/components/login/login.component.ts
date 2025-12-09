import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h2>Login</h2>

    <form (ngSubmit)="login()">
      <label>Usuario</label>
      <input [(ngModel)]="usuario" name="usuario">

      <label>Contraseña</label>
      <input type="password" [(ngModel)]="password" name="password">

      <button type="submit">Entrar</button>
    </form>

    <p *ngIf="error">{{ error }}</p>
  `
})
export class LoginComponent {

  usuario = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    if (this.usuario === 'admin' && this.password === '1234') {
      this.router.navigate(['/']);
    } else {
      this.error = 'Credenciales incorrectas.';
    }
  }
}
