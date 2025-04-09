const ul = document.querySelector('.ulnav');
const movingBorder = document.querySelector('.moving-border');
const items = document.querySelectorAll('.navselect');

function updateBorderToActive() {
  const activeItem = document.querySelector('.active');
  if (activeItem) {
    const activeRect = activeItem.getBoundingClientRect();
    const ulRect = ul.getBoundingClientRect();

    movingBorder.style.width = `${activeRect.width}px`;
    movingBorder.style.left = `${activeRect.left - ulRect.left}px`;
    movingBorder.style.opacity = '1';
  }
}

function handleMouseEnter(e) {
  if (window.innerWidth > 768) { // Only apply moving border on larger screens
    if (!e.target.classList.contains('active')) {
      const itemRect = e.target.getBoundingClientRect();
      const ulRect = ul.getBoundingClientRect();

      movingBorder.style.width = `${itemRect.width}px`;
      movingBorder.style.left = `${itemRect.left - ulRect.left}px`;
      movingBorder.style.opacity = '1';
    }
  }
}

function handleMouseLeave() {
  if (window.innerWidth > 768) {
    // Move back to active element with a fade effect
    setTimeout(updateBorderToActive, 200); // Small delay for smooth transition
  }
}

items.forEach(item => {
  item.addEventListener('mouseenter', handleMouseEnter);
});

ul.addEventListener('mouseleave', handleMouseLeave);

// Add a resize listener to remove moving border on small screens
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    movingBorder.style.opacity = '0';
    movingBorder.style.width = '0';
  } else {
    updateBorderToActive(); // Re-position on resize
  }
});

// Initialize the moving border on load
window.addEventListener('load', updateBorderToActive);

// Toggle menu for mobile view
function toggleMenu() {
  document.querySelector(".navres ul").classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  const ulNav = document.querySelector("nav ul");
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function() {
      if (window.scrollY > lastScrollY) {
          // Desplazamiento hacia abajo
          header.classList.add('scroll-up');
          if (ulNav.classList.contains("show")) {
              toggleMenu(); // Llama a la función si la clase "show" está presente
          }
      } else {
          // Desplazamiento hacia arriba
          header.classList.remove('scroll-up');
          if (ulNav.classList.contains("show")) {
              toggleMenu();
          }
      }
      lastScrollY = window.scrollY;
  });
});

  