let n;
let p;
let operacion;

function init(){
    //Declaraciones
    let resultado = document.getElementById("resultado");
    let suma = document.getElementById("suma");
    let  resta = document.getElementById("resta");
    let  division = document.getElementById("division");
    let  multiplicacion = document.getElementById("multiplicacion");
    let  igual = document.getElementById("igual");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres  = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");
    let reset = document.getElementById("reset");

    //Onclicks baby
    uno.onclick = function(i){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(i){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(i){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(i){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(i){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(i){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(i){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(i){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(i){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(i){
        resultado.textContent = resultado.textContent + "0";
    }

    reset.onclick = function(i){
        limpiar();
    }
    
    suma.onclick = function(i){
        n = resultado.textContent;
        operacion = "+";
        limpia();
    }
    resta.onclick = function(i){
        n = resultado.textContent;
        operacion = "-";
        limpia();
    }
    multiplicacion.onclick = function(i){
        n = resultado.textContent;
        operacion = "*";
        limpia();
    }
    division.onclick = function(i){
        n = resultado.textContent;
        operacion = "/";
        limpia();
    }
    igual.onclick = function(i){
        p = resultado.textContent;
        resolver();
    }
}

function limpia(){
    resultado.textContent= "";
}

function limpiar(){
    resultado.textContent= "";
    n = 0;
    p = 0;
    operacion = "";
}

function resolver(){
    let e = 0;
    switch(operacion){
        case "+":
            e = parseFloat(n) + parseFloat(p);
            break; 

        case "-":
            e = parseFloat(n) - parseFloat(p);
            break;

         case "*":
            e = parseFloat(n) * parseFloat(p);
            break;

         case "/":
            e = parseFloat(n) / parseFloat(p);
            break;    
    }
    limpiar();
    resultado.textContent = e;
}