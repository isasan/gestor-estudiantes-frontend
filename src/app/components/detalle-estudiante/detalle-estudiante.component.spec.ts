import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleEstudianteComponent } from './detalle-estudiante.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('DetalleEstudianteComponent', () => {
  let component: DetalleEstudianteComponent;
  let fixture: ComponentFixture<DetalleEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleEstudianteComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '1' } } }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
