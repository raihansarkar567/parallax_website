$(document).ready(function() {
	   $(function(){
 var shrinkHeader = .1;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('header').addClass('shrink');
           $('.bg-1st-content').removeClass('hidden');
           $('.service-box').removeClass('hide');
        }
        else {
            $('header').removeClass('shrink');
            $('.bg-1st-content').addClass('hidden');
            $('.service-box').addClass('hide');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});

     // service content

     $(function(){
 var shrinkHeader = 250;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.service-box').removeClass('hide');
        }
        else {
            $('.service-box').addClass('hide');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
})
     // 1st background image parallax
     $(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $(".parallax-zoom-blur img").css({
    width: (100 + scroll/5)  + "%",
    top: -(scroll/10)  + "%",
    //Blur suggestion from @janwagner: http://codepen.io/janwagner/ in comments
    "-webkit-filter": "blur(" + (scroll/100) + "px)",
    filter: "blur(" + (scroll/100) + "px)"
  });
});
     // Toshar animate bg
     $(function(){
    
      $('#midground').css({backgroundPosition: '0px 0px'});
      $('#foreground').css({backgroundPosition: '0px 0px'});
    
      $('#midground').animate({
        backgroundPosition:"(-10000px -2000px)"
      }, 240000, 'linear');
      
      $('#foreground').animate({
        backgroundPosition:"(-10000px -2000px)"
      }, 120000, 'linear');
      
    });


     // landing icone

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  

  if(wScroll > $('.icon-div').offset().top - ($(window).height() / 1.5)) {

    $('.icon-div .icon').each(function(i){

      setTimeout(function(){
        $('.icon-div .icon').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });

  }


  if(wScroll > $('.about').offset().top - ($(window).height() / 1.5)) {

    $('.about .about-text').each(function(i){

      setTimeout(function(){
        $('.about .about-text').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });

  }

});

// footer parallax

$('.footer-bg').scrolly({bgParallax: true});





});