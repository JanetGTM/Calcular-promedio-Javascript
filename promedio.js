const numeros = [];
const cajaItem = document.querySelector("#cajaItem");
const botonCalcular = document.querySelector("#botonCalcularPromedio");
const mensaje = document.querySelector("#msg");
const resultado = document.querySelector("#resultado");
const numerosDigitados = document.querySelector("#numerosDigitados");

function guardar(event){
        if(event.keyCode == 13){
            console.log("Presionaste la tecla enter");
            if((cajaItem.value > 0 &&  cajaItem.value < 1000) && cajaItem.value != ""){ 
                if(numeros.length < 10){
                    numeros.push(parseFloat(cajaItem.value));
                    numerosDigitados.innerHTML = " " + numeros.join(", ");
                    cajaItem.value = "";
                    mensaje.innerHTML = ""; 
                    }
            else{
                mensaje.innerHTML = " <i class='fa-solid fa-circle-exclamation'></i> Máximo 10 números, ahora puedes calcular el promedio"; 
            }   
        }
        else{
            mensaje.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Sólo puedes introducir números del 1 al 999 ";    
        }
    }
}

function calcularPromedio(){
        const suma = numeros.reduce((acumulado, item)=> acumulado + item);
        const promedio = suma/numeros.length;
        cajaItem.value = "";
        numeros.length = 0;
        mensaje.innerText = ""; 
        resultado.innerHTML = " " + promedio;
}

cajaItem.addEventListener("keydown", guardar);
botonCalcular.addEventListener("click", calcularPromedio);