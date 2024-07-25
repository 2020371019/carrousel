$(document).ready(function () {
    cargadatos(); 
   
});

function initializeCarousel() {
    var carouselElement = $('#carouselExampleControls');
    var prevButton = carouselElement.find('.carousel-control-prev');
    var nextButton = carouselElement.find('.carousel-control-next');
    var items = carouselElement.find('.carousel-item');
    var currentIndex = 0;

    function showItem(index) {
        items.removeClass('active').eq(index).addClass('active');
    }

    prevButton.click(function() {
        currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
        showItem(currentIndex);
    });

    nextButton.click(function() {
        currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
        showItem(currentIndex);
    });

    showItem(currentIndex); // Initialize the carousel with the first item
}

function cargadatos() {
    $.ajax({
        url: "https://fakestoreapi.com/products",
        method: "GET",
        dataType: "json"
    })
    .done(function(products) {
        console.log(products);
        var carrouselInner = $("#carrousel");
        carrouselInner.empty(); // Clear previous items
        
        $.each(products, function(index, product) {
            var carouselItem = $('<div class="carousel-item' + (index === 0 ? ' active' : '') + '"></div>');
            
            var img = $('<img>', {
                src: product.image,
                class: "d-block w-100",
                alt: product.title
            });

            var titleDiv = $('<div>').text(product.title);
            var precio = $('<div>').text(product.price);
            var categoria =$('<div>').text(product.category);

            carouselItem.append(categoria).append(titleDiv).append(precio).append(img);
            carrouselInner.append(carouselItem);
        });

        initializeCarousel();
    })
    .fail(function(error) {
        console.error("Error en la petición AJAX: ", error);
    });
}
