import { Disciplina } from "./disciplina";

export class Tarefa {
  public id: number;
  public disciplina: Disciplina;
  public nome: string;
  public descricao: string;

  constructor(id:number, nome: string, disciplina: Disciplina, descricao: string) {
    this.id = id;
    this.disciplina = disciplina;
    this.nome = nome;
    this.descricao = descricao;
  }



}
