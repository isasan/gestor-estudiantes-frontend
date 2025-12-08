import { Component } from '@angular/core';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';
import { FormularioEstudianteComponent } from './components/formulario-estudiante/formulario-estudiante.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListaEstudiantesComponent,
    FormularioEstudianteComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
