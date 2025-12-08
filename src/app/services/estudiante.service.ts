import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Estudiante {
  id?: number;
  nombre: string;
  email: string;
  edad: number;
}

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private baseUrl = 'http://localhost:8080/estudiantes';

  constructor(private http: HttpClient) {}

  listar(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.baseUrl);
  }

  crear(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.baseUrl, estudiante);
  }
}
