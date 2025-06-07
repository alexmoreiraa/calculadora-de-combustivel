/*


function Calcular() {
    let precoEtanol = parseFloat(document.getElementById("precoEtanol").value);
    let precoGasolina = parseFloat(document.getElementById("precoGasolina").value);



    let resultado = document.getElementById("res");

    let res = precoEtanol/precoGasolina;

    if (res < 0.7) {
        resultado.textContent = "( Economize mais com Etanol !!! )"
    }else {
        resultado.textContent = "(Economize mais com Gasolina !)" 
    }

 };  




function CalcularKm(){
    let distanciaKm = parseFloat(document.getElementById("distanciaKm").value)
    let KmFeitoPorLitro = parseFloat(document.getElementById("KmFeitoPorLitro").value)

    let precoEtanol = parseFloat(document.getElementById("precoEtanol").value);
    let precoGasolina = parseFloat(document.getElementById("precoGasolina").value);
    

    let resCombustivel = document.getElementById("resCombustivel")

    let distanciaFinal = distanciaKm/KmFeitoPorLitro;

    let res = precoEtanol/precoGasolina;

    let valorGastoFinal = 0

    if (res < 0.7) {
        valorGastoFinal = distanciaFinal*precoEtanol
    }else {
        valorGastoFinal = distanciaFinal*precoGasolina
    }



    resCombustivel.innerHTML = `Você precisara de ${distanciaFinal.toFixed(2)} litros para chegar ao destino, e R$${valorGastoFinal.toFixed(2)} será o valor gasto na viagem`

};*/
let calculo = 0 ;
let resultadoFinal = 0;
let precoEtanol = 0;
let precoGasolina =0 ;


function compararCombustiveis(){
    const inputEtanol = parseFloat(document.getElementById("precoEtanol").value);
    const inputGasolina = parseFloat(document.getElementById("precoGasolina").value);

     precoEtanol = inputEtanol
     precoGasolina = inputGasolina

    verificandoValores(precoEtanol,precoGasolina);

    document.getElementById("precoEtanol").value = "" ;
    document.getElementById("precoGasolina").value = "" ;
   
};

function verificandoValores(precoEtanol,precoGasolina) {
    if (isNaN(precoEtanol) || isNaN(precoGasolina)){
        alert("Digite valores validos, tente novamente")
    }else {
        calculoEtanolOuGasolina(precoEtanol,precoGasolina);
    }
};

function calculoEtanolOuGasolina(precoEtanol,precoGasolina){
    const txtRes = document.getElementById("res")

     calculo = precoEtanol/precoGasolina;

    if (calculo <0.7){
        txtRes.textContent = `Etanol vale mais apena`
    }else {
        txtRes.textContent = `Gasolina vale mais apena`
    }
};


function clicouNosegundoBotao() {
    const inputDistanciaKm = document.getElementById("distanciaKm");
    const inputKmFeito = document.getElementById("KmFeitoPorLitro")

    const  distanciaKm = inputDistanciaKm.value;
    const kmFeito = inputKmFeito.value;

    validaValoresDigitados(distanciaKm,kmFeito);

    inputDistanciaKm.value = "";
    inputKmFeito.value = "";
}

function validaValoresDigitados(distanciaKm,kmFeito){
    if(distanciaKm == "" || kmFeito == ""){
        alert("Digite valores validos, tente novamente")
    }else {
        calcularDistanciaKmFeito(distanciaKm,kmFeito)
    }
}

function calcularDistanciaKmFeito(distanciaKm,kmFeito){
    
    resultadoFinal = distanciaKm/kmFeito;
    editandoResNaTela();
}


function editandoResNaTela (){
    const txtResfilnal = document.getElementById("resCombustivel")
    

    if (calculo < 0.7){
        let txTfinal = resultadoFinal*precoEtanol
            txtResfilnal.textContent = `Com Etanol você pagará R$${precoEtanol} por litro e para sua viagem gastará um total de R$${txTfinal.toFixed(2)}`;
    }else{
        txTfinal = resultadoFinal*precoGasolina
         txtResfilnal.textContent = `Com Gasolina você pagará R$${precoGasolina} por litro e para sua viagem gastará um total de R$${txTfinal.toFixed(2)}`;  
    }
    

    //nessa funcção eu preciso multiplicar a variavel resultado com a variavel calculo da funcao calculoEtanolOuGasolina
}


/*
1pegar os valores digitados em etanol e gasolina
2certificar que os valores não estçao vazios
3depois calcular qual compensa

4pegar valores digitados no destino e km feito com 1 litro
5 dividir a distancia pelo km feito
6 multiplicar o resultado pelo valor do combustível

*/