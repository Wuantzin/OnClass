import express from "express";
import * as alunoController from "../Controllers/alunoController.js";

const alunoRoutes = express.Router();

alunoRoutes.post("/", alunoController.criar);
alunoRoutes.get("/", alunoController.listar);
alunoRoutes.patch("/:matricula", alunoController.editar);

export default alunoRoutes;
