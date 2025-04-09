document.addEventListener('DOMContentLoaded', function () {
  const d = document;
  const $q = d.querySelectorAll.bind(d);
  const $g = d.querySelector.bind(d);
  const $prev = $g(".prev");
  const $next = $g(".next");
  const $list = $g(".carousel__list");
  let auto;
  
  // Usar variable global para evitar acceder al DOM repetidamente
  const $slides = $q(".carousel__item");

  const getActiveIndex = () => {
    const $active = $g("[data-active]");
    return [...$slides].indexOf($active);
  };

  const prevSlide = () => {
    const index = getActiveIndex();
    const $last = $slides[$slides.length - 1];
    $list.prepend($last);
    activateSlide($slides[index]);
  };

  const nextSlide = () => {
    const index = getActiveIndex();
    const $first = $slides[0];
    $list.append($first);
    activateSlide($slides[index]);
  };

  const chooseSlide = (e) => {
    const max = (window.matchMedia("screen and ( max-width: 600px)").matches) ? 5 : 8;
    const $slide = e.target.closest(".carousel__item");
    const index = [...$slides].indexOf($slide);
    if (index < 3 || index > max) return;
    if (index === max) nextSlide();
    if (index === 3) prevSlide();
    activateSlide($slide);
  };

  const activateSlide = ($slide) => {
    if (!$slide) return;
    [...$slides].forEach(el => el.removeAttribute('data-active'));
    $slide.setAttribute('data-active', true);
  };

  const autoSlide = () => {
    nextSlide();
  };

  const pauseAuto = () => {
    clearInterval(auto);
  };

  const handleNextClick = (e) => {
    pauseAuto();
    nextSlide(e);
  };

  const handlePrevClick = (e) => {
    pauseAuto();
    prevSlide(e);
  };

  const handleSlideClick = (e) => {
    pauseAuto();
    chooseSlide(e);
  };

  const handleSlideKey = (e) => {
    switch (e.keyCode) {
      case 37:
      case 65:
        handlePrevClick();
        break;
      case 39:
      case 68:
        handleNextClick();
        break;
    }
  };

  const startAuto = () => {
    auto = setInterval(autoSlide, 3000);
  };

  // Solo llamar a startAuto si hay elementos para el carrusel
  if ($list) {
    startAuto();
  }

  $next.addEventListener("click", handleNextClick);
  $prev.addEventListener("click", handlePrevClick);
  $list.addEventListener("focusin", handleSlideClick);
  $list.addEventListener("keyup", handleSlideKey);
});

function openmodal() {
  document.querySelector('#titlemodal').innerHTML = "Servicios";
  $('#modalformhome').modal("show");
}
