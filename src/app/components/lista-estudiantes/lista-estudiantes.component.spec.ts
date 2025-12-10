import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaEstudiantesComponent } from './lista-estudiantes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListaEstudiantesComponent', () => {
  let component: ListaEstudiantesComponent;
  let fixture: ComponentFixture<ListaEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEstudiantesComponent, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
