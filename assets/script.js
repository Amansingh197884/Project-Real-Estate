

// animation js start
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    mirror: true,
    anchorPlacement: 'top-center',
});

// animation js end



    var swiper = new Swiper(".mySwiperban", {
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade', 
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
