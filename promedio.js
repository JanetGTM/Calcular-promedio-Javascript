// const numeros = [100, 200, 300, 500];
const numeros = [];
let sumaLista = 0;

for(let i = 0; i < numeros.length; i++){
    sumaLista += numeros[i];
    // console.log(sumaLista);
}

// console.log("La suma es: "+ sumaLista);
const promedio = sumaLista / numeros.length;
// console.log("El promedio es: " + promedio);

const cajaItem = document.querySelector("#cajaItem");
// const itemValue = cajaItem.value;
const botonCalcular = document.querySelector("#botonCalcularPromedio");
const mensaje = document.querySelector("#msg");

function guardar(event){
        if(event.keyCode == 13){
            console.log("Presionaste la tecla enter");
            if((cajaItem.value > 0 &&  cajaItem.value < 1000) && cajaItem.value != ""){ 
                if(numeros.length < 10){
                    numeros.push(parseFloat(cajaItem.value));
                    console.log(cajaItem.value);
                    console.log(numeros);
                    cajaItem.value = "";
                    mensaje.innerText = ""; 
                    }
            else{
                mensaje.innerText = "Máximo 10 números, calcula el promedio"; 
            }   
        }
        else{
            console.log("Sólo puedes introducir números del 1 al 999");
            mensaje.innerText = "Sólo puedes introducir números del 1 al 999";    
        }

    }
}


function calcularPromedio(){
    // if(cajaItem.value != "")
    // {
        const suma = numeros.reduce((acumulado, item)=> acumulado + item)
        console.log("Suma: " + suma);
        const promedio = suma/numeros.length;
        console.log("Promedio: " + promedio);
        cajaItem.value = "";
        numeros.length = 0;
        mensaje.innerText = ""; 
    // }
    // else{
    //     console.log("Introduce los dígitos a proemdiar");
    //     mensaje.innerText = "Introduce los dígitos a proemdiar"; 
    // }
}

cajaItem.addEventListener("keydown", guardar);
botonCalcular.addEventListener("click", calcularPromedio);