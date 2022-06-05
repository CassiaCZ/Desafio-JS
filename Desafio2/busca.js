export default function resultadoBusca(dadosCep){
    for(let rua in dadosCep){
        if(document.querySelector(`#${rua}`)){
            document.querySelector(`#${rua}`).value= dadosCep[rua]
        }
    }
}

