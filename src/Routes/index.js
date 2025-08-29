import { Router } from "express";
import alunoRoutes from "./alunoRoutes.js";

const router = Router();

router.get("/teste", (req, res) => {
  res.json({ message: "tudo ok" });
});

router.use("/alunos", alunoRoutes);

export default router;
