//criar container resumo
//function addImovel({id, tipo, venda, titulo, bairro, quartos, banheiros, vagas, area}){}



//create map
const map = L.map("mapid").setView([-30.135923,-51.22448], 14)

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)



//create icon layer
const icon = L.icon({
    iconUrl: "images/favicon.png",
    iconSize:[40,40],
    iconAnchor:[29, 40],
    popupAnchor:[-5,-30]
})

function addMarker({ id, tipo, quartos, lat, lng }){     

    const popup = L.popup({
        closeButton:false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`<a target="__blank" href="/imovel?id=${id}" class= "ver-imovel">${tipo} - ${quartos} quartos</a>`)
    
    L
    .marker([lat, lng],{ icon })
    .addTo(map)
    .bindPopup(popup)
}

const imoveisSpan = document.querySelectorAll('.imoveis span')

imoveisSpan.forEach( span => {
    
    const imovel = {
        id: span.dataset.id,
        tipo: span.dataset.tipo,
        quartos: span.dataset.quartos,
        banheiros: span.dataset.banheiros,
        vagas: span.dataset.vagas,

        areaUtil: span.dataset.areaUtil,
        areaTotal: span.dataset.areaTotal,

        cep: span.dataset.cep,
        logradouro: span.dataset.logradouro,
        bairro: span.dataset.bairro,

        lat:span.dataset.lat, 
        lng: span.dataset.lng,
        
        venda: span.dataset.venda,
        condominio: span.dataset.condominio,
        iptu: span.dataset.iptu,
        
        codigo: span.dataset.codigo,
        titulo: span.dataset.titulo,
        descricao: span.dataset.descricao,

        fotos: span.dataset.fotos  
    }

    addMarker(imovel)
})





