var testimonialSlider = new Swiper('.testimonialSlider', {
    speed: 700,
    spaceBetween: 30,
    slidesPerView: 2,
    loop: 'true',
    loopAdditionalSlides: 2,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        // when window width is <= 767px
        767: {
            slidesPerView: 1,
            spaceBetween: 10
        },
    }
});