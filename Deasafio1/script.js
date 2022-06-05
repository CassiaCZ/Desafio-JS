window.onload = function(){
    
const produtos = document.querySelectorAll("#produtos")
const frutaCesta = document.querySelectorAll("#cestaDoCliente")

produtos.forEach(function(lista){
lista.addEventListener('click', function(item){
        alert(item.target.dataset.preco)
     let listinha = document.createElement('li')
        lista.appendChild(listinha).setAttribute('class', 'frutas')})   
})

function calcular(){
    let valores = Number(dataset.preco)
    let total=0

    for( let p in valores ) {
    console.log( valores[p] )
    total+=valores[p]   
    }

}


}

// function calcular(Produtos, soma){
       
//     const preco = document.querySelectorAll(`#${Produtos} > li`)
//     const total = document.querySelector(`#${soma}`)
//     let totalzinho=0
//         for(let p of preco){
//           totalzinho = Number(p.dataset.preco)
//           console.log(p.dataset.preco)
//         }
//         total.value = totalzinho
        
        
//      }
//      calcular('produtos', 'mostraTotalCompra' )