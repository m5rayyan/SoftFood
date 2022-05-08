// Start Main Carousel 

$('.owl-carousel.main-owl').owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    rtl: true,
    autoplay: true
        // autoHeight: true
});

// End Main Carousel 
// Start Categorys Carousel 
$('.owl-carousel.categorys-owl').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    // End Categorys Carousel 
    // Start Best Offers
$('.owl-carousel.best-offers-owl').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    // End Best Offers 



// Start Count Products
function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}
// End Count Products

// Start Cart
let Carts = document.querySelectorAll(".cart-icon-box");
Carts.forEach(function(ele) {
    ele.onclick = function() {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            this.classList.add("active");
        }
    };

});
// End Cart
// Start Categories Search 
var categories = document.querySelectorAll('.categories-search-title');

categories.forEach(function(ele) {
    ele.onclick = function() {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            this.classList.add("active");
        }
    };
});


// End Categories Search

// Start Range 
window.onload = function() {
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}

function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}

function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #D2973D ${percent1}% , #D2973D  ${percent2}%, #dadae5 ${percent2}%)`;
}
// End Range

// Start Alert
$('.add-to-cart').on('click', function(e) {
    e.preventDefault();
    swal("Oops", "Something went wrong!", "error")

})



// let addToCart = document.getElementsByClassName("add-to-cart");
// addToCart.forEach(function(ele) {
//     this.onclick = function sweetalertclick() {
//         Swal.fire({
//             title: 'Sweet!',
//             text: 'Modal with a custom image.',
//             imageUrl: 'https://unsplash.it/400/200',
//             imageWidth: 400,
//             imageHeight: 200,
//             imageAlt: 'Custom image',
//         })
//     }

// });
// End Alert