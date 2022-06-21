let fotoIndex = 1;
mostrarFoto(fotoIndex);

function plusSlides(n) {
   mostrarFoto(fotoIndex += n);
}

function currentSlide(n) {
    mostrarFoto(fotoIndex = n);
}

function mostrarFoto(n) {
  let i;
  let foto = document.getElementsByClassName("foto");
  if (n > foto.length) {fotoIndex = 1} 
  if (n < 1) {fotoIndex = foto.length}
  for (i = 0; i < foto.length; i++) {
    foto[i].style.display = "none"; 
  }
  foto[fotoIndex -1].style.display = "block"; 
}