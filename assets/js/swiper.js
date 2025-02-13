



let creatingSwiper = new Swiper(".reviews-swiper", {
    effect: "coverflow",
    centeredSlides: true,
    // autoplay:true,
    cursor: null,
    loop: true,
    // initialSlide: 2,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 80,
        modifier:4,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
    },
    breakpoints: {

        320: {
            slidesPerView: 3,
        },
        430: {
            slidesPerView:3,
        },
        540: {
            slidesPerView: 3,
        },
        935: {
            slidesPerView: 3,

        },

        1027: {
            slidesPerView: 3,

        },
        1200: {
            slidesPerView: 3,
            spaceBetween:12,
        },
    }

});

const slides = document.querySelectorAll(".reviews-swiper .swiper-slide");

slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
        creatingSwiper.slideTo(index);
    });
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