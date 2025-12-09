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

  estudiante: Estudiante = {
    nombre: '',
    email: '',
    edad: 0,
    telefono: '' // ← NUEVO CAMPO
  };

  mensajeError = '';
  mensajeOk = '';

  constructor(
    private estudianteService: EstudianteService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Solo ADMIN puede crear
    if (!this.auth.tieneRol('ADMIN')) {
      this.router.navigate(['/']);
    }
  }

  crear() {
    if (!this.estudiante.nombre || !this.estudiante.email || !this.estudiante.telefono) {
      this.mensajeError = 'Todos los campos son obligatorios';
      return;
    }

    this.estudianteService.crear(this.estudiante).subscribe({
      next: () => {
        this.mensajeOk = 'Estudiante creado correctamente';
        setTimeout(() => this.router.navigate(['/']), 1500);
      },
      error: (err) => {
        console.error(err);
        this.mensajeError = 'Error creando estudiante';
      }
    });
  }
  volver() {
    this.router.navigate(['/']);
  }
}
