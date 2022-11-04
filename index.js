$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });  
});

/////////////
$(document).ready(function () {
    $('.slider-1').slick({
        slidesToShow: 4,
        arrows:false,   
        slidesToScroll: 2,
        autoplay: true,
        infinite:true,
        autoplaySpeed: 2000,
    });
});