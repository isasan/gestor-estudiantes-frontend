import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EstudianteService, Estudiante } from '../../services/estudiante.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-lista-estudiantes',
  standalone: true,
  imports: [CommonModule, RouterModule], // Importante: permite *ngIf, *ngFor y [routerLink]
  templateUrl: './lista-estudiantes.component.html',
})
export class ListaEstudiantesComponent implements OnInit {

  estudiantes: Estudiante[] = [];
  errorMensaje: string = '';

  constructor(
    private estudianteService: EstudianteService,
    public auth: AuthService, // Public para poder usarlo en el template
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarEstudiantes();
  }

  cargarEstudiantes() {
    this.estudianteService.listar().subscribe({
      next: (data) => this.estudiantes = data,
      error: () => this.errorMensaje = 'No se puede obtener la lista. ¿Backend encendido?'
    });
  }

  logout() {
    this.auth.borrarToken(); // Borra token del almacenamiento
    this.router.navigate(['/login']); // Redirige a login
  }
}
