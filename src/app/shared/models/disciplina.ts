import { Usuario } from "./usuario";
import { Tarefa } from "./tarefa";

export class Disciplina {
  public id: number;
  public nome: string;
  public usuario: Usuario;
  public tarefas: Tarefa[] = [];

  constructor(id: number, nome: string, usuario: Usuario) {
    this.id = id;
    this.nome = nome;
    this.usuario = usuario;
  }

}
