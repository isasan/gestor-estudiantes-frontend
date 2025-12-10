import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarEstudianteComponent } from './editar-estudiante.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('EditarEstudianteComponent', () => {
  let component: EditarEstudianteComponent;
  let fixture: ComponentFixture<EditarEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarEstudianteComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '1' } } }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
