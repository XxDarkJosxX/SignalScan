document.addEventListener('DOMContentLoaded', function () {

  // Asegúrate de que el preloader esté completamente cargado
  document.body.style.display = 'block'; // Muestra el contenido de la página

  // Elimina el preloader después de que la página se cargue
  const preloader = document.getElementById('js-preloader');
  if (preloader) {
    setTimeout(function () {
      preloader.style.display = 'none'; // Oculta el preloader
    }, 500); // Elimina el preloader con un pequeño retraso para dar tiempo a la transición
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