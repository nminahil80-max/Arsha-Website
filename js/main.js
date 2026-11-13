
document.addEventListener("DOMContentLoaded", function () {

    // =================================
    // 1. PORTFOLIO FILTERING (ISOTOPE)
    // =================================

    const portfolioContainer = document.querySelector(".portfolio-container");

    if (portfolioContainer && typeof Isotope !== "undefined") {

        const iso = new Isotope(portfolioContainer, {
            itemSelector: ".portfolio-item",
            layoutMode: "masonry"
        });

        // Portfolio filter buttons
        const filters = document.querySelectorAll("#portfolio-filters li");

        filters.forEach(function (filter) {

            filter.addEventListener("click", function () {

                filters.forEach(function (item) {
                    item.classList.remove("filter-active");
                });

                this.classList.add("filter-active");

                const filterValue = this.getAttribute("data-filter");

                iso.arrange({
                    filter: filterValue
                });

            });

        });

        // Refresh Isotope after images load
        if (typeof imagesLoaded !== "undefined") {

            imagesLoaded(portfolioContainer, function () {
                iso.layout();
            });

        }

    }


    // =================================
    // 2. PORTFOLIO IMAGE LIGHTBOX
    // =================================

    if (typeof GLightbox !== "undefined") {

        GLightbox({
            selector: ".portfolio-lightbox"
        });

    }


    // =================================
    // 3. TESTIMONIALS SLIDER (SWIPER)
    // =================================

    const testimonialElement = document.querySelector(".testimonial-swiper");

    if (testimonialElement && typeof Swiper !== "undefined") {

        new Swiper(testimonialElement, {

            loop: true,
            speed: 600,
            slidesPerView: 3,
            spaceBetween: 24,

            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },

            pagination: {
                el: testimonialElement.querySelector(".swiper-pagination"),
                clickable: true
            },

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },

                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },

                992: {
                    slidesPerView: 3,
                    spaceBetween: 24
                }
            }

        });

    }


    // =================================
    // 4. NEWSLETTER FORM
    // =================================

    const newsletterForm = document.getElementById("newsletterForm");
    const newsletterMessage = document.getElementById("newsletterMessage");

    if (newsletterForm && newsletterMessage) {

        newsletterForm.addEventListener("submit", function (event) {

            event.preventDefault();

            newsletterMessage.textContent = "Thank you for subscribing!";
            newsletterMessage.style.color = "#198754";

            newsletterForm.reset();

        });

    }


    // =================================
    // 5. FOOTER NEWSLETTER FORM
    // =================================

    const footerNewsletterForm = document.getElementById("footerNewsletterForm");
    const footerNewsletterMessage = document.getElementById("footerNewsletterMessage");

    if (footerNewsletterForm && footerNewsletterMessage) {

        footerNewsletterForm.addEventListener("submit", function (event) {

            event.preventDefault();

            footerNewsletterMessage.textContent = "Thank you for subscribing!";
            footerNewsletterMessage.style.color = "#198754";

            footerNewsletterForm.reset();

        });

    }

// Clients Slider
new Swiper(".clients-slider", {
    loop: true,
    speed: 600,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    slidesPerView: 2,
    spaceBetween: 30,

    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 50
        }
    }
});
});
