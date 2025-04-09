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




<div class="container py-5">
  <div class="row mb-4">
    <div class="col">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Reindeer in Focus</li>
        </ol>
      </nav>
      <h1>
        Reindeer in Focus
      </h1>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col">
      <div class="form-group bg-white input-icon p-3 rounded shadow-sm mb-3">
        <i class="fa fa-magnifying-glass"></i>
        <input type="search" placeholder="Search by title or category" class="form-control mb-3" />
        <div class="categories" id="categories"></div>
      </div>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 gx-3" id="cards-container"></div>
</div>




<?php
footerprincipal($data);
?>