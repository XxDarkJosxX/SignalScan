document.addEventListener('DOMContentLoaded', function () {





  // Mostrar el contenido principal
  const contenido = document.querySelector('.contenido-principal');
  if (contenido) {
    contenido.style.display = 'block';
  }

  // Ocultar el preloader
  const preloader = document.getElementById('js-preloader');
  if (preloader) {
    preloader.style.display = 'none';
  }






  const carrusel = document.querySelector('.carrini');

  // Aplica solo en pantallas pequeñas
  if (window.innerWidth <= 768 && carrusel) {
    // Retrasa un poco para que se note la animación
    setTimeout(() => {
      carrusel.classList.add('show');
    }, 300); // podés ajustar el tiempo
  } else {
    // Si no es móvil, mostrarlo inmediatamente
    carrusel.classList.add('show');
  }





  const d = document;
  const $q = d.querySelectorAll.bind(d);
  const $g = d.querySelector.bind(d);
  const $list = $g(".carousel__list");

  let auto;
  const $slides = [...$q(".carousel__item")];

  const getActiveIndex = () => {
    const $active = $g("[data-active]");
    return getSlideIndex($active);
  };

  const getSlideIndex = ($slide) => $slides.indexOf($slide);

  const activateSlide = ($slide) => {
    if (!$slide) return;
    $slides.forEach(el => el.removeAttribute("data-active"));
    $slide.setAttribute("data-active", true);
  };

  const nextSlide = () => {
    const index = getActiveIndex();
    const $first = $slides.shift();
    $slides.push($first);
    $list.append($first);
    activateSlide($slides[index]);
  };

  const prevSlide = () => {
    const index = getActiveIndex();
    const $last = $slides.pop();
    $slides.unshift($last);
    $list.prepend($last);
    activateSlide($slides[index]);
  };

  const chooseSlide = (e) => {
    const $slide = e.target.closest(".carousel__item");
    if (!$slide) return;

    const index = getSlideIndex($slide);
    const activeIndex = getActiveIndex();
    const steps = index - activeIndex;

    if (steps === 0) return;

    if (steps > 0) {
      for (let i = 0; i < steps; i++) {
        const $first = $slides.shift();
        $slides.push($first);
        $list.append($first);
      }
    } else {
      for (let i = 0; i < Math.abs(steps); i++) {
        const $last = $slides.pop();
        $slides.unshift($last);
        $list.prepend($last);
      }
    }

    activateSlide($slides[activeIndex]);
  };

  // Deslizar en móvil
  let startX = 0;

  $list.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  $list.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      clearInterval(auto);
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  });

  // Click en tarjeta
  $list.addEventListener("click", e => {
    clearInterval(auto);
    chooseSlide(e);
  });

  // Teclas ← →
  d.addEventListener("keyup", e => {
    clearInterval(auto);
    if (e.key === "ArrowRight" || e.key === "d") nextSlide();
    if (e.key === "ArrowLeft" || e.key === "a") prevSlide();
  });

  // Auto slide
  auto = setInterval(nextSlide, 3000);




})


function openmodal() {

  document.querySelector('#titlemodal').innerHTML = "Servicios";
  $('#modalformhome').modal("show");

}