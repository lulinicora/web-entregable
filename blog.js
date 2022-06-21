function leerMas() {
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