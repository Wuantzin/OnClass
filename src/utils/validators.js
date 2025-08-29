import Aluno from "../Models/Aluno.js";

export async function emailValido(email) {
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      throw new Error("E-mail inválido");
    }
    return true;
}

export async function obrigatorios(data) {
    const camposObrigatorios = ["matricula", "nome", "email", "senhaHASH", "DeviceId"];
    for (const campo of camposObrigatorios) {
        if (!data[campo]) {
            throw new Error(`O campo ${campo} é obrigatório`);
        }
    }
    return true;
}

export async function existe(data) {
    const camposUnicos = ["matricula", "email"];
    for (const campo of camposUnicos) {
        const existe = await Aluno.findOne({ where: { [campo]: data[campo] } });
        if (existe) {
            throw new Error(`${campo} já está cadastrado!`);
        }
    }
    return true;
}
