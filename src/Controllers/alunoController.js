import * as service from "../Services/alunoService.js";

export const criar = async (req, res) => {
  try {
    const aluno = await service.criarAluno(req.body);
    res.status(201).json(aluno); // CREATED
  } catch (error) {
    res.status(400).json(error.message );
  }
};