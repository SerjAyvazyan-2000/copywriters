



let creatingSwiper = new Swiper(".reviews-swiper", {
    effect: "coverflow",
    centeredSlides: true,
    observer: true,
    observeParents: true,
    cursor: null,
    loop: true,
    initialSlide: 2,
    speed: 500,
    loopAdditionalSlides: 3,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },

    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 60,
        modifier:2,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
    },
    breakpoints: {

        320: {
            slidesPerView: 2.7,
        },
        430: {
            slidesPerView:3,
        },
        540: {
            slidesPerView: 2.7,
            spaceBetween:22,

        },
        579: {
            slidesPerView: 2.7,
            spaceBetween:26,

        },
        997: {
            slidesPerView: 4,

        },

        1027: {
            slidesPerView: 4,

        },
        1200: {
            slidesPerView: 4,
            spaceBetween:40,
        },
    }

});

// const slides = document.querySelectorAll(".reviews-swiper .swiper-slide");
//
// slides.forEach((slide, index) => {
//     slide.addEventListener("click", () => {
//         creatingSwiper.slideTo(index);
//     });
// });

document.querySelector('.swiper-pagination').addEventListener('click', () => {
    setTimeout(() => {
        creatingSwiper.update();
    }, 50);
});

creatingSwiper.on("slideChange", function () {
    updateActiveText();
});

function updateActiveText() {
    const activeSlide = document.querySelector(".swiper-slide-active");
    if (!activeSlide) return;

    const activeImg = activeSlide.querySelector(".reviews-slide");
    if(activeImg){
        const activeId = activeImg.getAttribute("data-id");
        document.querySelectorAll(".reviews-slide-info").forEach((text) => {
            text.style.display = text.getAttribute("data-id") === activeId ? "block" : "none";
        });

    }



}
setTimeout(updateActiveText, 0);

creatingSwiper.on("transitionEnd", updateActiveText);