$(".search").click(function(){
    $("#search-part").slideDown()
});
$(".close").click(function(){
    $("#search-part").slideUp()
});

$(window).scroll(function(){
    if($(window).scrollTop() > 110){
        $(".menu").addClass("fixed-menu")
    }else{
        $(".menu").removeClass("fixed-menu")
    }

    if($(window).scrollTop() > 300){
        $(".back-to-top").fadeIn()
    }else{
        $(".back-to-top").fadeOut()
    }
});


$(".slider-main").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '0',
    autoplay: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
      
});

$('.venobox').venobox();

$(".service-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '0',
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    prevArrow: '<i class="fa fa fa-chevron-up up"><i/>',
    nextArrow: '<i class="fa fa fa-chevron-down down"><i/>',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]    

});


$(".image-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '0',
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    prevArrow: '<i class="fa fa fa-chevron-down down1"><i/>',
    nextArrow: '<i class="fa fa fa-chevron-up up1"><i/>',
    asNavFor:".details-slider",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          vertical: false,
          verticalSwiping: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]  

});

$(".details-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    autoplay: true,
    asNavFor:".image-slider",
    fade: true,
});

$(".counter").counterUp({
    delay: 5,
    time: 800,
});

$(".team-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ] 

});
$(".sponsor-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: '0',
    centerMode: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

});

$(".back-to-top").click(function(){
    $("html,body").animate({
        scrollTop:0
    },100)
});


// $('body').scrollspy({
//   target: '.navbar',
//   offset: 81
// });

var htmlBody = $('html, body');

//nave top js
var nav_navbar = $('nav.navbar'),
  $window = $(window),
  navOffset = nav_navbar.offset().top;

$('.nav-wrapper').height(nav_navbar.outerHeight());

$('ul.navbar-nav > li > a').on('click', function(){
  $('.navbar-collapse').removeClass('in');
  console.log('test');
});