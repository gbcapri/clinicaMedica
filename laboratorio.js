let consultasProgramadas = [];
let consulta = {
    nomePaciente: "",
    dia: "",
    medico: "",
};
let opcao = 'menu';

console.log("Bem vindo ao laboratório");

console.log(
    "O que você deseja fazer?"+
    "\n1- Fazer uma nova consulta"+
    "\n2- listar as consultas existentes"+
    "\n3- Atualizar uma consulta existente"+
    "\n4- Cancelar uma consulta"+
    "\n5- sair");

process.stdin.on("data", function(data){
    data = data.toString().trim();

    if(opcao === 'menu'){
        switch(+data){
            case 1:
                opcao = 'adicionar';
                console.log("Digite o nome do paciente")//esta faltan
                break;
            case 2:
                if(consultasProgramadas.length == 0){
                    console.log("Não existem consultas programadas");
                }else{
                    for (let i = 0; i < consultasProgramadas.length; i++) {
                        console.log(
                            "Paciente: " + (i + 1) + ":\n"+
                            "Nome " + consultasProgramadas[i].nomePaciente + "\n" +
                            "Dia da consulta: " + consultasProgramadas[i].dia + "\n" +
                            "Medico responsável: " + consultasProgramadas[i].medico + "\n"
                        );
                    }
                }
                return;
            case 3:
                opcao = 'atualizar';
                console.log("Digite o nome do paciente que terá a consulta alterada");
                break;
            case 4:
                opcao = 'remover';
                console.log("Digite o nome do paciente que terá a consulta excluida");
                break;
            case 5:
                process.exit();
                break;
            default:
                console.log("caractere inválido")
        }
        return;consulta
    }
//--------------------------------------------------------------------------------------------------------
    if(opcao == 'adicionar'){
        if(data.length > 1){
            consulta.nomePaciente = data;
            console.log("digite o dia da consulta");
            opcao = 'dia';
        } else {
            console.log("insira um nome válido");
        }

        return;
    }

    if (opcao === 'dia'){
        let dia = data;
        if(dia.length = 10){
            consulta.dia = dia;
            console.log("digite o nome do médico responsável");
            opcao = 'medico';
        }else{
            console.log("insira o dia da forma: 00/00/0000");
        }
        return;
    }

    if (opcao === 'medico'){
        let medico = data;
        if(data.length > 1){
            consulta.medico = medico;
            consultasProgramadas.push({ ...consulta});
            opcao = 'menu';
        }else{
            console.log("insira o nome do médico com mais de uma letra");
        }
        return;
    }alternar
//--------------------------------------------------------------------------------------------------------
if (opcao === 'atualizar') {
    let encontrado = false;
    for (let i = 0; i < consultasProgramadas.length; i++) {
        if (consultasProgramadas[i].nomePaciente.toLowerCase() === data.toLowerCase()) {
            encontrado = true;
            console.log("Consulta encontrada:");
            console.log("Nome: " + consultasProgramadas[i].nomePaciente);
            console.log("Deseja alterar o nome do paciente? (s/n)");
            opcao = 'atualizarNome';
            indiceConsultaAtual = i;
            break;
        }
    }
    if (!encontrado) {
        console.log("Paciente não encontrado.");
        opcao = 'menu';
    }
    return;
}

if (opcao === 'atualizarNome') {
    if (data.toLowerCase() === 's') {
        console.log("Digite o novo nome do paciente");
        opcao = 'novoNome';
    } else {
        console.log("Deseja alterar o dia da consulta? (s/n)");
        opcao = 'atualizarDia';
    }
    return;
}

if (opcao === 'novoNome') {
    consultasProgramadas[indiceConsultaAtual].nomePaciente = data;
    console.log("Deseja alterar o dia da consulta? (s/n)");
    opcao = 'atualizarDia';
    return;
}

if (opcao === 'atualizarDia') {
    if (data.toLowerCase() === 's') {
        console.log("Digite o novo dia da consulta (no formato 00/00/0000)");
        opcao = 'novoDia';
    } else {
        console.log("Deseja alterar o médico responsável? (s/n)");
        opcao = 'atualizarMedico';
    }
    return;
}

if (opcao === 'novoDia') {
    if (data.length == 10) {
        consultasProgramadas[indiceConsultaAtual].dia = data;
        console.log("Deseja alterar o médico responsável? (s/n)");
        opcao = 'atualizarMedico';
    } else {
        console.log("Insira o dia no formato: 00/00/0000");
    }
    return;
}

if (opcao === 'atualizarMedico') {
    if (data.toLowerCase() === 's') {
        console.log("Digite o novo nome do médico responsável");
        opcao = 'novoMedico';
    } else {
        console.log("Consulta atualizada com sucesso.");
        opcao = 'menu';
    }
    return;
}

if (opcao === 'novoMedico') {
    consultasProgramadas[indiceConsultaAtual].medico = data;
    console.log("Consulta atualizada com sucesso.");
    opcao = 'menu';
    return;
}

//--------------------------------------------------------------------------------------------------------

    if(opcao == 'remover'){
        let pacienteRemovido = false;
        for (let i = 0; i < consultasProgramadas.length; i++) {
            if(consultasProgramadas[i].nomePaciente.toLowerCase() === data.toLowerCase()){
                consultasProgramadas.splice(i, 1);// o 1 é a quantidade e o primeiro é a posição
                pacienteRemovido = true;
                console.log("paciente removido com sucesso.");
                break;
            }
        }
    }
    if (!pacienteRemovido) {
        console.log("paciente não encontrado.");
    }
    opcao = 'menu';
    return;
});