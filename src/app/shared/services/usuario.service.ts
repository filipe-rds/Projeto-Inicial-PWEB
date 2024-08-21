import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Disciplina } from '../models/disciplina';
import { Tarefa } from '../models/tarefa';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  usuario: Usuario;

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
    this.usuario = this.localStorageService.lerUsuario() || new Usuario("", "", "");
  }

  private url_usuarios = 'http://localhost:3000/usuarios';

  // Métodos Json-server
  listarUsuarios(): Observable<Usuario[]>{ //ok
    return this.httpClient.get<Usuario[]>(this.url_usuarios);
  }

  getUsuario(id: number): Observable<Usuario>{ //ok
    return this.httpClient.get<Usuario>(`${this.url_usuarios}/${id}`);
  }

  criarUsuario(usuario: Usuario): Observable<Usuario>{ //ok
    return this.httpClient.post<Usuario>(this.url_usuarios, usuario);
  }

  deletarUsuario(id: number): Observable<Usuario>{
    return this.httpClient.delete<Usuario>(`${this.url_usuarios}/${id}`);
  }

  alterarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.put<Usuario>(`${this.url_usuarios}/${usuario.id}`, usuario);
  }

  // Métodos de validação de usuário

  // Métodos crud de disciplina

  // Métodos crud de tarefa


}

