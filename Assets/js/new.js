document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-loaded');

  // Eliminar el preloader una vez cargada la página
  const preloader = document.getElementById('js-preloader');
  if (preloader) {
    preloader.style.display = 'none';
  }
  const nextBtn = document.querySelector(".nextpr");
  const prevBtn = document.querySelector(".prevpr");
  const carousel = document.querySelector(".carouselpr");
  const list = document.querySelector(".list");
  const items = Array.from(document.querySelectorAll(".item"));
  const runningTimeBar = document.querySelector(".carousel .timeRunning");
  const arrowsDiv = document.querySelector(".arrows");

  const TIME_RUNNING = 1500;
  const TIME_AUTO_NEXT = 7500;

  let transitionTimeout;
  let autoNextTimeout;

  // Preconfiguro datos por slide
  items.forEach((item, index) => {
    item.querySelector(".title").dataset.item = index + 1;
  });

  // Control de navegación
  nextBtn.addEventListener("click", () => handleSlider("next"));
  prevBtn.addEventListener("click", () => handleSlider("prev"));

  startAutoSlide();
  resetProgressBar();
  updateSlideInfo();

  function handleSlider(direction) {
    const sliderItems = list.querySelectorAll(".item");

    if (direction === "next") {
      list.appendChild(sliderItems[0]);
      carousel.classList.add("next");
    } else if (direction === "prev") {
      list.prepend(sliderItems[sliderItems.length - 1]);
      carousel.classList.add("prev");
    }

    updateSlideInfo();
    resetCarouselState();
  }

  function updateSlideInfo() {
    const oldNumber = document.querySelector(".slide-number");
    if (oldNumber) oldNumber.remove();

    const sliderItems = Array.from(list.querySelectorAll(".item"));
    const activeItem = parseInt(sliderItems[1].querySelector(".title").dataset.item);
    const formattedIndex = activeItem < 10 ? `0${activeItem}` : activeItem.toString();

    const div = document.createElement("div");
    div.classList.add("slide-number");
    div.textContent = `${formattedIndex}/${sliderItems.length}`;
    arrowsDiv.appendChild(div);
  }

  function resetCarouselState() {
    clearTimeout(transitionTimeout);
    clearTimeout(autoNextTimeout);

    // Usamos requestAnimationFrame para esperar a la próxima "pintada"
    requestAnimationFrame(() => {
      carousel.classList.remove("next");
      carousel.classList.remove("prev");
    });

    startAutoSlide();
    resetProgressBar();
  }

  function startAutoSlide() {
    autoNextTimeout = setTimeout(() => {
      nextBtn.click();
    }, TIME_AUTO_NEXT);
  }

  function resetProgressBar() {
    if (runningTimeBar) {
      runningTimeBar.style.animation = "none";
      // Esto ya no forzará reflow visible
      requestAnimationFrame(() => {
        runningTimeBar.style.animation = `runningTime ${TIME_AUTO_NEXT / 1000}s linear forwards`;
      });
    }
  }

  // Responsive title
  function actualizarTitulo() {
    const titulo = document.getElementById("titulo-responsive");
    const html = 'Soluciones a <em>Medida Para el Sector de las Telecomunicaciones</em> Inalámbricas';
    if (titulo) titulo.innerHTML = html;
  }

  actualizarTitulo();
  window.addEventListener("resize", actualizarTitulo);

  // Ajuste para Chrome móvil
  if (window.innerWidth <= 768) {
    if (navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Edg") && !navigator.userAgent.includes("OPR")) {
      document.documentElement.style.zoom = "0.80";
    }
  }
});
