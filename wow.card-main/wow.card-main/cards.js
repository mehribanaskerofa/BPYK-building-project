        // slider
        var swiper = new Swiper(".cardSwiper", {
            scrollbar: {
              el: ".swiper-scrollbar",
              // hide: true,
            },
          });
          function startAutoplay() {
            autoplayInterval = setInterval(nextSlide, autoplayDelay);
          }


