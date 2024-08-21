import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UsuarioDadosComponent } from './components/usuario-dados/usuario-dados.component';
import { UsuarioDisciplinasComponent } from './components/usuario-disciplinas/usuario-disciplinas.component';
import { UsuarioProgressoComponent } from './components/usuario-progresso/usuario-progresso.component';
import { UsuarioTarefasComponent } from './components/usuario-tarefas/usuario-tarefas.component';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { TelaInicialUsuarioComponent } from './components/tela-inicial-usuario/tela-inicial-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioDadosComponent,
    UsuarioDisciplinasComponent,
    UsuarioProgressoComponent,
    UsuarioTarefasComponent,
    TelaInicialComponent,
    TelaInicialUsuarioComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
