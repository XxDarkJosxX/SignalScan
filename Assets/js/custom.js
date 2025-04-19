


(function ($) {

  "use strict";



  // Animación del fondo del header cuando se hace scroll
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var header = $('header').height();

    if (scroll >= 1000 - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  // Inicialización de OwlCarousel
  $('.loop').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    margin: 0,
    responsive: {
      1200: {
        items: 5
      },
      992: {
        items: 3
      },
      760: {
        items: 2
      }
    }
  });

  // Modal de Lean Modal
  $("#modal_trigger").leanModal({
    top: 100,
    overlay: 0.6,
    closeButton: ".modal_close"
  });

  // Llamar al formulario de login
  $("#login_form").click(function() {
    $(".social_login").hide();
    $(".user_login").show();
    return false;
  });

  // Llamar al formulario de registro
  $("#register_form").click(function() {
    $(".social_login").hide();
    $(".user_register").show();
    $(".header_title").text('Register');
    return false;
  });

  // Volver a la pantalla social
  $(".back_btn").click(function() {
    $(".user_login").hide();
    $(".user_register").hide();
    $(".social_login").show();
    $(".header_title").text('Login');
    return false;
  });

  // Accionamiento de la navegación
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();
    if (!$(this).is("active")) {
      $(".naccs .menu div").removeClass("active");
      $(".naccs ul li").removeClass("active");

      $(this).addClass("active");
      $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

      var listItemHeight = $(".naccs ul").find("li:eq(" + numberIndex + ")").innerHeight();
      $(".naccs ul").height(listItemHeight + "px");
    }
  });

  // Animación de desplazamiento suave
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  // Configuración del observador de intersección para animaciones
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');  // Añadir clase de animación
      } else {
        entry.target.classList.remove('animate');  // Eliminar clase de animación
      }
    });
  }, { threshold: 0.5 });  // Umbral de 50% para activar la animación

  // Selección de elementos a observar para las animaciones
  const animatedElements = document.querySelectorAll('.elemento-animado');
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  // Animación de carga de página
  $(window).on('load', function() {
    $('#js-preloader').addClass('loaded');
  });

  // Corrección de navegación móvil en el menú
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }

  // Recalcular Owl Carousel cuando la ventana se redimensione
  $(window).on('resize', function() {
    $(".owl-carousel").trigger('refresh.owl.carousel');
  });

})(window.jQuery);
