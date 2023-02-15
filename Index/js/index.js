/* Redireccion a las subpáginas */

const buttons = document.querySelectorAll("#card1s-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "subPagFormacion.html";
  });
});

document.querySelector(".section-3-button").addEventListener('click', function(){
    window.location.href = "permisos.html";
})

document.querySelector(".section-3-button2").addEventListener('click', function(){
    window.location.href = "permisos.html";
})

document.querySelector(".center-button").addEventListener('click', function(){
    window.location.href = "subPagSobreNosotros.html";
})
/* Iniciar animaciones */
AOS.init();

/*Cambiar estilos cuando el menu hamburguesa este desplegado  */

let navbarCollapse = document.getElementById("navbarCollapse");
let text = document.querySelector(".text");


navbarCollapse.addEventListener("show.bs.collapse", function() {
  text.style.color = "white";
  text.style.backgroundColor ="black";
  text.style.opacity ="0.8";
});

navbarCollapse.addEventListener("hide.bs.collapse", function() {
  text.style.color = "black";
  text.style.backgroundColor ="transparent";
  text.style.opacity ="1";
});
