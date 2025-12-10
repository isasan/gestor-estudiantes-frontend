import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EstudianteService, Estudiante } from '../../services/estudiante.service';

@Component({
  selector: 'app-formulario-estudiante',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-estudiante.component.html',
  styleUrls: ['./formulario-estudiante.component.css']
})
export class FormularioEstudianteComponent {

  estudiante: Estudiante = { nombre: '', email: '', edad: 0 , telefono: ''};

  constructor(private estudianteService: EstudianteService) {}

  crear(): void {
    this.estudianteService.crear(this.estudiante).subscribe({
      next: () => {
        alert("Estudiante creado!");
        this.estudiante = { nombre: '', email: '', edad: 0 , telefono: ''};
      },
      error: () => {
        alert("No se pudo crear el estudiante. Revisa si el backend está activo.");
      }
    });
  }
}
