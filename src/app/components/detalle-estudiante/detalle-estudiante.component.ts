import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Estudiante, EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-detalle-estudiante',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Detalle del Estudiante</h2>

    <div *ngIf="estudiante">
      <p><b>Nombre:</b> {{ estudiante.nombre }}</p>
      <p><b>Edad:</b> {{ estudiante.edad }}</p>
      <p><b>Email:</b> {{ estudiante.email }}</p>
    </div>

    <p *ngIf="errorMensaje">{{ errorMensaje }}</p>
  `
})
export class DetalleEstudianteComponent implements OnInit {

  estudiante?: Estudiante;
  errorMensaje = '';

  constructor(
    private route: ActivatedRoute,
    private estudianteService: EstudianteService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.estudianteService.obtener(id).subscribe({
      next: (e) => this.estudiante = e,
      error: () => this.errorMensaje = 'No se pudo cargar el estudiante.'
    });
  }
}
