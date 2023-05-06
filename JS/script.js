// //var nome = "Ruan"
// //et nome2 = "Boris"

// //REGRA 1 : INICIALIZAR NA DECLARAÇÂO;
// //REGRA 2 : NÂO ALTERAR O SEU VALOR DURANTE O FLUO DE PROGRAMA;

// //const PI = 3.14;

// //var nome1 = "petroni"

// //if (nome1 != ""){
// //   let nome1 = "Geovana";

// //}

// //console.log(nome1)

// let botao = document.getElementById("meu-btn");

// botao.addEventListener("click",function(){ 
//    // console.log(this.TextContent)
//    //Função matematica Math
//    //Random = Retorna um numero aleatorio entre  0 e 1 
//    //floor = Ela arredonda um numero pra baixo.
//    //ceil = Ela arredonda um numero pra cima.
//    //round = ele arredonda um numero aleatoriamente.S
//     let r=0,g=0,b=0;
//     r = Math.round(Math.random()*255)
//     g = Math.round(Math.random()*255)
//     b = Math.round(Math.random()*255)


//     //this.setAttribute("style","background-color:rgb("+r+","+g+","+b+");");
//     this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);

// });

// //ESTUDAR
// //querySelector
// //querySelectorAll
// //Array
// //Estruturas de repetição

// //Declarar um Array

// let Array = [1,2,3,4,5,6,7,8,9,10];
// let frutas = ["banana","maçã","pêssego","laranja","limão","melancia","kiwi"];
// console.log(frutas);
// console.table(frutas);
// console.log(frutas[0]);
// console.log(frutas[6]);

// //Inserir um item ao final do array com o método push(nomdeDoItem);
// frutas.push("manga");
// console.log(frutas);

// //Remover um item ao final do array com o método pop();
// frutas.pop();
// console.log(frutas);

// //Remover um item no início do array com o método shift();
// frutas.shift();
// console.log(frutas);

// //Localizar um item no array utilizando o método indexOf(nomeDoItem);
// //Obs:Este método retornar o indice do item encontrado;
// let indice = frutas.indexOf("laranja");
// console.log(`O Ìndice encontrado foi : ${indice}`);
// console.log(`O item buscando foi : ${frutas[indice]}`);

// //Realizando uma remoção de item utilizando o método splice().
// //O método splice() recebe dois parâmetros, ìndice do item que será removido. Ex: splice(índice, 1);
// //Dica:utilize o método indexOf() para buscar o indice di utem no array.
// let indice = frutas.indexOf("melancia");
// console.log(`O item encontrado no indice antes da remoção foi : ${ frutas[indice]}`);
// frutas.splice(indice,1);
// console.log(frutas);
// console.log(`O item encontrado no indice depois da remoção foi : ${frutas[indice]}`);
  