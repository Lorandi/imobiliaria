const Database = require('sqlite-async');

function execute(db){    
    return db.exec(`
        CREATE TABLE IF NOT EXISTS imoveis(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            
            tipo TEXT,
            quartos TEXT,
            banheiros TEXT,
            vagas TEXT,

            areaUtil TEXT,
            areaTotal TEXT,

            cep TEXT,
            logradouro TEXT,
            bairro TEXT,

            lat TEXT,
            lng TEXT,
            
            venda TEXT,
            condominio TEXT,
            iptu TEXT,
            
            codigo TEXT,
            titulo TEXT,
            descricao TEXT,

            fotos TEXT  
        );  
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute) //resultado db
