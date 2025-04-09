document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const carousel = document.querySelector(".carousel");
  const list = document.querySelector(".list");
  const items = Array.from(document.querySelectorAll(".item"));
  const runningTimeBar = document.querySelector(".carousel .timeRunning");
  const arrowsDiv = document.querySelector(".arrows");
  const progressBarContainer = document.createElement("div");

  progressBarContainer.className = "progress-bar-container";
  arrowsDiv.appendChild(progressBarContainer);

  // Timing configurations
  const TIME_RUNNING = 1500; // Animation duration for the transition
  const TIME_AUTO_NEXT = 7500; // Auto-slide duration

  // Initialize timeout variables
  let transitionTimeout;
  let autoNextTimeout;

  // Create a progress bar element and update the title initially
  const slideNumberElement = document.createElement("div");
  slideNumberElement.classList.add("slide-number");
  arrowsDiv.appendChild(slideNumberElement);

  const updateProgressBar = () => {
    const totalSlides = items.length;
    const sliderItems = Array.from(list.querySelectorAll(".item"));
    const activeItem = parseInt(sliderItems[0].querySelector(".title").getAttribute("data-item")) + 1;
    const progressPercentage = (activeItem / totalSlides) * 100;
    runningTimeBar.style.width = `${progressPercentage}%`;
  };

  const resetAnimation = () => {
    runningTimeBar.style.animation = "none"; 
    runningTimeBar.offsetHeight; // Trigger reflow to restart animation
    runningTimeBar.style.animation = `runningTime ${TIME_AUTO_NEXT / 1000}s linear forwards`; // Restart animation
  };

  const updateSlideNumber = () => {
    const sliderItems = Array.from(list.querySelectorAll(".item"));
    const activeItem = parseInt(sliderItems[1].querySelector(".title").getAttribute("data-item"));
    slideNumberElement.textContent = `${activeItem < 10 ? `0${activeItem}` : activeItem}/${sliderItems.length}`;
  };

  const resetCarouselState = () => {
    clearTimeout(transitionTimeout);
    clearTimeout(autoNextTimeout);
    
    // Remove transition classes after animation duration
    transitionTimeout = setTimeout(() => {
      carousel.classList.remove("next", "prev");
    }, TIME_RUNNING);

    // Restart auto-slide
    autoNextTimeout = setTimeout(() => {
      nextBtn.click();
    }, TIME_AUTO_NEXT);

    // Reset animation and update progress bar
    resetAnimation();
    updateProgressBar();
  };

  const handleSliderNavigation = (direction) => {
    const sliderItems = list.querySelectorAll(".item");

    if (direction === "next") {
      list.appendChild(sliderItems[0]); 
      carousel.classList.add("next");
    } else if (direction === "prev") {
      list.prepend(sliderItems[sliderItems.length - 1]);
      carousel.classList.add("prev");
    }

    updateSlideNumber();
    resetCarouselState();
  };

  // Auto-next navigation
  const startAutoSlide = () => {
    autoNextTimeout = setTimeout(() => {
      nextBtn.click();
    }, TIME_AUTO_NEXT);
  };

  // Initialize
  nextBtn.addEventListener("click", () => handleSliderNavigation("next"));
  prevBtn.addEventListener("click", () => handleSliderNavigation("prev"));
  startAutoSlide();

  // Title responsive update
  const actualizarTitulo = () => {
    const titulo = document.getElementById("titulo-responsive");
    titulo.innerHTML = 'Soluciones a <em>Medida Para el Sector de las Telecomunicaciones</em> Inalámbricas';
  };

  actualizarTitulo();
  window.addEventListener("resize", actualizarTitulo);

  // Chrome zoom fix for small screens
  if (window.innerWidth <= 768) {
    if (navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Edg") && !navigator.userAgent.includes("OPR")) {
      document.documentElement.style.zoom = "0.80"; 
    }
  }

  // Initial call to set slide number and animation
  updateSlideNumber();
  resetAnimation();
});
