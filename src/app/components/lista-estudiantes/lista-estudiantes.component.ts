import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EstudianteService, Estudiante } from '../../services/estudiante.service';
import { AuthService } from '../../services/auth.service';
import { EMPTY } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-lista-estudiantes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-estudiantes.component.html',
})
export class ListaEstudiantesComponent implements OnInit {

  estudiantes: Estudiante[] = [];
  errorMensaje: string = '';
  isDeletingId?: number;

  constructor(
    private estudianteService: EstudianteService,
    public auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarEstudiantes();
  }

  cargarEstudiantes(): void {
    this.errorMensaje = '';
    this.estudianteService.listar().subscribe({
      next: (data: Estudiante[]) => this.estudiantes = data,
      error: (err) => {
        console.error('Error al listar estudiantes:', err);
        this.errorMensaje = 'No se puede obtener la lista. ¿Backend encendido?';
      }
    });
  }

  logout(): void {
    this.auth.borrarToken();
    this.router.navigate(['/login']);
  }

  eliminarEstudiante(id?: number): void {
    if (!id) return;

    if (!confirm('¿Seguro que quieres eliminar este estudiante?')) return;

    this.errorMensaje = '';
    this.isDeletingId = id;

    this.estudianteService.eliminar(id).pipe(
      catchError(err => {
        console.error('Error en eliminarEstudiante:', err);

        const mensaje =
          err?.error || err?.message || 'Error al eliminar estudiante';

        this.errorMensaje = mensaje;

        return EMPTY;
      }),
      finalize(() => {
        this.isDeletingId = undefined;
      })
    ).subscribe(() => {
      this.cargarEstudiantes();
      alert('Estudiante eliminado correctamente');
    });
  }

}
