console.log(`trabalhando com Condicionais`);
    const salvador = `Salvador`;
    const saoPaulo = `São Paulo`;
    const rioDeJaneiro = `Rio de Janeiro`;

    const listaDeDestinos = new Array(
        `Salvador`,
        `São Paulo`,
        `Rio de Janeiro`
    );

    const idadeComprador = 31;
    const estaAcompanhada = true;
    const temPassagemComprada = true;
    console.log("Destinos Possíveis:");
    console.log(listaDeDestinos);

    if 
    (idadeComprador >= 18 || estaAcompanhada == true) {
        console.log("Comprador maior de idade");
        listaDeDestinos.splice(1, 1); //removendo item   
    } else {
        //A pessoa é menor de idade 
        if (estaAcompanhada) {
            console.log("Comprador está acompanhado");
            listaDeDestinos.splice(1, 1); //removendo item   

        } else {
            console.log("Não é maior de Idade e não posso Vender");
        }
    }

    console.log("Embarque: \n\n");
    if(idadeComprador >= 18 && temPassagemComprada){
        console.log("Boa Viagem");
    }else{
        console.log("Você não pode embarcar");
    }

    console.log(listaDeDestinos);