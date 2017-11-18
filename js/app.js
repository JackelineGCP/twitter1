window.addEventListener("load", function(){
  
//declaro mis variables
var boton = document.getElementById("button");
var letter = document.getElementById("tex");
var textconte = document.getElementById("textconte");



//defino mis eventos
boton.addEventListener("click",function(){
  var contenido = letter.value;
  if(contenido.length != 0){
    textconte.value = contenido;

  }else{
    boton.setAttribute("disable",true);
       }
  });


});
