import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDadosComponent } from './usuario-dados.component';

describe('UsuarioDadosComponent', () => {
  let component: UsuarioDadosComponent;
  let fixture: ComponentFixture<UsuarioDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioDadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
