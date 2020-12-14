const Database = require('./db');
const salvarImovel = require('./salvarImovel');

Database.then(async db => {

    /*await salvarImovel(db,{
        tipo: "casa",
        quartos: "5",
        banheiros: "4",
        vagas: "3",  

        areaUtil:"200",
        areaTotal:"300",


        cep:"91450-171",
        logradouro:"Rua Fernando Cunha, 154",
        bairro:"Ipanema",

        lat:"-30.13436219741112",
        lng:"-51.223853660583496",

        venda:"R$800.00",
        condominio:"R$00",
        iptu:"R$5000,00",

        codigo:"4785",
        titulo: " Casa do Blimbau ",
        descricao: "Sobrado em condominio,2 dorm., banheiro e lavabo. Sótão muito amplo, sevindo de escritório e de living para tv. Sala de jantar. Cozinha montada. Área de serviço fechada com lavanderia e churrasqueira.",

        fotos:["https://images.unsplash.com/photo-1570569695181-40bca161e2b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080" , 

        "https://images.unsplash.com/photo-1605291481517-504965735f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"].toString()

    }) */ 
    //consultar dados da tabela
     const imoveisNoBD = await db.all("SELECT * FROM imoveis")
     console.log(imoveisNoBD)

    // const selecionaCampo = await db.all('SELECT * FROM imoveis WHERE id = "3"') 
    // console.log(selecionaCampo)

    //deletar dado da tabela
    //console.log(await db.run("DELETE FROM imoveis WHERE id = '3' "))
})