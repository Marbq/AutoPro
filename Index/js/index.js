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

