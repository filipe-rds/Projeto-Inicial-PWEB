import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Disciplina } from '../models/disciplina';
import { Tarefa } from '../models/tarefa';
import { LocalStorageService } from './local-storage.service';
import { MensagemSweetService } from './mensagem-sweet.service';
import { of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  usuario: Usuario;

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService, private sweet: MensagemSweetService) {
    this.usuario = this.localStorageService.lerUsuario() || new Usuario("", "", "");
  }

  private url_usuarios = 'http://localhost:3000/usuarios';

  // Métodos crud de usuário
  listarUsuarios(): Observable<Usuario[]> { //ok
    return this.httpClient.get<Usuario[]>(this.url_usuarios);
  }

  buscarUsuario(id: number): Observable<Usuario> { //ok
    return this.httpClient.get<Usuario>(`${this.url_usuarios}/${id}`);
  }

  deletarUsuario(id: number): Observable<Usuario> {
    return this.httpClient.delete<Usuario>(`${this.url_usuarios}/${id}`);
  }

  alterarUsuario(usuario: Usuario): Observable<Usuario> {
    this.localStorageService.atualizarUsuario(usuario);
    return this.httpClient.put<Usuario>(`${this.url_usuarios}/${usuario.id}`, usuario);
  }

  criarUsuario(usuario: Usuario): Observable<Usuario> { //ok
    return this.listarUsuarios().pipe(
      switchMap(UsuariosRetornados => {
        const usuarioExistente = UsuariosRetornados.find(element => element.email === usuario.email);

        if (usuarioExistente) {
          // Retorna um erro e impede a execução do código seguinte
          return throwError(() => new Error("Já existe um usuário com este e-mail."));
        } else {
          // Se o  usuário não existir, faz a requisição para inseri-lo no banco de dados
          this.localStorageService.armazenarUsuario(usuario);
          return this.httpClient.post<Usuario>(this.url_usuarios, usuario);
        }
      }),
      catchError(err => {
        // Tratamento de erro
        this.sweet.erro('Erro ao cadastrar usuário: ' + err.message);
        return throwError(() => err);
      })
    );
  }

  validarUsuario(usuario: Usuario): Observable<Usuario[]> {
    return this.listarUsuarios().pipe(
      switchMap(UsuariosRetornados => {
        const usuarioExistente = UsuariosRetornados.find(
          element => element.email === usuario.email && element.senha === usuario.senha
        );

        if (usuarioExistente) {
          // Retorna o Observable da requisição HTTP para obter o usuário por ID
          this.localStorageService.armazenarUsuario(usuarioExistente);
          return this.listarUsuarios();
        } else {
          // Retorna um erro se o usuário não for encontrado
          return throwError(() => new Error("Não existe um usuário com esse email e senha"));
        }
      }),
      catchError(err => {
        // Tratamento de erro
        this.sweet.erro('Erro ao realizar login: ' + err.message);
        return throwError(() => err);
      })
    );
  }

  // Métodos crud de disciplina

  // Métodos crud de tarefa


}

