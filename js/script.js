/* ===========================
           Preloader
=========================== */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ===========================
           Team
=========================== */
$(document).ready(function () {
    $("#team-right").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            }
        }
    });
});

/* ===========================
          Progress Bars
=========================== */
$(function () {
    $("#team").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 500);
        });
        this.destroy();
    });
}, { offset: 'bottom-in-view' });
/* ===========================
          Responsive Tabs
=========================== */
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});
/* ===========================
          Portfolito
=========================== */
$(window).on('load', function () {
    $("#isotope-container").isotope({});
    $("#isotope-filters").find(':button').first().addClass('active');
    $("#isotope-filters").on('click', 'button', function () {
        var filtersValue = $(this).attr("data-filter");
        $("#isotope-container").isotope({ filter: filtersValue });
        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/* ===========================
          Magnifier
=========================== */
$(function () {
    $("#portfolio").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })
});
/* ===========================
       Testimonial Slider
=========================== */
$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/* ===========================
            Counter
=========================== */
$(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});
/* ===========================
            Nav
=========================== */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $("nav").addClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            $("#back-to-top").fadeIn();
        } else {
            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            $("#back-to-top").fadeOut();
        }
    });
});
/* ===========================
        Smooth Scroll
=========================== */
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var sectionId = $(this).attr("href");
        console.log(sectionId)
        $("html, body").animate({ scrollTop: $(sectionId).offset().top - 30 }, 1250, "easeInOutExpo");
    });
});
/* ===========================
        Mobile Menu
=========================== */
$(function () {
    $("#mobile-nav-open-btn").click(function() {
        $("#mobile-nav").css("height","100%");

    });
    $("#mobile-nav-close-btn, #mobile-nav a").click(function(){
        $("#mobile-nav").css("height","0%");
    });
});
/* ===========================
           Animation
=========================== */
$(function () {
    new WOW().init();
});
$(window).on('load', function () {
    $('#home-heading-1').addClass("animated fadeInDown");
    $('#home-heading-2').addClass("animated fadeInLeft");
    $('#home-text').addClass("animated zoomIn");
    $('#home-btn').addClass("animated zoomIn");
    $('#arrow-down i').addClass("animated fadeInDown infinite")


});