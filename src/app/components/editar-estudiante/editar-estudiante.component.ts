import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteService, Estudiante } from '../../services/estudiante.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-editar-estudiante',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-estudiante.component.html',
})
export class EditarEstudianteComponent implements OnInit {

  estudiante: Estudiante = {
    nombre: '',
    email: '',
    edad: 0,
    telefono: ''
  };

  mensajeError = '';
  mensajeOk = '';
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private estudianteService: EstudianteService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    if (!this.auth.tieneRol('ADMIN')) {
      this.router.navigate(['/']);
      return;
    }

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarEstudiante();
  }

  cargarEstudiante() {
    this.estudianteService.obtener(this.id).subscribe({
      next: (data) => {
        // Spread operator para mantener binding
        this.estudiante = { ...data };
      },
      error: () => this.mensajeError = 'Error cargando los datos del estudiante'
    });
  }

  guardarCambios(): void {
    this.mensajeError = '';
    this.mensajeOk = '';

    if (!this.estudiante.nombre || !this.estudiante.email || !this.estudiante.telefono || !this.estudiante.edad) {
      this.mensajeError = 'Todos los campos son obligatorios';
      return;
    }

    this.estudianteService.actualizar(this.id, this.estudiante).subscribe({
      next: () => {
        this.mensajeOk = 'Estudiante actualizado correctamente';
        setTimeout(() => this.router.navigate(['/']), 1500);
      },
      error: () => this.mensajeError = 'No se pudo actualizar el estudiante'
    });
  }

  volver() {
    this.router.navigate(['/']);
  }
}
