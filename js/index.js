const swiper_mmy = new Swiper('#testimonials', {
    speed: 2000,

    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 5000,
    },
    loop: true,
    grabCursor: true,
    autoplayDisableOnInteraction: true,

    // effect: 'slide'

    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 24,
        }
    }
});