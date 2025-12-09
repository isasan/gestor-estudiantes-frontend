import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.loginSimulado(); // simulamos login
    this.router.navigate(['/estudiantes']); // redirige al listado
  }
}
