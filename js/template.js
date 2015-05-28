/*
 * Bavely v1.0
 * Design_mylife
 */



/**smooth scroll on anchor tag****/
$(document).ready(function() {
    $(function() {
        $('.scroll-to a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});


/* -------------------
 Parallax Sections
 ---------------------*/
if (!Modernizr.touch) {
    $('.parallax-1').parallax("50%", 0.5);
    $('.parallax-2').parallax("50%", 0.5);
    $('.parallax-3').parallax("50%", 0.5);
    $('.parallax-4').parallax("50%", 0.5);
    $('.parallax-bg').parallax("50%", 0.5);
    $('.intro-banner').parallax("50%", 0.5);
}
/*----------------
 Auto Close Navbar
 -----------------*/
$(document).ready(function() {
    function close_toggle() {
        if ($(window).width() <= 992) {
            $('.navbar-collapse a').on('click', function() {
                $('.navbar-collapse').collapse('hide');
            });
        } else {
            $('.navbar .navbar-default a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);
    $(".navbar-collapse").css({
        maxHeight: $(window).height() - $(".navbar-header").height() + "px"
    });
    $(function() {
        $('.navbar-toggle').bind('click', function(event) {
            var $anchor = $('.navbar-header');
            $('html, body').stop().animate({
                scrollTop: $($anchor).offset().top - 0
            }, 800, 'swing');
            event.preventDefault();
        });
    });
});
//flex slider for testimonials
$(document).ready(function() {
    $(window).load(function() {
        $('.testi-slider').flexslider({
            animation: "slide",
            direction: "vertical",
            prevText: "<i class='ion-android-arrow-back'></i>",
            nextText: "<i class='ion-android-arrow-forward'></i>"
        });
    });
});
//flex slider for blog image slider
$(document).ready(function() {
    $(window).load(function() {
        $('.blog-slider').flexslider({
            animation: "fade",
            slideshowSpeed: 4000,
            controlNav: false,
            prevText: "<i class='ion-android-arrow-back'></i>",
            nextText: "<i class='ion-android-arrow-forward'></i>"
        });
    });
});
//flex slider for home parallax text slider
$(document).ready(function() {
    $(window).load(function() {
        $('#home-slider').flexslider({
            animation: "fade",
            slideshow: true,
            slideshowSpeed: 3500,
            animationDuration: 500,
            directionNav: false,
            controlNav: true,
            smootheHeight: true
        });
    });
});

// photo popups

$(document).ready(function() {
    var items1 = [{
        src: 'img/swaha-1.jpeg',
        title: 'Swaha<small>of HJ Holdings LLC</small>'
    }, {
        src: 'img/swaha-2.jpeg',
        title: 'Swaha<small>of HJ Holdings LLC</small>'
    }, {
        src: 'img/swaha-3.jpeg',
        title: 'Swaha<small>of HJ Holdings LLC</small>'
    }, {
        src: 'img/swaha-4.jpeg',
        title: 'Swaha<small>of HJ Holdings LLC</small>'
    }];
    var items2 = [{
        src: 'img/qsales-1.jpg',
        title: 'QSales<small>of Qittitut Consulting</small>'
    }, {
        src: 'img/qsales-2.jpg',
        title: 'QSales<small>of Qittitut Consulting</small>'
    }, {
        src: 'img/qsales-3.jpg',
        title: 'QSales<small>of Qittitut Consulting</small>'
    }, {
        src: 'img/qsales-4.jpg',
        title: 'QSales<small>of Qittitut Consulting</small>'
    }];
    var items3 = [{
        src: 'img/fefe-1.jpg',
        title: 'FEFE'
    }, {
        src: 'img/fefe-2.jpg',
        title: 'FEFE'
    }, {
        src: 'img/fefe-3.jpg',
        title: 'FEFE'
    }];

    var sources = [items1, items2, items3];
    for (i = 0; i < sources.length; i++) {
        $('.show-image:eq(' + i + ')').magnificPopup({
            mainClass: 'mfp-fade',
            type: 'image',
            gallery: {
                enabled: true
            },
            items: sources[i]
        });
    }
});



//  TWEETIE -  TWITTER FEED PLUGIN THAT WORKS WITH NEW Twitter 1.1 API
jQuery(document).ready(function() {

});



/* ==============================================
 Sticky Navbar
 =============================================== */

$(document).ready(function() {
    $(".sticky-nav").sticky({
        topSpacing: 0
    });
});



//on hover dropdown navigation
$(document).ready(function() {

    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();

});


//wow js
jQuery(document).ready(function() {
    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: true
    });
    wow.init();
});

//tooltip and popovers
jQuery(document).ready(function() {
    $("[data-toggle=popover]").popover();

    $("[data-toggle=tooltip]").tooltip();
});
