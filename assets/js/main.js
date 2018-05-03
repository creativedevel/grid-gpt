

$(document).ready(function() {
	// headline
	// $('.js-hl-big').slick({
	//     autoplay: true,
	//     slidesToShow: 1,
	//     autoplaySpeed: 100,
 //        infinite: true,
 //        // fade: true,
 //        arrows: true,
 //        cssEase: 'ease',
	// });
    $('.js-hl-big').slick({
        // autoplay: true,
        slidesToShow: 1,
        autoplaySpeed: 10000,
        pauseOnFocus: true,
        accessibility: true,
        dots: true,
        fade: true,
        arrows: true,
        cssEase: 'ease',
    });
	// scroll
    $(window).scroll(function () {
        var scrollpos = $(window).scrollTop();
        var hblock = $('header').outerHeight() + $('.header__wrapper').outerHeight();
        var navsticky = $('.mainmenu').outerHeight();

        // scroll header
        if(scrollpos > hblock + 40) {
            $('.header__wrapper').addClass('fixed');
            
            $('.header__outer').css({
                'height': '264px',
                'background': '$cl_navy',
            });
            $('.logo__item--small').css({
                'display':'block',
            });
            $('.logo__item--big').css({
                'display':'none',
            });
            $('.logo__circle').css({
                'display':'none',
            });
            $('.js-ads-stick').addClass('ads__stick--sticky');
            
        } else {
            $('.header__wrapper').removeClass('fixed');
            $('.header__outer').css({
                'height': '0px',
                'background': 'none',
            });
             $('.logo__item--small').css({
                'display':'none',
            });
            $('.logo__item--big').css({
                'display':'block',
            });
            $('.logo__circle').css({
                'display':'block',
            });
            $('.js-ads-stick').removeClass('ads__stick--sticky');       
        }
        // console.log(scrollpos);
        // console.log(hblock);
    });


    // close ads horizontal
    $('.js-ads-horizontal').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('.ads__horizontal').hide();
    });

// sticky skyscraper
    $(".js-skyscraper").stick_in_parent({
        parent: ".js-gallery",
        inner_scrolling: false,
        spacer: false,
        offset_top: 77,
    }).on('sticky_kit:bottom', function(e) {
        // console.log('stuck');
        $(this).parent().parent().css('position', 'static');
    }).on('sticky_kit:unbottom', function(e) {
        // console.log('unstuck');
        $(this).parent().parent().removeAttr('style');
        // $(this).parent().css('position', 'relative');
    });


$(window).scroll(function () {
        var scrollpos = $(window).scrollTop();
        var hblock = $('header').outerHeight() + $('.header__wrapper').outerHeight();

        // scroll header
        if(scrollpos > hblock + 40) {
            $('.js-nkt-stick').addClass('nkt__stick--sticky')
        } else {
            $('.js-nkt-stick').removeClass('nkt__stick--sticky')
        }
        // console.log(scrollpos);0
        // console.log(hblock);
    });
	
});