import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTarefasComponent } from './usuario-tarefas.component';

describe('UsuarioTarefasComponent', () => {
  let component: UsuarioTarefasComponent;
  let fixture: ComponentFixture<UsuarioTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioTarefasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
