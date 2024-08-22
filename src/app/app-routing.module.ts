import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './components/autenticacao/tela-inicial/tela-inicial.component';
import { TelaUsuarioComponent } from './components/usuario/tela-usuario/tela-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: TelaInicialComponent
  },
  {
    path: 'tela-usuario',
    component: TelaUsuarioComponent
  },
  {
    path: 'tela-usuario:/id',
    component: TelaUsuarioComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
