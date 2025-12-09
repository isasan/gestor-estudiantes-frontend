import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Estudiante {
  id?: number;
  nombre: string;
  email: string;
  edad: number;
  telefono: string;
}

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private apiUrl = 'http://localhost:8080/estudiantes';

  constructor(private http: HttpClient) {}

  // GET all
  listar(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.apiUrl);
  }

  // GET by id
  obtener(id: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.apiUrl}/${id}`);
  }

  // POST create
  crear(est: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.apiUrl, est);
  }

  // DELETE
  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // PUT update
  actualizar(id: number, est: Estudiante): Observable<Estudiante> {
    return this.http.put<Estudiante>(`${this.apiUrl}/${id}`, est);
  }
}
