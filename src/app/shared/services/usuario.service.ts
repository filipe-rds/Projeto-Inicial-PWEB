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
import { DoStatement } from 'typescript';

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
    return this.listarUsuarios().pipe(
      switchMap(usuarios => {
        const usuarioExistente = usuarios.find(element => element.email === usuario.email && element.id !== usuario.id);
        if (usuarioExistente) {
          return throwError(() => new Error("Já existe um usuário com este e-mail."));
        }
        else {
          this.localStorageService.atualizarUsuario(usuario);
          return this.httpClient.patch<Usuario>(`${this.url_usuarios}/${usuario.id}`, usuario);

        }
      }),
      catchError(err => {
        this.sweet.erro(err);
        return throwError(() => err); // Repassa o erro para o chamador do método
      })
    );
  }

  criarUsuario(usuario: Usuario): Observable<Usuario> { //ok
    return this.listarUsuarios().pipe(
      switchMap(UsuariosRetornados => {

        if (UsuariosRetornados.length === 0) {
          usuario.id = 1;
          this.localStorageService.armazenarUsuario(usuario);
          return this.httpClient.post<Usuario>(this.url_usuarios, usuario);
        }

        const usuarioExistente = UsuariosRetornados.find(element => element.email === usuario.email);

        let tamanho: number = UsuariosRetornados.length;
        let id: number = Number(UsuariosRetornados[tamanho - 1].id) + 1;

        usuario.id = id;

        if (usuarioExistente) {
          return throwError(() => new Error("Já existe um usuário com este e-mail."));
        } else {
          this.localStorageService.armazenarUsuario(usuario);
          return this.httpClient.post<Usuario>(this.url_usuarios, usuario);
        }
      }),
      catchError(err => {
        // Tratamento de erro
        this.sweet.erro('Erro ao cadastrar usuário: Já existe um usuário com este e-mail.' + err.message);
        return throwError(() => err);
      })
    );
  }

  validarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.listarUsuarios().pipe(
      switchMap(usuariosRetornados => {
        const usuarioExistente = usuariosRetornados.find(
          element => element.email === usuario.email && element.senha === usuario.senha
        );
        if (usuarioExistente) {
          // Armazena o usuário no localStorage
          this.localStorageService.armazenarUsuario(usuarioExistente);
          // Retorna o Observable do usuário encontrado
          return this.buscarUsuario(usuarioExistente.id);
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

  criarDisciplina(disciplina: Disciplina): Observable<Usuario> {

    return this.listarUsuarios().pipe(
      switchMap(usuarios => {
        const usuarioExistente = usuarios.find(element => element.email === this.usuario.email);


        if (usuarioExistente) {

          let tamanho: number = usuarioExistente.disciplinas.length;
          let id: number;

          if (tamanho > 0) {
            id = Number(usuarioExistente.disciplinas[tamanho - 1].id) + 1;
          } else {
            id = 1;
          }

          disciplina.id = id;

          usuarioExistente.disciplinas.push(disciplina);
          this.localStorageService.atualizarUsuario(usuarioExistente);
          return this.httpClient.patch<Usuario>(`${this.url_usuarios}/${usuarioExistente.id}`, usuarioExistente);
        } else {
          return throwError(() => new Error("Usuário não encontrado"));
        }
      }),
      catchError(err => {
        this.sweet.erro(err);
        return throwError(() => err);
      })
    );
  }

    listarDisciplinas(): Disciplina[]{

      let usuario:Usuario | null = this.localStorageService.lerUsuario();

      if(usuario == null){
        throw new Error("Usuário não encontrado");
      }
      
      if(usuario && usuario.disciplinas.length >0 ){
        return usuario.disciplinas;
      }
      else{
        throw new Error("Usuário não possui nenhuma disicplina cadastrada");
      }

    }

    removerDisciplina(idDisciplina:number):boolean{

      let usuario:Usuario | null = this.localStorageService.lerUsuario();

      if(usuario == null){
        throw new Error("Usuário não encontrado");
      }

      if(usuario && usuario.disciplinas.length >0 ){

        let indexdisciplina = usuario.disciplinas.findIndex(element => element.id == idDisciplina);

        if(indexdisciplina !== -1){
          usuario.disciplinas.splice(indexdisciplina,1);
          console.log(usuario);
          this.localStorageService.atualizarUsuario(usuario);
          this.httpClient.put<Usuario>(`${this.url_usuarios}/${usuario.id}`, usuario).subscribe({
            next: (response) => {
              console.log('Usuário atualizado com sucesso:', response);
              return true;
            },
            error: (err) => {
              this.sweet.erro('Erro ao atualizar o usuário: ' + err);
            }
          });
          return true;
        }
        else{
          throw new Error("Disciplina não encontrada");
        }
      }
      else
      {
        throw new Error("Usuário não possui nenhuma disicplina cadastrada");
      }


    }

    alterarDisciplina(disciplina:Disciplina):boolean{

      if(disciplina.nome.length <= 0){
        throw new Error("Nome da disciplina não pode ser vazio");
      }
      if(disciplina.descricao.length <= 0){
        throw new Error("Descrição da disciplina não pode ser vazia");
      }

      let usuario:Usuario | null = this.localStorageService.lerUsuario();

      if(usuario == null){
        throw new Error("Usuário não encontrado");
      }

      if(usuario && usuario.disciplinas.length >0 ){

        //let disciplinaEncontrada = usuario.disciplinas.find(element => element.id == disciplina.id);
        const indiceDisciplina = usuario.disciplinas.findIndex(element => element.id == disciplina.id);
        // if(disciplinaEncontrada){
        //   console.log(disciplina);
        //   disciplinaEncontrada = disciplina;
        //   console.log(disciplinaEncontrada);
        //   this.localStorageService.atualizarUsuario(usuario);
        //   this.httpClient.patch<Usuario>(`${this.url_usuarios}/${usuario.id}`, usuario);
        //   return true;
        // }
        if (indiceDisciplina !== -1) {
          usuario.disciplinas[indiceDisciplina] = disciplina;
          this.localStorageService.atualizarUsuario(usuario);
          this.httpClient.patch<Usuario>(`${this.url_usuarios}/${usuario.id}`, usuario)
            .subscribe({
              next: (response) => {
                console.log('Usuário atualizado com sucesso:', response);
              },
              error: (err) => {
                this.sweet.erro('Erro ao atualizar o usuário: ' + err);
              }
            });
    
          return true;
        }
        else{
          throw new Error("Disciplina não encontrada");
        }
      }
      else
      {
        throw new Error("Usuário não possui nenhuma disicplina cadastrada");
      }

    }
    


      



  // Métodos crud de tarefa


}

