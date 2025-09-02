import * as service from "../Services/alunoService.js";

export const criar = async (req, res) => {
  try {
    const aluno = await service.criarAluno(req.body);
    res.status(201).json(aluno); // CREATED
  } catch (error) {
    res.status(400).json(error.message );
  }
};

export const listar = async (req, res) => {
  try {
    const alunos = await service.listarAlunos();
    res.status(200).json(alunos); // OK
  } catch (error) {
    res.status(400).json(error.message);
  }
};
