// owl carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: false,
    autoplay: true,
    autoplayTimeout: 10000,

    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
    }
});