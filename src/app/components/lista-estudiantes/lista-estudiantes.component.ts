import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstudianteService, Estudiante } from '../../services/estudiante.service';

@Component({
  selector: 'app-lista-estudiantes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css']
})
export class ListaEstudiantesComponent implements OnInit {

  estudiantes: Estudiante[] = [];
  nuevo: Estudiante = { nombre: '', email: '', edad: 18 };
  errorMensaje: string | null = null;
  loading: boolean = false;

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.cargarEstudiantes();
  }

  cargarEstudiantes(): void {
    this.loading = true;
    this.errorMensaje = null;
    this.estudianteService.listar().subscribe({
      next: (data) => { this.estudiantes = data; this.loading = false; },
      error: (err) => {
        console.error('Error al listar:', err);
        this.errorMensaje = 'Error cargando estudiantes. Comprueba backend y CORS.';
        this.loading = false;
      }
    });
  }

  crearEstudiante(): void {
    this.errorMensaje = null;
    this.estudianteService.crear(this.nuevo).subscribe({
      next: () => {
        this.nuevo = { nombre: '', email: '', edad: 18 };
        this.cargarEstudiantes();
      },
      error: (err) => {
        console.error('Error crear:', err);
        this.errorMensaje = err?.error || 'Error al crear estudiante';
      }
    });
  }

  eliminar(id?: number): void {
    if (!id) return;
    this.estudianteService.eliminar(id).subscribe({
      next: () => this.cargarEstudiantes(),
      error: (err) => {
        console.error('Error eliminar:', err);
        this.errorMensaje = 'Error al eliminar estudiante';
      }
    });
  }

  editar(est: Estudiante): void {
    // abrir formulario de edición simple (puede ser modal o reutilizar el formulario)
    // implementación sencilla: cargar datos en "nuevo" y luego llamar a actualizar cuando se envíe
    this.nuevo = { ...est };
  }

  actualizarEstudiante(): void {
    if (!this.nuevo.id) { this.errorMensaje = 'ID no definido para actualizar'; return; }
    this.estudianteService.actualizar(this.nuevo.id, this.nuevo).subscribe({
      next: () => { this.cargarEstudiantes(); this.nuevo = { nombre: '', email: '', edad: 18 }; },
      error: (err) => { this.errorMensaje = err?.error || 'Error al actualizar' }
    });
  }
}
