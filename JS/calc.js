function insereNumeroNoVisor(botao,visor){
    visor.value += botao.value;
}

const calculoDoVIsor = (visor)=>{
visor.value = eval(visor.value);
}
function fn1() {
    console.log(this);
}