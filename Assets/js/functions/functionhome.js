document.addEventListener('DOMContentLoaded', function () {
  const d = document;
  const $q = d.querySelectorAll.bind(d);
  const $g = d.querySelector.bind(d);
  const $prev = $g(".prev");
  const $next = $g(".next");
  const $list = $g(".carousel__list");
  let auto;
  let pauser;
  
  const $slides = [...$q(".carousel__item")]; // Almacenar las referencias a los slides
  
  const getActiveIndex = () => {
    const $active = $g("[data-active]");
    return getSlideIndex($active);
  }
  
  const getSlideIndex = ($slide) => {
    return $slides.indexOf($slide);
  }
  
  const prevSlide = () => {
    const index = getActiveIndex();
    const $last = $slides.pop();
    $slides.unshift($last);
    $list.prepend($last);
    activateSlide($slides[index]);
  }
  
  const nextSlide = () => {
    const index = getActiveIndex();
    const $first = $slides.shift();
    $slides.push($first);
    $list.append($first);
    activateSlide($slides[index]);
  }
  
  const chooseSlide = (e) => {
    const max = (window.matchMedia("screen and (max-width: 600px)").matches) ? 5 : 8;
    const $slide = e.target.closest(".carousel__item");
    const index = getSlideIndex($slide);
    if (index < 3 || index > max) return;
    if (index === max) nextSlide();
    if (index === 3) prevSlide();
    activateSlide($slide);
  }
  
  const activateSlide = ($slide) => {
    if (!$slide) return;
    $slides.forEach(el => el.removeAttribute('data-active'));
    $slide.setAttribute('data-active', true);
  }
  
  const autoSlide = () => {
    nextSlide();
  }
  
  const pauseAuto = () => {
    clearInterval(auto);
    clearTimeout(pauser);
  }
  
  const handleNextClick = (e) => {
    pauseAuto();
    nextSlide();
  }
  
  const handlePrevClick = (e) => {
    pauseAuto();
    prevSlide();
  }
  
  const handleSlideClick = (e) => {
    pauseAuto();
    chooseSlide(e);
  }
  
  const handleSlideKey = (e) => {
    switch (e.keyCode) {
      case 37: // Flecha izquierda
      case 65: // Tecla "A"
        handlePrevClick();
        break;
      case 39: // Flecha derecha
      case 68: // Tecla "D"
        handleNextClick();
        break;
    }
  }
  
  const startAuto = () => {
    auto = setInterval(autoSlide, 3000); // Cambia de slide cada 3 segundos
  }
  
  startAuto(); // Llama a la función si existe un elemento con la clase "carousel"
  
  $next.addEventListener("click", handleNextClick);
  $prev.addEventListener("click", handlePrevClick);
  $list.addEventListener("focusin", handleSlideClick);
  $list.addEventListener("keyup", handleSlideKey);
})


function openmodal() {

  document.querySelector('#titlemodal').innerHTML = "Servicios";
  $('#modalformhome').modal("show");

}