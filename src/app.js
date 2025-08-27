import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from "./Config/configDB.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();


//middlewares
app.use(cors());
app.use(express.json());


//rotas
app.use("./api", routes);


// Conexão com o banco de dados
sequelize.authenticate()
  .then(() => console.log("Conectado ao MySQL"))
  .catch((err) => console.error("Erro ao conectar ao MySQL:", err));


// Startando Servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));