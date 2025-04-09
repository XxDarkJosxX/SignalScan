
document.addEventListener('DOMContentLoaded', function () {


  var cat = document.getElementById('catalogoc');

// Asegurar que el elemento con ID "catalogoc" existe
  if (cat) {
      cat.classList.add('active'); // Agrega la clase "active" al elemento específico

      // Selecciona todos los elementos con la clase "navselect"
      var navItems = document.querySelectorAll('.navselect');

      // Recorre todos los elementos y elimina la clase "active" excepto en "catalogoc"
      navItems.forEach(function(item) {
          if (item !== cat) {
              item.classList.remove('active');
          }
      });
  }

  
  const renderCards = (cardsContainer, cards) => {
    cardsContainer.innerHTML = "";
  
    cards.forEach((card) => {
      const { title, description, cover, date, tags } = card;
  
      const cardElement = document.createElement("div");
      cardElement.classList.add("col");
  
      cardElement.innerHTML = `
        <div class="card border-0 bg-transparent position-relative">
          <a href="#" class="${cover.length > 1 ? "has-multiple" : ""}">
            ${cover
              .map(
                (image) =>
                  `<img src="${image}" class="shadow-sm rounded cover-image w-100" alt="${title}">`
              )
              .join("")}
          </a>
          <div class="bubble date rounded small">${date}</div>
          <i class="fas fa-images ${
            cover.length > 1 ? "has-multiple-icon" : "d-none"
          }"></i>
          <div class="card-body">
            <h2 class="h4"><a href="#" class="text-dark">${title}</a></h2>
            <p class="text-muted">${description}</p>
            <p class="m-0">
              ${tags
                .map(
                  (tag) =>
                    `<a href="#" class="small me-1 text-dark border p-1 rounded">${tag}</a>`
                )
                .join(" ")}
            </p>
          </div>
        </div>
      `;
  
      cardsContainer.appendChild(cardElement);
    });
    const carouselItems = document.querySelectorAll(".has-multiple");
    carouselItems.forEach(initializeCarousel);
  };
  
  const renderCategories = (cards) => {
    const categoriesContainer = document.getElementById("categories");
    const allCategories = new Set();
  
    // Collect all unique tags
    cards.forEach((card) => {
      card.tags.forEach((tag) => allCategories.add(tag));
    });
  
    // Convert Set to Array and sort categories
    const sortedCategories = ["all", ...Array.from(allCategories).sort()];
  
    // Generate category links
    categoriesContainer.innerHTML = sortedCategories
      .map((category) => `<a href="#" class="badge rounded-pill me-1 ${category === "all" ? "active" : ""}">${category.charAt(0).toUpperCase() + category.slice(1)}</a>`)
      .join("");
  };
  
  const initializeCarousel = (carouselItem) => {
    const images = carouselItem.querySelectorAll("img");
    let currentIndex = 0;
  
    const prevButton = document.createElement("button");
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevButton.addEventListener("click", (e) => {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel(carouselItem, images, currentIndex);
    });
  
    const nextButton = document.createElement("button");
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextButton.classList.add("bubble", "end-0");
    nextButton.addEventListener("click", (e) => {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel(carouselItem, images, currentIndex);
    });
  
    carouselItem.appendChild(prevButton);
    carouselItem.appendChild(nextButton);
  
    const updateCarousel = (carouselItem, images, currentIndex) => {
      images.forEach((image, index) => {
        image.style.transform = `translateX(${index - currentIndex}00%)`;
      });
    };
  };
  
  const searchCards = (cards, searchTerm) => {
    return cards.filter((card) => {
      return (
        card.title.toLowerCase().includes(searchTerm) ||
        card.description.toLowerCase().includes(searchTerm) ||
        card.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
      );
    });
  };
  
  const filterCardsByCategory = (cards, category) => cards.filter((card) => card.tags.includes(category));
  
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    const selectedCategory = document
      .querySelector(".categories .active")
      .textContent.toLowerCase()
      .trim();
  
    let filteredCards =
      selectedCategory !== "all"
        ? filterCardsByCategory(data.cards, selectedCategory)
        : data.cards;
  
    filteredCards = searchCards(filteredCards, searchTerm);
  
    renderCards(cardsContainer, filteredCards);
  };
  
  const handleCategoryClick = (event) => {
    event.preventDefault();
    const category = event.target.textContent.toLowerCase();
  
    const categoryLinks = document.querySelectorAll(".categories a");
    categoryLinks.forEach((link) => link.classList.remove("active"));
  
    event.target.classList.add("active");
  
    let filteredCards =
      category === "all"
        ? data.cards
        : filterCardsByCategory(data.cards, category);
  
    const searchTerm = document.querySelector('input[type="search"]').value.toLowerCase().trim();
    filteredCards = searchCards(filteredCards, searchTerm);
  
    renderCards(cardsContainer, filteredCards);
  };
  
  
  const data = {
    cards: [
      {
        title: "Reindeer in the Snow",
        description: "A lone reindeer stands against the snowy landscape, showcasing winter's quiet beauty.",
        tags: ["wildlife", "nature", "reindeer", "winter"],
        cover: [
          "https://images.pexels.com/photos/16171422/pexels-photo-16171422/free-photo-of-portrait-of-reindeer-with-antlers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        date: "October 18, 2024"
      },
      {
        title: "Finnish Forest Reindeer",
        description: "A reindeer roams through the Finnish forest, blending with the northern wilderness.",
        tags: ["forest", "reindeer", "finnish wilderness", "wildlife"],
        cover: [
          "https://images.pexels.com/photos/3868813/pexels-photo-3868813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/19769338/pexels-photo-19769338/free-photo-of-finnish-forest-reindeer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/11020223/pexels-photo-11020223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        date: "October 16, 2024"
      },
      {
        title: "Buck Amongst the Pines",
        description: "A proud buck stands still in the winter forest, exuding peaceful solitude.",
        tags: ["winter", "wildlife", "reindeer", "peaceful"],
        cover: [
          "https://images.pexels.com/photos/17838643/pexels-photo-17838643/free-photo-of-buck-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        date: "October 18, 2024"
      }
    ]
  };
  
  
  const cardsContainer = document.getElementById("cards-container");
  const searchInput = document.querySelector('input[type="search"]');
  const categoryLinks = document.querySelectorAll(".categories");
  
  renderCards(cardsContainer, data.cards);
  renderCategories(data.cards);
  
  searchInput.addEventListener("input", handleSearch);
  
  categoryLinks.forEach((link) =>
    link.addEventListener("click", handleCategoryClick)
  );
  

})
