import resultadoBusca from './busca.js'

    window.onload = function(){


let dadosCep = async function(cep){
    let url = `https://viacep.com.br/ws/${cep}/json/`
    let dadosFetch = await fetch(url)
    let dadosJson = await dadosFetch.json()
    resultadoBusca(dadosJson)
    
}
//dadosCep('87075555')

const btn = document.querySelector("#buscar")
const numCep = document.querySelector("#cep")

btn.addEventListener('click', function(){
    dadosCep(numCep.value)
})

}

