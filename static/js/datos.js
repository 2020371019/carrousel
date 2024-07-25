document.addEventListener("DOMContentLoaded", function() {
    cargadatos(); 
});

function cargadatos() {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            console.log(products);
            let carrouselInner = document.getElementById("carrousel");
            carrouselInner.innerHTML = ""; 

            products.forEach((product, index) => {
                let carouselItem = document.createElement("div");
                carouselItem.className = "carousel-item" + (index === 0 ? " active" : "");

                let card = document.createElement("div");
                card.className = "card text-center";

                let img = document.createElement("img");
                img.src = product.image;
                img.className = "card-img-top";
                img.alt = product.title;
                img.dataset.id = product.id;

                let cardBody = document.createElement("div");
                cardBody.className = "card-body";

                let titleDiv = document.createElement("h5");
                titleDiv.className = "card-title";
                titleDiv.textContent = product.title;

                let precDiv = document.createElement("p");
                precDiv.className = "card-text";
                precDiv.textContent = `$${product.price}`;

                let categoryDiv = document.createElement("p");
                categoryDiv.className = "card-text";
                categoryDiv.textContent = product.category;

                cardBody.appendChild(titleDiv);
                cardBody.appendChild(precDiv);
                cardBody.appendChild(categoryDiv);
                card.appendChild(img);
                card.appendChild(cardBody);
                carouselItem.appendChild(card);
                carrouselInner.appendChild(carouselItem);
            });

            initializeCarousel();
        })
        .catch(error => {
            console.error("Error en la petición fetch: ", error);
        });
}

function initializeCarousel() {
    let carouselElement = document.querySelector('#carouselExampleDark');
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

    showItem(currentIndex);
}
