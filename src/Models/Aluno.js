import { DataTypes } from "sequelize";
import { sequelize } from "../Config/configDB.js";

const Aluno = sequelize.define("Aluno", {
    matricula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senhaHASH: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uuid: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }

});

export default Aluno;