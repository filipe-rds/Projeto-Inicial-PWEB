import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioProgressoComponent } from './usuario-progresso.component';

describe('UsuarioProgressoComponent', () => {
  let component: UsuarioProgressoComponent;
  let fixture: ComponentFixture<UsuarioProgressoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioProgressoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioProgressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
