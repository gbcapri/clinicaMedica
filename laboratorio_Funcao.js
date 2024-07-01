let consultasProgramadas = [];
let consulta = {
    nomePaciente: "",
    dia: "",
    medico: "",
};
let opcao = 'menu';
let pacienteSendoAtua = -1;
let pacienteRemovido = false;

function consol(num){
    console.log(
        "O que você deseja fazer?"+
        "\n1- Fazer uma nova consulta"+
        "\n2- listar as consultas existentes"+
        "\n3- Atualizar uma consulta existente"+
        "\n4- Cancelar uma consulta"+
        "\n5- sair");
    return num;
}

function adicionar(entrada){
    if(entrada.length > 1){
        consulta.nomePaciente = entrada;
        console.log("digite o dia da consulta");
    } else {
        console.log("insira um nome válido");
    }


    if (!entrada){
        let dia = entrada;
        if(dia.length = 10){
            consulta.dia = dia;
            console.log("digite o nome do médico responsável");
        }else{
            console.log("insira o dia da forma: 00/00/0000");
        }
    }
    

    if (!entrada){
        let medico = entrada;
        if(entrada.length > 1){
            consulta.medico = medico;
            consultasProgramadas.push({ ...consulta});
            consol(entrada)
        }else{
            console.log("insira o nome do médico com mais de uma letra");
        }
        return;
    }
}

function atualizar(entrada){
    if (!entrada) {
        let encontrado = false;
        for (let i = 0; i < consultasProgramadas.length; i++) {
            if (consultasProgramadas[i].nomePaciente.toLowerCase() === data.toLowerCase()) {
                encontrado = true;
                console.log("Consulta encontrada:");
                console.log(consultasProgramadas[i]);
                console.log("Deseja alterar o nome do paciente? (s/n)");
                pacienteSendoAtua = i;
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
        consultasProgramadas[pacienteSendoAtua].nomePaciente = data;
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
            consultasProgramadas[pacienteSendoAtua].dia = data;
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
            console.log(
                "O que você deseja fazer?"+
                "\n1- Fazer uma nova consulta"+
                "\n2- listar as consultas existentes"+
                "\n3- Atualizar uma consulta existente"+
                "\n4- Cancelar uma consulta"+
                "\n5- sair");
        }
        return;
    }
    
    if (opcao === 'novoMedico') {
        consultasProgramadas[pacienteSendoAtua].medico = data;
        console.log("Consulta atualizada com sucesso.");
        opcao = 'menu';
        console.log(
            "O que você deseja fazer?"+
            "\n1- Fazer uma nova consulta"+
            "\n2- listar as consultas existentes"+
            "\n3- Atualizar uma consulta existente"+
            "\n4- Cancelar uma consulta"+
            "\n5- sair");
        return;
    }
}



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
        consol(data);
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
                console.log(
                    "O que você deseja fazer?"+
                    "\n1- Fazer uma nova consulta"+
                    "\n2- listar as consultas existentes"+
                    "\n3- Atualizar uma consulta existente"+
                    "\n4- Cancelar uma consulta"+
                    "\n5- sair");
                return;
            case 3:
                console.log("Digite o nome do paciente que terá a consulta alterada");
                atualizar(data);
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
        return;
    }

//--------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------

    if(opcao == 'remover'){
        
        for (let i = 0; i < consultasProgramadas.length; i++) {
            if(consultasProgramadas[i].nomePaciente.toLowerCase() === data.toLowerCase()){
                consultasProgramadas.splice(i, 1);// o 1 é a quantidade e o primeiro é a posição
                pacienteRemovido = true;
                console.log("paciente removido com sucesso.");
                console.log(
                    "O que você deseja fazer?"+
                    "\n1- Fazer uma nova consulta"+
                    "\n2- listar as consultas existentes"+
                    "\n3- Atualizar uma consulta existente"+
                    "\n4- Cancelar uma consulta"+
                    "\n5- sair");
                break;
            }
        }
    }
    if (!pacienteRemovido) {
        console.log("paciente não encontrado.");
    }
    opcao = 'menu';
    console.log(
        "O que você deseja fazer?"+
        "\n1- Fazer uma nova consulta"+
        "\n2- listar as consultas existentes"+
        "\n3- Atualizar uma consulta existente"+
        "\n4- Cancelar uma consulta"+
        "\n5- sair");
    return;
});