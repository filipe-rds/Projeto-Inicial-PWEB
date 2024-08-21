import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { TelaInicialUsuarioComponent } from './components/tela-inicial-usuario/tela-inicial-usuario.component';
import { UsuarioDadosComponent } from './components/usuario-dados/usuario-dados.component';
import { UsuarioDisciplinasComponent } from './components/usuario-disciplinas/usuario-disciplinas.component';
import { UsuarioProgressoComponent } from './components/usuario-progresso/usuario-progresso.component';
import { UsuarioTarefasComponent } from './components/usuario-tarefas/usuario-tarefas.component';


const routes: Routes = [
  {
    path: 'tela-inicial',
    component: TelaInicialComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'tela-usuario',
    component: TelaInicialUsuarioComponent
  },
  {
    path: 'tela-usuario:/id',
    component: TelaInicialUsuarioComponent
  },
  {
    path: 'usuario-dados',
    component: UsuarioDadosComponent
  },
  {
    path: 'usuario-dados:/id',
    component: UsuarioDadosComponent
  },
  {
    path: 'usuario-disciplinas',
    component: UsuarioDisciplinasComponent
  },
  {
    path: 'usuario-disciplinas:/id',
    component: UsuarioDisciplinasComponent
  },
  {
    path: 'usuario-progresso',
    component: UsuarioProgressoComponent
  },
  {
    path: 'usuario-progresso:/id',
    component: UsuarioProgressoComponent
  },
  {
    path: 'usuario-tarefas',
    component: UsuarioTarefasComponent
  },
  {
    path: 'usuario-tarefas:/id',
    component: UsuarioTarefasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
