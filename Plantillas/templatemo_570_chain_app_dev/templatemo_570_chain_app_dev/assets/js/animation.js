(function () {
  class Util {
    extend(custom, defaults) {
      for (const key in custom) {
        if (custom[key] != null) {
          defaults[key] = custom[key];
        }
      }
      return defaults;
    }

    isMobile(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    }
  }

  class WOW {
    constructor(options = {}) {
      this.defaults = {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true
      };

      this.config = new Util().extend(options, this.defaults);

      this.scrollCallback = this.scrollCallback.bind(this);
      this.scrollHandler = this.scrollHandler.bind(this);
      this.start = this.start.bind(this);

      this.scrolled = true;
    }

    init() {
      if (['interactive', 'complete'].includes(document.readyState)) {
        this.start();
      } else {
        document.addEventListener('DOMContentLoaded', this.start);
      }
    }

    start() {
      this.element = document.documentElement;
      this.boxes = this.element.getElementsByClassName(this.config.boxClass);

      if (this.boxes.length) {
        if (this.disabled()) {
          this.resetStyle();
        } else {
          Array.from(this.boxes).forEach(box => this.applyStyle(box, true));
          window.addEventListener('scroll', this.scrollHandler, false);
          window.addEventListener('resize', this.scrollHandler, false);
          this.interval = setInterval(this.scrollCallback, 50);
        }
      }
    }

    stop() {
      window.removeEventListener('scroll', this.scrollHandler, false);
      window.removeEventListener('resize', this.scrollHandler, false);
      if (this.interval) {
        clearInterval(this.interval);
      }
    }

    show(box) {
      this.applyStyle(box);
      box.className += ` ${this.config.animateClass}`;
    }

    applyStyle(box, hidden) {
      const duration = box.getAttribute('data-wow-duration');
      const delay = box.getAttribute('data-wow-delay');
      const iteration = box.getAttribute('data-wow-iteration');

      let style = hidden
        ? 'visibility: hidden; animation-name: none;'
        : 'visibility: visible;';

      if (duration) style += `animation-duration: ${duration};`;
      if (delay) style += `animation-delay: ${delay};`;
      if (iteration) style += `animation-iteration-count: ${iteration};`;

      box.setAttribute('style', style);
    }

    resetStyle() {
      Array.from(this.boxes).forEach(box => box.setAttribute('style', 'visibility: visible;'));
    }

    scrollHandler() {
      this.scrolled = true;
    }

    scrollCallback() {
      if (!this.scrolled) return;

      this.scrolled = false;

      const visibleBoxes = [];
      for (const box of this.boxes) {
        if (this.isVisible(box)) {
          this.show(box);
        } else {
          visibleBoxes.push(box);
        }
      }

      this.boxes = visibleBoxes;
      if (!this.boxes.length) this.stop();
    }

    offsetTop(el) {
      let top = el.offsetTop;
      while (el = el.offsetParent) {
        top += el.offsetTop;
      }
      return top;
    }

    isVisible(box) {
      const offset = parseInt(box.getAttribute('data-wow-offset') || this.config.offset);
      const viewTop = window.pageYOffset;
      const viewBottom = viewTop + this.element.clientHeight - offset;

      const top = this.offsetTop(box);
      const bottom = top + box.clientHeight;

      return top <= viewBottom && bottom >= viewTop;
    }

    disabled() {
      return !this.config.mobile && new Util().isMobile(navigator.userAgent);
    }
  }

  // Iniciar WOW.js
  document.addEventListener("DOMContentLoaded", function () {
    new WOW().init(); // Asegúrate de inicializar WOW después de que el DOM se haya cargado
  });

  window.WOW = WOW;
})();
