import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // NECESARIO PARA *ngIf
import { EstudianteService, Estudiante } from '../../services/estudiante.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-detalle-estudiante',
  standalone: true,
  imports: [CommonModule], // IMPORTAMOS DIRECTIVAS COMO *ngIf
  templateUrl: './detalle-estudiante.component.html',
  styleUrls: ['./detalle-estudiante.component.css']
})
export class DetalleEstudianteComponent implements OnInit {

  estudiante: Estudiante | null = null;
  mensajeError: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private estudianteService: EstudianteService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (isNaN(id)) {
      this.mensajeError = 'ID inválido';
      return;
    }

    this.estudianteService.obtener(id).subscribe({
      next: (data) => this.estudiante = data,
      error: () => this.mensajeError = 'No se pudo cargar el estudiante'
    });
  }

  volver() {
    this.router.navigate(['/']);
  }

  editar() {
    if (this.estudiante) {
      this.router.navigate(['/editar', this.estudiante.id]);
    }
  }
}
