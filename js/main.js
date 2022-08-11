$(document).ready(function () {
    fullPageScroll();
    carousel();
    tooglePresseDetails();
    slimLogo();
    searchAgenda();
    prevNextAnnee()



    $(".go_down-link").click(function (e) {
        e.preventDefault();
        fullpage_api.moveSectionDown();
    });

    function prevNextAnnee() {
        $('.next-annee').click(function (event) {
            console.log(1);
            event.preventDefault();


        });
    }

    function slimLogo() {
        var logo = $('header .logo');
        var header = $('header');
        $(window).scroll(function () {
            if ($(window).scrollTop() > 20) {
                logo.addClass('slim');
                header.addClass('slim');
            } else {
                logo.removeClass('slim');
                header.removeClass('slim');

            }
        });
    }



    function fullPageScroll() {
        // if ($(window).width() < 780) {
        //     $('#fullpage').removeAttr('id');
        // }
        $('#fullpage').fullpage({
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['NextA', 'Axian Group', '7 piliers', 'Espace', 'Tarif', 'Nos incubés', 'Nos partenaires', 'Presse et actus', 'Nous écrire', 'Où nous trouver?'],
            showActiveTooltip: true,
            v2compatible: false,
            responsiveWidth: 990,
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            onSlideLeave: function (section, origin, destination) {
                console.log('<p>onSlideLeave - section:' + section.index + ' origin:' + origin.index + ' destination:' + destination.index + '</p>');
                if ((section.index == 7) && (origin.index == 0) && (destination.index == 1)) {
                    fullpage_api.setAllowScrolling(false);
                } else {
                    fullpage_api.setAllowScrolling(true);
                }
            },
        });
        $('.card-header').click(function () {
            $('.card-header').removeClass('active');
            $(this).addClass('active');
        });
        $('.fp-tooltip').click(function (e) {
            $(this).closest('li').find('a')[0].click();
        });
    }

    function tooglePresseDetails() {
        $("article.swiper-slide").click(function () {
            fullpage_api.moveTo('Presse et actualité', 1);
        });
        $(".close-presse_details").click(function () {
            closePresseDetails();
        });
    }

    function carousel() {
        new Swiper('.apropos-carousel', {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 6000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1180: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1023: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                780: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },

                280: {
                    slidesPerView: 1,
                    spaceBetween: 30
                }

            }
        });

        new Swiper('.tarifs-carousel', {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1180: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1023: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                780: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },

                280: {
                    slidesPerView: 1,
                    spaceBetween: 30
                }
            }
        });

        $(".partner-carousel").owlCarousel({
            'items': 3,
            'autoplay': 5000,
        });

        $(".news-carousel").owlCarousel({
            'items': 3,
            'owl-nav': true,
            'margin': 50,
            'responsive': {
                768: {
                    'items': 2,
                    'margin': 30,
                },
                1024: {
                    'items': 3,
                }
            }
        });

        new Swiper('.presse-info_slider', {
            slidesPerView: 1,
            grabCursor: true,
            loop: true,
            centeredSlides: true,
            keyboard: true,
            spaceBetween: 0,
            speed: 300,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 3,
                slideShadows: false
            },
            pagination: {
                el: 'incubee-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }


    var presse_swiper = new Swiper('.presse-swiper', {
        slidesPerView: 3,
        spaceBetween: 50,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                var num = index + 1;
                if (index < 10) {
                    num = '0' + (index + 1);
                }
                return '<span class="' + className + '"><span>' + num + '</span><i class="tiret"></i></span>';
            },
        },
        breakpoints: {
            1700: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            // 1023: {
            //     slidesPerView: 3,
            //     spaceBetween: 30
            // },
            780: {
                slidesPerView: 2,
                spaceBetween: 30
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            280: {
                slidesPerView: 1,
                spaceBetween: 30
            }
        }
    });




    // Agenda

    function searchAgenda() {
        var $searchTrigger = $('[data-ic-class="search-trigger"]'),
            $searchInput = $('[data-ic-class="search-input"]'),
            $searchClear = $('[data-ic-class="search-clear"]');

        $searchTrigger.click(function () {
            var $this = $('[data-ic-class="search-trigger"]');
            $this.addClass('active');
            $searchInput.focus();

        });

        $searchInput.blur(function () {

            if ($searchInput.val().length > 0) {

                return false;

            } else {

                $searchTrigger.removeClass('active');

            }

        });

        $searchClear.click(function () {
            $searchInput.val('');
        });

        $searchInput.focus(function () {
            $searchTrigger.addClass('active');
        });

    }



});


// function openPresseDetails() {
//     var popup = $('#popup-presse');

//     if ($(window).width() < 780) {
//         popup.addClass('show');
//     }
//     else if ($(window).width() > 780) {
//         $(".logo").hide("slow");
//         $(".fp-tooltip").hide("slow");
//         $(".agenda-link").addClass('slim');
//         $(".presse-details").addClass("show");
//         fullpage_api.moveTo(8, 1);
//     }
// }

// function closePresseDetails() {
//     var popup = $('#popup-presse');
//     if ($(window).width() < 780) {
//         popup.removeClass('show');
//     }
//     else if ($(window).width() > 780) {
//         $(".logo").show("slow");
//         if ($(window).width() > 1366) {
//             $(".fp-tooltip").show("slow");
//         }
//         $(".agenda-link").removeClass('slim');
//         $(".presse-details").removeClass("show");
//         fullpage_api.moveTo(8, 0);
//     }
// }

// agenda
function openConditions() {
    $('#inscription-form').hide();
    $('#conditions').fadeIn(1000);
}

function closeConditions() {
    $('#inscription-form').fadeIn(1000);
    $('#conditions').hide();
}
// agenda