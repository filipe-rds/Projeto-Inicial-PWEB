import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialUsuarioComponent } from './tela-inicial-usuario.component';

describe('TelaInicialUsuarioComponent', () => {
  let component: TelaInicialUsuarioComponent;
  let fixture: ComponentFixture<TelaInicialUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaInicialUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaInicialUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
