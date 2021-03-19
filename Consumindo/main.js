window.alert('foi')

function fazGet(url) {

    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function fazPost(usuarios) {

    linha = document.createElement("tr")
    tdId = document.createElement("td")
    tdNome = document.createElement("td")
    tdId.innerHTML = usuarios.id
    tdNome.innerHTML = usuarios.nome

    linha.appendChild(tdId)
    linha.appendChild(tdNome)

    return linha;

}

function main() {
   
    data = (fazGet("http://127.0.0.1:5000/usuarios"))
    usuarios = JSON.parse(data)
    console.log(usuarios)
    let tabela = get.getElementById("tabela")

    usuarios.forEach(element => {
        
        let linha = fazPost(element)
        tabela.appendChild(linha);
    });
}

main()