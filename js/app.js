window.addEventListener("load", function(){
  
//declaro mis variables
var boton = document.getElementById("button");
var letter = document.getElementById("tex");
var textconte = document.getElementById("textconte");
var count =  document.getElementById("count");
var contador = 0;
var total;

textconte.setAttribute('style','visibility:hidden');

//defino mis eventos
boton.addEventListener("click",function(){
  textconte.setAttribute('style','visibility:visible');
  var contenido = letter.value;
  if(contenido.length != 0){
    textconte.value = contenido;

  }else{
    boton.setAttribute("disable",true);
       }
  });
//Version 0.0.2
  window.addEventListener("keypress", function(e){
    var contenido = String.fromCharCode(e.keyCode);
    contenido = contenido.trim(); // quita los espacios vacios
      if(contenido.length != 0){
        boton.setAttribute("disable",false);
        contador = contador + 1;
        total = 140 - contador ;
        count.value = total;
      }  
    
    });
});
