$(document).ready(function(){

    // PARALLAX EFFECT
    $('.parallax').parallax();

    // SIDE MENU
    $(".button-collapse").sideNav();
    $(".button-collapse").sideNav({closeOnClick: true});

    /*========================================
    =                CAROUSEL                =
    ========================================*/
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      }, setTimeout(autoplay, 4500));

    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }

    $('#next').click(function(){
        $('.carousel').carousel('next');
    });

    $('#prev').click(function(){
        $('.carousel').carousel('prev');
    });
    /*=====       End of CAROUSEL      ======*/

    $('a.scroll').click(function(e){
		e.preventDefault();
	   $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    
    ScrollOut({
        targets: '.card'
    });

})

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
});

window.addEventListener('scroll',function(){
    var nav = this.document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});