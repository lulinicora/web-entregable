
botonFlecha = document.getElementById("boton-top");

window.onscroll = function() {scrollArriba()};

function scrollArriba() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    botonFlecha.style.display = "block";
  } else {
    botonFlecha.style.display = "none";
  }
}

function botonTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}
