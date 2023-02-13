/* OBJETOS (cada planta con sus parametros para el calculo) */

class Plantas{
    constructor(nombre,factor1,factor2,factor3){

    this.nombre = nombre
    this.factor1 = factor1
    this.factor2 = factor2
    this.factor3 = factor3

}
}

const Planta1 = new Plantas("Chile", 2.5,3.3,3.7)

const Planta2 = new Plantas("Maiz",1.5,2.3,4.7)

const Planta3 = new Plantas("Tomate", 0.5,1.3,3.7)

//posiblemente se agreguen mas objetos en un futuro

/* Array de los Tipos de Climas */

ArrayClima= [ {Nombre:"Tropical",Valor:0.3}, {Nombre:"Seco",Valor: 0.5}, {Nombre:"Templado", Valor: 0.7}, {Nombre:"Continental", Valor: 0.9},{Nombre:"Polar", Valor:0.09}]




/* Primeros Primeras preguntas */
let nombreUsuario = prompt("Hola, hoy haremos un calculo para saber cuanto quimico necesitarias para tu plantio, por favor escribe tu nombre");
let TipoDePlanta = prompt("Escoge que es lo que piensas plantar: Chile, Maiz o Tomate?, Por favor respeta las mayusculas")

/* Aqui estan las funciones de cada planta y es a donde ingresan despues de las primeras preguntas, toma todos los datos de los objetos y del array */
function CalculoPlanta1(){


    let m2= prompt("Cuanto mide tu terreno en M2, Por favor solo escribe el numero, Recuerda que por el momento, el maximo es de 200m2")
    
    if (TipoDePlanta = Planta1.nombre && m2 <= 50) {
        alert("El calculo nos arroja " + Math.round((Resultado = (m2 * (Planta1.factor1)))) + "ml por cada m2 de " + Planta1.nombre + " sin embargo, falta tomar en cuenta una variable mas, ¡sigamos!");
    } else if (TipoDePlanta = Planta1.nombre && m2 <= 100) {
        alert("El calculo nos arroja " + Math.round((Resultado = (m2 * (Planta1.factor2)))) + "ml por cada m2 de " + Planta1.nombre + " sin embargo, falta tomar en cuenta una variable mas, ¡sigamos!");
    } else if (TipoDePlanta = Planta1.nombre && m2 <= 200) {
        alert("El calculo nos arroja " + Math.round((Resultado = (m2 * (Planta1.factor3)))) + "ml por cada m2 de " + Planta1.nombre + " sin embargo, falta tomar en cuenta una variable mas, ¡sigamos!");
    } else{alert("No es un numero, actuliza la pagina")}
    /* Una vez que se hace el calculo de m2*el factor de la planta, se pasa a la siguiente pregunta que es el clima donde hace otra operacion */
    let SeleccionClima = prompt("Que clima predomina la zona en que tienes tus tierras? Existen 5 opciones : Tropical, Seco, Templado, Continental y Polar, por favor respeta las mayusculas")

  if(SeleccionClima === ArrayClima[0].Nombre){
    console.log(Math.round(Resultado/ArrayClima[0].Valor)+"ml " + "y tus variables fueron " + Planta1.nombre + ", "+ m2+"m2" + " y el clima es "+ArrayClima[0].Nombre)
    alert("El calculo da como resultado de "+ Math.round(Resultado/ArrayClima[0].Valor) +"ml de nuestro producto")
  } else if (SeleccionClima === ArrayClima[1].Nombre){
    console.log(Math.round(Resultado/ArrayClima[1].Valor)+"ml " + "y tus variables fueron " + Planta1.nombre + ", "+ m2+"m2" + " y el clima es "+ArrayClima[1].Nombre)
    alert("El calculo da como resultado de "+Math.round(Resultado/ArrayClima[1].Valor) +"ml de nuestro producto")
  } else if (SeleccionClima === ArrayClima[2].Nombre){
    console.log(Math.round(Resultado/ArrayClima[2].Valor)+"ml " + "y tus variables fueron " + Planta1.nombre + ", "+ m2+"m2" + " y el clima es "+ArrayClima[2].Nombre)
    alert("El calculo da como resultado de "+Math.round(Resultado/ArrayClima[2].Valor)+"ml de nuestro producto")
  } else if (SeleccionClima === ArrayClima[3].Nombre){
    console.log(Math.round(Resultado/ArrayClima[3].Valor)+"ml " + "y tus variables fueron " + Planta1.nombre + ", "+ m2+"m2" + " y el clima es "+ArrayClima[3].Nombre)
    alert("El calculo da como resultado de "+Math.round(Resultado/ArrayClima[3].Valor)+"ml de nuestro producto")
  } else if (SeleccionClima === ArrayClima[4].Nombre){
    console.log(Math.round(Resultado/ArrayClima[4].Valor)+"ml " + "y tus variables fueron " + Planta1.nombre + ", "+ m2+"m2" + " y el clima es "+ArrayClima[4].Nombre)
    alert("El calculo da como resultado de "+Math.round(Resultado/ArrayClima[4].Valor)+"ml de nuestro producto")
    
    
  } else {alert("ERROR DE ESCRITURA, INTENTA NUEVAMENTE")}
      TipoDePlanta = prompt("Puedes hacer cuantos calculos quieras, escoge otra planta: Chile, Maiz o Tomate? o escriba Salir para terminar; Por favor respeta las mayusculas")
    }

function CalculoPlanta2(){


    let m2= prompt("Cuanto mide tu terreno en M2, Por favor solo escribe el numero")
        
    if (TipoDePlanta = Planta2.nombre && m2 <= 50) {
         alert("El calculo nos arroja " + Math.round((Resultado = (m2 * (Planta2.factor1)))) + "ml por cada m2 de " + Planta2.nombre + " sin embargo, falta tomar en cuenta una variable mas, ¡sigamos!");
    } else if (TipoDePlanta = Planta2.nombre && m2 <= 100) {
         alert("El calculo nos arroja " + Math.round((Resultado = (m2 * (Planta2.factor2)))) + "ml por cada m2 de " + Planta2.nombre + " sin embargo, falta tomar en cuenta una variable mas, ¡sigamos!");
    } else if (TipoDePlanta = Planta2.nombre && m2 <= 200) {
         alert("El calculo nos arroja " +Math.round((Resultado = (m2 * (Planta2.factor3)))) + "ml por cada m2 de " + Planta2.nombre + " sin embargo, falta tomar en cuenta una variable mas, ¡sigamos!");
    } else {alert("No es un numero, actuliza la pagina")}
    let SeleccionClima = prompt("Que clima predomina la zona en que tienes tus tierras? Existen 5 opciones : Tropical, Seco, Templado, Continental y Polar, por favor respeta las mayusculas")

  if(SeleccionClima === ArrayClima[0].Nombre){
    console.log(Math.round(Resultado/ArrayClima[0].Valor)+"ml " + "y tus variables fueron " + Planta2.nombre + ", "+ m2+"m2" + " y el clima es "+ArrayClima[0].Nombre)
    alert("El calculo da como resultado de "+Math.round(Resultado/ArrayClima[0].Valor)+"ml de nuestro producto")
  } else if (SeleccionClima === ArrayClima[1].Nombre){
    console.log(Math.round(Resultado/ArrayClima[1].Valor)+"ml " + "y tus variables fueron " + Planta2.nombre + ", "+ m2+"m2" + " y el clima es "+ArrayClima[1].Nombre)
    alert("El calculo da como resultado de "+Math.round(Resultado/ArrayClima[1].Valor)+"ml de nuestro producto")
  } else if (SeleccionClima === ArrayClima[2].Nombre){
    console.log(Math.round(Resultado/ArrayClima[2].Valor)+"ml " + "y tus variables fueron " + Planta2.nombre + ", "+ m2+"m2" + " y el clima es "+ArrayClima[2].Nombre)
    alert("El calculo da como resultado de "+Math.round(Resultado/ArrayClima[2].Valor)+"ml de nuestro producto")
  } else if (SeleccionClima === ArrayClima[3].Nombre){
    console.log(Math.round(Resultado/ArrayClima[3].Valor)+"ml " + "y tus variables fueron " + Planta2.nombre + ", "+ m2+"m2" + " y el clima es "+ArrayClima[3].Nombre)
    alert("El calculo da como resultado de "+Math.round(Resultado/ArrayClima[3].Valor)+"ml de nuestro producto")
  } else if (SeleccionClima === ArrayClima[4].Nombre){
    console.log(Math.round(Resultado/ArrayClima[4].Valor)+"ml " + "y tus variables fueron " + Planta2.nombre + ", "+ m2+"m2" + " y el clima es "+ArrayClima[4].Nombre)
    alert("El calculo da como resultado de "+Math.round(Resultado/ArrayClima[4].Valor)+"ml de nuestro producto")
    
  } else {alert("ERROR DE ESCRITURA, INTENTA NUEVAMENTE")}
      TipoDePlanta = prompt("Puedes hacer cuantos calculos quieras, escoge otra planta: Chile, Maiz o Tomate? o escriba Salir para terminar; Por favor respeta las mayusculas")
    }

function CalculoPlanta3(){


    let m2= prompt("Cuanto mide tu terreno en M2, Por favor solo escribe el numero")
            
    if (TipoDePlanta = Planta3.nombre && m2 <= 50) {
         alert("El calculo nos arroja " +Math.round((Resultado = (m2 * (Planta3.factor1))))+ "ml por cada m2 de " + Planta3.nombre + " sin embargo, falta tomar en cuenta una variable mas, ¡sigamos!");
    } else if (TipoDePlanta = Planta3.nombre && m2 <= 100) {
         alert("El calculo nos arroja " +Math.round((Resultado = ( m2 * (Planta3.factor2)))) + "ml por cada m2 de " + Planta3.nombre + " sin embargo, falta tomar en cuenta una variable mas, ¡sigamos!");
    } else if (TipoDePlanta = Planta3.nombre && m2 <= 200) {
         alert("El calculo nos arroja " +Math.round((Resultado = (m2 * (Planta3.factor3)))) + "ml por cada m2 de " + Planta3.nombre + " sin embargo, falta tomar en cuenta una variable mas, ¡sigamos!");
    }else {alert("No es un numero, actuliza la pagina")}
    
   let SeleccionClima = prompt("Que clima predomina la zona en que tienes tus tierras? Existen 5 opciones : Tropical, Seco, Templado, Continental y Polar, por favor respeta las mayusculas")

  if(SeleccionClima === ArrayClima[0].Nombre){
    console.log(Math.round(Resultado/ArrayClima[0].Valor)+"ml " + "y tus variables fueron " + Planta3.nombre + ", "+ m2+"m2" + " y el clima es "+ArrayClima[0].Nombre)
    alert("El calculo da como resultado de "+Math.round(Resultado/ArrayClima[0].Valor)+"ml de nuestro producto")
  } else if (SeleccionClima === ArrayClima[1].Nombre){
    console.log(Math.round(Resultado/ArrayClima[1].Valor)+"ml " + "y tus variables fueron " + Planta3.nombre + ", "+ m2+"m2" + " y el clima es "+ArrayClima[1].Nombre)
    alert("El calculo da como resultado de "+Math.round(Resultado/ArrayClima[1].Valor)+"ml de nuestro producto")
  } else if (SeleccionClima === ArrayClima[2].Nombre){
    console.log(Math.round(Resultado/ArrayClima[2].Valor)+"ml " + "y tus variables fueron " + Planta3.nombre + ", "+ m2+"m2" + " y el clima es "+ArrayClima[2].Nombre)
    alert("El calculo da como resultado de "+Math.round(Resultado/ArrayClima[2].Valor)+"ml de nuestro producto")
  } else if (SeleccionClima === ArrayClima[3].Nombre){
    console.log(Math.round(Resultado/ArrayClima[3].Valor)+"ml " + "y tus variables fueron " + Planta3.nombre + ", "+ m2+"m2" + " y el clima es "+ArrayClima[3].Nombre)
    alert("El calculo da como resultado de "+Math.round(Resultado/ArrayClima[3].Valor)+"ml de nuestro producto")
  } else if (SeleccionClima === ArrayClima[4].Nombre){
    console.log(Math.round(Resultado/ArrayClima[4].Valor)+"ml " + "y tus variables fueron " + Planta3.nombre + ", "+ m2+"m2" + " y el clima es "+ArrayClima[4].Nombre)
    alert("El calculo da como resultado de "+Math.round(Resultado/ArrayClima[4].Valor)+"ml de nuestro producto")
    
  } else {alert("ERROR DE ESCRITURA, INTENTA NUEVAMENTE")}
  
  TipoDePlanta = prompt("Puedes hacer cuantos calculos quieras, escoge otra planta: Chile, Maiz o Tomate? o escriba Salir para terminar; Por favor respeta las mayusculas")
}

while(TipoDePlanta != "Salir"){

    switch (TipoDePlanta) {
        case Planta1.nombre:
          alert("¡Vamos con el calculo del Chile!");
          CalculoPlanta1();
          break;
        case Planta2.nombre:
          alert("¡Vamos con el calculo del Maiz!");
          CalculoPlanta2();
          break;
          case Planta3.nombre:
          alert("¡Vamos con el calculo del Tomate!");
          CalculoPlanta3();
          break;
          default:
              break;
      }
    
  }


 /* Los resultados con el valor del clima (resultado de la primera operacion / valor del clima) se guardan en la consola, por lo que tendras que salir y verla */ 
 
 
 alert("¡muchas gracias " + nombreUsuario + " ! ¡Vuelve pronto!, Por cierto tus calculos quedaron grabados en la consola; Revisalos antes de actualizar la pagina") 
 

 