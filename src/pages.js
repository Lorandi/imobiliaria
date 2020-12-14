const Database = require('./database/db');
const salvarImovel = require('./database/salvarImovel');

module.exports = {
  async index(req, res) {
    try {
      const db = await Database;
      const imoveis = await db.all("SELECT * FROM imoveis")
      //console.log(imoveis)
      return res.render('index', { imoveis: imoveis })
    } catch (error) {
      //const imoveis = require('./database/fakedata.js');
      //return res.render('index', { imoveis })
      console.log(error)
      return res.send("Erro no banco de dados!")
    }
  },

  async imovel(req, res) {
    const id = req.query.id
    try {
      const db = await Database;
      const resultado = await db.all(`SELECT * FROM imoveis WHERE id = "${id}"`)
      const imovel = resultado[0]

      imovel.fotos = imovel.fotos.split(",")

      console.log(imovel)
      return res.render('imovel', { imovel })
    } catch (error) {
      console.log(error)
      return res.send("Erro no banco de dados na hora de buscar!")
    }
  },

  cadastrarImovel(req, res) {
    return res.render("cadastrar-imovel");
  },

  async salvarImovel(req, res) {
    const fields = req.body
    //validar se todos os campos estão preenchidos

    if (Object.values(fields).includes('')) {
      return res.send('Todos os campos devem ser preenchidos!')
    }

    

    try {
      //salvar imovel
      const db = await Database
      await salvarImovel(db, {
        tipo: fields.tipo,
        quartos: fields.quartos,
        banheiros: fields.banheiros,
        vagas: fields.vagas,

        areaUtil: fields.areaUtil,
        areaTotal: fields.areaTotal,

        cep: fields.cep,
        logradouro: fields.logradouro,
        bairro: fields.bairro,

        lat: fields.lat,
        lng: fields.lng,

        venda: fields.venda,
        condominio: fields.condominio,
        iptu: fields.iptu,

        codigo: fields.codigo,
        titulo: fields.titulo,
        descricao: fields.descricao,

        fotos: fields.fotos.toString(),

      })

      //redirecionamento
      return res.redirect('/')

    } catch (error) {
      console.log(error)
      return res.send("Erro no banco de dados na hora de salvar!")

    }
  }
}

