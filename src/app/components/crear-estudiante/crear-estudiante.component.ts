import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudianteService, Estudiante } from '../../services/estudiante.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-crear-estudiante',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-estudiante.component.html',
})
export class CrearEstudianteComponent {

  nuevo: Estudiante = { id: 0, nombre: '', email: '', edad: 18 };
  errorMensaje: string = '';

  constructor(
    private estudianteService: EstudianteService,
    private router: Router,
    public auth: AuthService
  ) {}

  crearEstudiante() {
    if (!this.auth.tieneRol('ADMIN')) {
      this.errorMensaje = 'No tienes permisos para crear estudiantes';
      return;
    }

    this.estudianteService.crear(this.nuevo).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => this.errorMensaje = err?.error || 'Error al crear estudiante'
    });
  }
}
