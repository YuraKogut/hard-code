let slider;

$(document).ready(function(){
	$('.your-class').on('init',function(event,slick){
		$('#text').html(slick.slideCount);
	});
//зверненян до слайду і задання йому параметрів

	slider = $('.your-class').slick({
		slidesToShow: 1,
		arrows: false,

	});

	slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		let count = slick.slideCount;
		$('#count').html(currentSlide+1);
	});
});







//код для переключення туди-сюди
$('#next').on('click',function(){
	slider.slick('slickNext');
})

$('#prev').on('click',function(){
	slider.slick('slickPrev');
})




//другий слайд
let slide;
//звернулись через init для того щоб поставити перелік
$(document).ready(function(){
	$('.your').on('init',function(event,slick){
		$('#txt').html(slick.slideCount);
	});
//зверненян до слайду і задання йому параметрів

	slide = $('.your').slick({
		slidesToShow: 3,
		arrows: false,
		 autoplay: true,
         autoplaySpeed: 2000,
		//розширення і параметри
		  responsive: [
    {
     breakpoint: 1130,
      settings: {
        slidesToShow: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 758,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

	});

	slide.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		let count = slick.slideCount;
		$('#coun').html(currentSlide+1);
	});
});

//код для переключення туди-сюди
$('#nxt').on('click',function(){
	slide.slick('slickNext');
})

$('#prv').on('click',function(){
	slide.slick('slickPrev');
})


//кнопка з меню
jQuery('.header-humb').on('click', function(){
	jQuery('.menu').toggleClass('opened');
})


//для появи чогось перед загрузкою сторінки

  $(window).on('load', function () {
    $preloader = $('.loaderArea'),
      $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(1000).fadeOut('slow');
  });



