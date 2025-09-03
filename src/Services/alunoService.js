import Aluno from "../Models/Aluno.js";
import * as Validator from "../utils/validators.js";

export const criarAluno = async (data) => {

    data.email = data.email.toLowerCase();

  await Validator.obrigatorios(data);

  await Validator.emailValido(data.email);

  await Validator.existe(data);


  const aluno = await Aluno.create(data);
  return aluno.nome;
};

export const listarAlunos = async () => {
  const alunos = await Aluno.findAll();
  return alunos;
};

export const editarAluno = async (matricula, data) => {
  if (data.email) {
  await Validator.emailValido(data.email);
  }
  
  const aluno = await Aluno.findByPk(matricula);
  if (!aluno) throw new Error("Aluno não encontrado");

  await aluno.update(data);
  return aluno;
};
