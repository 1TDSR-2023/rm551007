//var nome = "Ruan"
//et nome2 = "Boris"

//REGRA 1 : INICIALIZAR NA DECLARAÇÂO;
//REGRA 2 : NÂO ALTERAR O SEU VALOR DURANTE O FLUO DE PROGRAMA;

//const PI = 3.14;

//var nome1 = "petroni"

//if (nome1 != ""){
//   let nome1 = "Geovana";

//}

//console.log(nome1)

let botao = document.getElementById("meu-btn");

botao.addEventListener("click",function(){ 
   // console.log(this.TextContent)
   //Função matematica Math
   //Random = Retorna um numero aleatorio entre  0 e 1 
   //floor = Ela arredonda um numero pra baixo.
   //ceil = Ela arredonda um numero pra cima.
   //round = ele arredonda um numero aleatoriamente.S
    let r=0,g=0,b=0;
    r = Math.round(Math.random()*255)
    g = Math.round(Math.random()*255)
    b = Math.round(Math.random()*255)

    //this.setAttribute("style","background-color:rgb("+r+","+g+","+b+");");
    this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);

});

//ESTUDAR
//querySelector
//querySelectorAll
//Array
//Estruturas de repetição

   