function salvarImovel(db, imovel) {
    
    return db.run(`
    INSERT INTO imoveis (
        tipo,
        quartos,
        banheiros,
        vagas,

        areaUtil,
        areaTotal,

        cep,
        logradouro,
        bairro,

        lat,
        lng,   

        venda,
        condominio,
        iptu, 

        codigo,
        titulo,
        descricao,
        
        fotos
    ) VALUES (
        "${imovel.tipo}", 
        "${imovel.quartos}",
        "${imovel.banheiros}" ,
        "${imovel.vagas}",

        "${imovel.areaUtil}" , 
        "${imovel.areaTotal}",

        "${imovel.cep}",
        "${imovel.logradouro}",
        "${imovel.bairro}" ,

        "${imovel.lat}",
        "${imovel.lng}",

        "${imovel.venda}",
        "${imovel.condominio}",
        "${imovel.iptu}", 

        "${imovel.codigo}",
        "${imovel.titulo}",
        "${imovel.descricao}",

        "${imovel.fotos}"
    );    
`);
}
module.exports = salvarImovel;