function leerMas(){
    var vacio = document.getElementById("vacio");
    var masTexto = document.getElementById("mas");
    var btnTexto = document.getElementById("botonInformacion");
  
    if (vacio.style.display === "none") {
        vacio.style.display = "inline";
        btnTexto.innerHTML = "Mas Información"; 
      masTexto.style.display = "none";
    } else {
        vacio.style.display = "none";
        btnTexto.innerHTML = "Mostrar Menos"; 
      masTexto.style.display = "inline";
    }
  }

function mostrarMas(){
  var algo = document.getElementById("algo");
  var masAlgo = document.getElementById("algo-mas");
  var btnPlegable = document.getElementById("boton-plegable");
  
  if (algo.style.display === "none") {
    algo.style.display = "inline";
    btnPlegable.innerHTML = "Mas Información"; 
    masAlgo.style.display = "none";
  } else {
    algo.style.display = "none";
    btnPlegable.innerHTML = "Mostrar Menos"; 
    masAlgo.style.display = "inline";
  }
}
function verMas(){
  var nada = document.getElementById("nada");
  var complemento = document.getElementById("complemento");
  var btnRon = document.getElementById("boton-ron");
  
  if (nada.style.display === "none") {
    nada.style.display = "inline";
    btnRon.innerHTML = "Mas Información"; 
    complemento.style.display = "none";
  } else {
    nada.style.display = "none";
    btnRon.innerHTML = "Mostrar Menos"; 
    complemento.style.display = "inline";
  }

}

