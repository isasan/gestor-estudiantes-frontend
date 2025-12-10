import { TestBed } from '@angular/core/testing';
import { EstudianteService } from './estudiante.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EstudianteService', () => {
  let service: EstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
