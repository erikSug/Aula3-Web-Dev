// Estrutura de repetição
// for(let i=0;i <10;i++){
//     console.log(i)
// }

 //WHILE

//  let f=0;
//  while(f < 10){
//     console.log(f)
//     f++;

//  }

 // While Do

//  let w = 0;

//  do{
//     console.log(w);
//     w++;
//  } while(w<20)

function ola(nome){

    console.log(`Seja bem vindo a ${nome}`)
    //alert(`Seja bem vindo a ${nome}`)
    document.write(`Seja bem vindo a ${nome}`)
}

ola("fiap")

// Arrow function
const hello=()=>(console.log("função arrow function"))

hello()

// Array, objetos e metodos 

let jogadores = [
    {nome: "Hugo",idade:17},
    {nome: "zezinho",idade:18},
    {nome: "luizinho", idade:57}
]

let listarJogadores = jogadores.map(function(item){
    return item.nome
})
console.log(listarJogadores)