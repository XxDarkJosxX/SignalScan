<?php
headerprincipal($data);
nav_content($data);
?>


<!-- Carrusel -->


<div class="carousel">
    <div class="list">

        <div class="item" style="background-image: url('Assets/img/Ejemplo(1).png');">
            <div class="content">
                <div class="title">SUNRISE ON PEAKS</div>
                <div class="name">Sunrise</div>
                <div class="des">Witness the serene beauty of the sunrise over
                    majestic
                    mountain peaks. A moment of pure tranquility.</div>
            </div>
        </div>

        <div class="item" style="background-image: url('Assets/img/Ejemplo(2).png');">
            <div class="content">
                <div class="title">RUGGED ROCKS</div>
                <div class="name">Rocky</div>
                <div class="des">Explore the rugged beauty of barren rocky mountains.
                    A
                    testament to nature's raw power.</div>
            </div>
        </div>

        <div class="item" style="background-image: url('Assets/img/Ejemplo(3).png');;">
            <div class="content">
                <div class="title">FOREST PATHWAY</div>
                <div class="name">Forest</div>
                <div class="des">A peaceful trail through dense green forests. Perfect
                    for
                    reconnecting with nature.</div>
            </div>
        </div>

        <div class="item" style="background-image: url('Assets/img/Ejemplo(4).png');">
            <div class="content">
                <div class="title">COLORFUL MEADOW</div>
                <div class="name">Meadow</div>
                <div class="des">A colorful meadow filled with butterflies and
                    blooming
                    flowers. Nature at its best.</div>
            </div>
        </div>



    </div>

    <!--next prev button-->
    <div class="arrows">
        <button class="prev">
            <i class="bi bi-arrow-left"></i>
        </button>
        <button class="next">
            <i class="bi bi-arrow-right"></i>
        </button>

        <div class="slide-number"></div>
    </div>

    <!-- time running -->
    <div class="timeRunning"></div>


</div>


<!-- Carrusel -->

<!-- Cambios de Formulario -->

<div class="contactContainer" s>
    <div class="innerwrap">

        <section class="section1 clearfix">

        </section>

        <section class="section2 clearfix">
            <div class="col2 column1 first">

                <script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script>
                <div class="sec2map" style='overflow:hidden;height:550px;width:100%;'>
                    <div id='gmap_canvas' style='height:100%;width:100%;'>


                        <iframe class="rounded w-500 mapastyle" style='height:100%;width:100%;' src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d820.7216557791962!2d-58.4061649!3d-34.6323053!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDM3JzU2LjIiUyA1OMKwMjQnMjAuMiJX!5e0!3m2!1ses!2sbo!4v1709151645097!5m2!1ses!2sbo" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>


                    <style>
                        #gmap_canvas img {
                            max-width: none !important;
                            background: none !important
                        }
                    </style>
                </div>

            </div>
            <div class="col2 column2 last">
    
                <div class="sec2contactform">

                    <div class="form-container">

                        <form id="feedbackForm">
                            <h1>Contáctanos</h1>

                            <div class="section">
                                <h2 class="section-title">¿Tienes una idea, un proyecto o simplemente querés saber más sobre lo que hacemos?</h2>
                                <div class="input-group">
                                    <label for="name">Estamos listos para ayudarte. Escribinos por correo, WhatsApp o redes sociales y te responderemos lo antes posible.</label>
                                  
                                </div>

                                <a class="float-buttonform colorbuttonemail" target="_blank" href="https://api.whatsapp.com/send?phone=67016437">
                                    <i class="fas fa-envelope" aria-hidden="true"></i>
                                    <span> Envíanos un mensaje por Gmail<span>
                                </a>

                                <a class="float-buttonform colorbuttonwap" target="_blank" href="https://api.whatsapp.com/send?phone=67016437">
                                    <i class="fab fa-whatsapp" aria-hidden="true"></i>
                                    <span>Envíanos un mensaje por WhatsApp<span>
                                </a>

                        </form>


                    </div>
                </div>

            </div>
        </section>

    </div>
</div>



<?php
footerprincipal($data);
?>