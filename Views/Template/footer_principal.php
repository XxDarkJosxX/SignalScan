
<!-- Footer Start -->
<div class="container-fluid footer py-5 " data-wow-delay="0.2s" style="padding-bottom: 90px !important;"><!-- wow fadeIn -->
    <div class="container py-5">
        <div class="row g-5">
            <div class="col-md-6 col-lg-6 col-xl-4" style="margin-top: 10px !important;">
                <div class="footer-item d-flex flex-column">
                    <h4 class="text-white mb-4 titlefooter">
                        <img width="200" height="90" src="Assets/images/logo.jpg" style="max-width: 34% !important;"> <br><br>Redes Sociales
                    </h4>

                    <div class="d-flex align-items-center">
                        <i class="fas fa-share fa-2x text-white me-2"></i>
                        <a class="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i class="fab fa-tiktok"></i></a>
                        <a class="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-6 col-xl-4">
                <div class="footer-item d-flex flex-column">
                    <h4 class="mb-4 text-white">Servicios</h4>
                    <a href="#top"><i class="fas fa-angle-right me-2"></i> Inicio</a>
                    <a href="#producos"><i class="fas fa-angle-right me-2"></i> Productos</a>
                    <a href="#services"><i class="fas fa-angle-right me-2"></i> Servicios</a>
                    <a href="#Contactos"><i class="fas fa-angle-right me-2"></i> Contactos</a>
                </div>
            </div>
            <div class="col-md-6 col-lg-162 col-xl-4">
                <div class="footer-item d-flex flex-column">
                    <h4 class="mb-4 text-white">Información Contactos</h4>
                    <a href="https://maps.app.goo.gl/mkzxkBkZ2LXGgrCP9"><i class="fa fa-map-marker-alt me-2"></i> Calle Yanacocha 842, Edificio Esculapio depto. 5B La Paz Bolivia</a>
                    <a href="mailto:sergio.lima@signalscan.com.bo?subject=Consulta&body=Hola,%20quiero%20más%20información."><i class="fas fa-envelope me-2"></i> sergio.lima@signalscan.com.bo</a>
                    <a href="https://api.whatsapp.com/send?phone=76288202&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n"><i class="fas fa-phone me-2"></i> 76288202</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Footer End -->

<!-- Scripts -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script src="Assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="Assets/js/owl-carousel.js"></script>
<script>
    if (window.innerWidth > 768) { // Solo en dispositivos de escritorio (puedes ajustar el tamaño)
        var script = document.createElement('script');
        script.src = 'Assets/js/animation.js?v=' + Date.now();
        document.head.appendChild(script);
    }
</script>
<script src="Assets/js/imagesloaded.js"></script>
<script src="Assets/js/popup.js"></script>
<script src="Assets/js/custom.js"></script>
<script src="Assets/js/nav.js"></script>
<script src="Assets/js/new.js?v=<?php echo time(); ?>"></script>

<script src="Assets/js/functions/<?= $data['page_js'] ?>?v=<?php echo time(); ?>"></script>
</div>
</body>

</html>