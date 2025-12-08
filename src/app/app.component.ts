import { Component } from '@angular/core';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaEstudiantesComponent],
  template: `<app-lista-estudiantes></app-lista-estudiantes>`
})
export class AppComponent {}
