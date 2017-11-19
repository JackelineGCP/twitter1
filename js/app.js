window.addEventListener("load", function(){
  
//declaro mis variables
var boton = document.getElementById("button");
var letter = document.getElementById("tex");
var textconte = document.getElementById("textconte");
var count =  document.getElementById("count");
var contador = 0;
var total;

var textarea = document.querySelector('textarea');

textconte.setAttribute('style','visibility:hidden');
count.setAttribute('style','color:blue');

//defino mis eventos
boton.addEventListener("click",function(){
  textconte.setAttribute('style','visibility:visible');
  
  var contenido = letter.value;
  contenido = contenido.trim(); // quita los espacios vacios

  if(contenido.length != 0){
    textconte.value = contenido;

  }else{
    textconte.setAttribute('style','visibility:hidden');
    boton.disabled = true; 
      }
  });
//Version 0.0.2
  window.addEventListener("keypress", function(e){
    var contenido = String.fromCharCode(e.keyCode);
    contenido = contenido.trim(); // quita los espacios vacios

    if (e.keyCode ==13){
      
      textconte.setAttribute('rows','');
      
      $('#textconte').focus(function(){
        $(this).attr('rows', '4');
      });

      
    } else{

      if(contenido.length != 0){
        boton.disabled = false; 
        contador = contador + 1;
        total = 140 - contador ;
        count.value = total;
        if(total < 0){
          boton.disabled = true;       
          count.setAttribute('style','color:blue');
        } else {
          if (total < 120){
            count.setAttribute('style','color:red');
          }else if(total < 130){
            count.setAttribute('style','color:green');
          } 
        }
      }
    }      
    });

textarea.addEventListener('keydown', autosize);
     
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
    },0);
  }
});
