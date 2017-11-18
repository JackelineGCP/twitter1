window.addEventListener('load', function(){
    
  //declaro mis variables
  var boton = document.getElementById('button');
  boton.setAttribute('disable',true); 
  var letter = document.getElementById('text');
  var textconte = document.getElementById('textconte');
  var retroconta =  document.getElementById('retroconta');
  var contador = 0;
  var total;
  //var contenido;


  //Version 0.0.2
letter.addEventListener('keypress', function(){
    
    contenido = letter.value;
    alert('contenido: '+contenido);
    //contenido = contenido.trim;
    textconte.value = contenido;
});

});
