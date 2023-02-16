// Inciador de animaciones al cargar y recargar la página
AOS.init();

// Slider
// Definir una variable para contar el número de imágenes en el slider
var count = 0;

// Seleccionar el elemento HTML con la clase "slider__navigation"
const sliderNavigation = document.querySelector('.slider__navigation');

// Eliminar todos los nodos hijos del elemento "sliderNavigation"
while (sliderNavigation.firstChild) {
    sliderNavigation.removeChild(sliderNavigation.firstChild);
}

// Función para animar las diapositivas
const heroAnimations = () => {
    // Configurar el temporizador para llamar a la función "heroAnimations" cada 6000 milisegundos (6 segundos)
    setTimeout(heroAnimations, 6000);

    // Seleccionar todas las imágenes y detalles en el slider, y el punto de navegación de cada diapositiva
    const heroImage = document.querySelectorAll('.slider__image'),
        heroDetails = document.querySelectorAll('.slider__details'),
        heroDetailsBackground = document.querySelector('.slider__background--front'),
        heroNavDot = document.querySelectorAll('.slider__navigation--dot');

    // Ocultar todas las imágenes
    for (var i = 0; i < heroImage.length; i++) {
        heroImage[i].setAttribute('style', 'opacity: 0');
    }

    // Ocultar todos los detalles
    for (var i = 0; i < heroDetails.length; i++) {
        heroDetails[i].setAttribute('style', 'opacity: 0');
    }

    // Incrementar la variable "count" y restablecerla en 1 si es mayor que el número de imágenes en el slider
    count++;
    if (count > heroImage.length) {
        count = 1;
    }

    // Mostrar la imagen actual
    heroImage[count - 1].setAttribute('style', 'opacity: 1');

    // Establecer una animación de deslizamiento hacia la izquierda en la imagen actual, que se repite 
    // infinitamente durante 6 segundos
    heroImage[count - 1].style.animation = 'slideInLeft 6s infinite';

    // Mostrar los detalles de la imagen actual
    heroDetails[count - 1].setAttribute('style', 'opacity: 1');

    // Establecer una animación de fundido para mostrar los detalles, y otra para ocultarlos después de 4,5 
    // segundos
    heroDetails[count - 1].style.animation = 'fadeIn .5s forwards, fadeOut .5s 4.5s forwards';

    // Establecer una animación de deslizamiento hacia adentro y hacia afuera en el fondo de los detalles, que 
    // se repite infinitamente durante 6 segundos
    heroDetailsBackground.style.animation = 'slideInAndOut 6s infinite forwards';

    // Cambiar el color de fondo del punto de navegación correspondiente a la imagen actual a amarillo
    heroNavDot[count - 1].setAttribute('style', 'background: #FEDC17');
}
// Ejecutar la función "heroAnimations" para iniciar la animación del slider
heroAnimations();

// Evitar que la página se mueva al desplazarse en dispositivos móviles mediante la prevención del comportamiento 
// predeterminado del evento de "touchmove"
document.body.addEventListener("touchmove", function(event) {
event.preventDefault();
});

// En resumen, el código es para un slider que muestra diferentes imágenes y detalles en una página web, 
// y se utiliza la función heroAnimations para animar las transiciones entre las imágenes y los detalles. La 
// función setTimeout se utiliza para llamar a la función heroAnimations cada 6 segundos para que las 
// diapositivas cambien automáticamente. Además, el código evita que la página se mueva al desplazarse 
// en dispositivos móviles mediante la prevención del comportamiento predeterminado del evento "touchmove".