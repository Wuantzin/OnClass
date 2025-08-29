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

export const getAlunos = async () => {
  try {
    const alunos = await Aluno.findAll();
    return alunos;
  } catch (error) {
    throw error;
  }
};
