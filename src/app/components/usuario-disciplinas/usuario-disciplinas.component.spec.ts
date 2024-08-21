import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDisciplinasComponent } from './usuario-disciplinas.component';

describe('UsuarioDisciplinasComponent', () => {
  let component: UsuarioDisciplinasComponent;
  let fixture: ComponentFixture<UsuarioDisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioDisciplinasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
