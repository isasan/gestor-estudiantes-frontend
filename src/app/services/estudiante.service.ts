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

  crear(est: Estudiante) {
    return this.http.post<Estudiante>(this.baseUrl, est);
  }

  actualizar(id: number, est: Estudiante) {
    return this.http.put<Estudiante>(`${this.baseUrl}/${id}`, est);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  obtener(id: number) {
    return this.http.get<Estudiante>(`${this.baseUrl}/${id}`);
  }

  buscarPorNombre(nombre: string) {
    return this.http.get<Estudiante[]>(`${this.baseUrl}/buscar/${nombre}`);
  }
}
