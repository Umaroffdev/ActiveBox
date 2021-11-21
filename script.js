$(document).ready(function () {

    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    header.addClass("fixed");

    /* Smooth scroll */
    $("[data-scroll").on("click", function(event) {

        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        console.log(elementOffset);

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 500);

    });

    /* Nav Toggle */
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    /* Reviews: */
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slideToShow: 1,
        slideToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});