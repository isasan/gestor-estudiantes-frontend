import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteService, Estudiante } from '../../services/estudiante.service';

@Component({
  selector: 'app-lista-estudiantes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css']
})
export class ListaEstudiantesComponent implements OnInit {

  estudiantes: Estudiante[] = [];
  errorMensaje: string | null = null;

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.estudianteService.listar().subscribe({
      next: (data) => {
        this.estudiantes = data;
        this.errorMensaje = null;
      },
      error: (err) => {
        this.errorMensaje = "⚠ No se pudo cargar la lista. Verifica que el backend esté ejecutándose.";
        console.error("Error al cargar estudiantes:", err);
      }
    });
  }
}
