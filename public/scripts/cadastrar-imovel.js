//adicionar campo de fotos
function addPhotoField() {
    //pegar container de fotos #fotos
    const container = document.querySelector('#fotos')

    //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo está preenchido antes de adicionar novo
    const input = newFieldContainer.children[0]
    if (input.value == "") {
        return
    }

    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    //adicionar clone ao container de imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1) {
        //limpar o valor do campo de
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove();
}

//function validate(event){
    

//     console.log("entrou no validate")
//     const fields = req.body

//     if(Object.values(fields).includes("")){
//         event.preventDefault()
//         alert("Todos os campos deve ser preenchidos")
//    }
// }
