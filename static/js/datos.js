document.addEventListener("DOMContentLoaded", function() {
    cargadatos(); // Call the function to load data
});

function cargadatos() {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            console.log(products);
            let carrouselInner = document.getElementById("carrousel");
            carrouselInner.innerHTML = ""; // Clear previous items

            products.forEach((product, index) => {
                let carouselItem = document.createElement("div");
                carouselItem.className = "carousel-item" + (index === 0 ? " active" : "");

                let img = document.createElement("img");
                img.src = product.image;
                img.className = "d-block w-100";
                img.alt = product.title;
                img.dataset.id = product.id; // Set data-id attribute for the product ID

                let titleDiv = document.createElement("div");
                titleDiv.textContent = product.title;
                let precDiv = document.createElement("div");
                precDiv.textContent = product.price;
                let categoryDiv = document.createElement("div");
                categoryDiv.textContent = product.category;

                carouselItem.appendChild(categoryDiv);
                carouselItem.appendChild(titleDiv);
                carouselItem.appendChild(precDiv);
                carouselItem.appendChild(img);
                carrouselInner.appendChild(carouselItem);
            });

            initializeCarousel();
        })
        .catch(error => {
            console.error("Error en la petición fetch: ", error);
        });
}

function initializeCarousel() {
    let carouselElement = document.querySelector('#carouselExampleControls');
    let prevButton = carouselElement.querySelector('.carousel-control-prev');
    let nextButton = carouselElement.querySelector('.carousel-control-next');
    let items = carouselElement.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
        showItem(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
        showItem(currentIndex);
    });

    // Add click event listener to images
    carouselElement.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            let productId = event.target.dataset.id;
            window.location.href = `/again/inicio/product/${productId}`;
        }
    });

    showItem(currentIndex); // Initialize the carousel with the first item
}
