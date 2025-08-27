import { Router } from "express";

const router = Router();

router.get("/teste", (req, res) => {
  res.json({ message: "tudo ok" });
});

export default router;
