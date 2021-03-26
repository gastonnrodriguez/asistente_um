/*====Responsive menu======*/
(function ($) {
  $.fn.menumaker = function (options) {
    var cssmenu = $(this),
      settings = $.extend({
        format: "dropdown",
        sticky: false
      }, options);
    return this.each(function () {
      $(this).find(".button").on('click', function () {
        $(this).toggleClass('menu-opened');
        var mainmenu = $(this).next('ul');
        if (mainmenu.hasClass('open')) {
          if(mainmenu.css('display') == 'none')
          {
            mainmenu.show();
          }
          else{
            mainmenu.slideToggle().removeClass('open');
          }


        } else {
          mainmenu.slideToggle().addClass('open');

          if (settings.format === "dropdown") {
            mainmenu.find('ul').show();
          }
        }
      });
      cssmenu.find('li ul').parent().addClass('has-sub');
      multiTg = function () {
        cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
        cssmenu.find('.submenu-button').on('click', function () {
          $(this).toggleClass('submenu-opened');
          if ($(this).siblings('ul').hasClass('open')) {
            $(this).siblings('ul').removeClass('open').slideToggle();
          } else {
            $(this).siblings('ul').addClass('open').slideToggle();
          }
        });
      };
      if (settings.format === 'multitoggle') multiTg();
      else cssmenu.addClass('dropdown');
      if (settings.sticky === true) cssmenu.css('position', 'fixed');
      resizeFix = function () {
        var mediasize = 1200;

        if ($(window).width() > mediasize) {
          cssmenu.find('ul').show();
        }
        if ($(window).width() <= mediasize) {

          if($(this).find(".button").hasClass('menu-opened')){

          }
          else{

              // Cierra menu
              cssmenu.find('ul').hide().removeClass('open');

              // Cierra los hijos si hay scroll
              cssmenu.find('.submenu-button').removeClass('submenu-opened');
              if (cssmenu.find('.submenu-button').siblings('ul').hasClass('open')) {
                cssmenu.find('.submenu-button').removeClass('open').slideToggle();
              }

          }

        }


      };
      resizeFix();
      return $(window).on('resize', resizeFix);
    });
  };
})(jQuery);

(function ($) {
  $(document).ready(function () {
    $("#cssmenu").menumaker({
      format: "multitoggle"
    });
  });
})(jQuery);


/*====home slider======*/
var index = 1;
showSlide(index);

function plusSlides(x) {
  showSlide(index += x);
}

function currentSlide(x) {
  showSlide(index = x);
}

function showSlide(x) {
  /*var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (x > slides.length) {
    index = 1;
  }
  if (x < 1) {
    index = slides.length;
  }
  for (let i = 0; i < slides.length; i++)
    slides[i].style.display = "none";
  for (let i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace(" active", "");
  slides[index - 1].style.display = "block";
  dots[index - 1].className += " active";*/
}

(function ($) {
  var $item = $("#mycarousel .item");
  var $wHeight = $(window).height();
  $item.eq(0).addClass("active");
  $item.height($wHeight);
  $item.addClass("full-screen");

  $("#mycarousel img").each(function () {
    var $src = $(this).attr("src");
    var $color = $(this).attr("data-color");
    $(this).parent().css({
      "background-image": "url(" + $src + ")",
      "background-color": $color
    });
    $(this).remove();
  });

  $(window).on("resize", function () {
    $wHeight = $(window).height();
    $item.height($wHeight);
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > "20") {
      $(".navbar-default").addClass("nav-white");
    } else if (scroll < "20") {
      $(".navbar-default").removeClass("nav-white");
    }
  });


  $(document).ready(function ($) {
    var scroll = $(window).scrollTop();
    if (scroll > "20") {
      $(".navbar-default").addClass("nav-white");
    } else if (scroll < "20") {
      $(".navbar-default").removeClass("nav-white");
    }
    $(".cssmenu-resp .button").on("click", function () {

      $(this).toggleClass("menu-opened");
      if ($(".cssmenu-resp .nav-small").hasClass("open")) {

          $(".cssmenu-resp .nav-small").removeClass("open").slideToggle();

      } else {

         $(".cssmenu-resp .nav-small").addClass("open").css('display', 'block');

      }
    });
    //carrusel en profesores x carreras
    $(".owl-carousel-profesores").slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 500,
      speed: 2000,
      dots: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev pull-left"><span class="icon icon-arrow-left"><i class="fa fa-long-arrow-left"></i></span></button>',
      nextArrow: '<button type="button" class="slick-next pull-right"><span class="icon icon-arrow-right"><i class="fa fa-long-arrow-right"></i></span></button>',
      dotsClass: "owl-dots slick-dots",
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 478,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
      ]
    });
    //carrusel en profesores(visitantes)
    $(".owl-carousel-visitante").slick({
      infinite: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 500,
      speed: 2000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev pull-left"><span class="icon icon-arrow-left"><i class="fa fa-long-arrow-left"></i></span></button>',
      nextArrow: '<button type="button" class="slick-next pull-right"><span class="icon icon-arrow-right"><i class="fa fa-long-arrow-right"></i></span></button>',
      dotsClass: "owl-dots slick-dots",
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 478,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
      ]
    });

    $("#carousel-gallery .views-field-field-imagenes .field-content").slick({
      infinite: true,
      dots: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 500,
      prevArrow: '<button type="button" class="slick-prev pull-left"><span class="icon icon-arrow-left"><i class="fa fa-long-arrow-left"></i></span></button>',
      nextArrow: '<button type="button" class="slick-next pull-right"><span class="icon icon-arrow-right"><i class="fa fa-long-arrow-right"></i></span></button>',
      dotsClass: "owl-dots slick-dots",
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            dots: false
          }
        },
      ]
    });
    //agregando clase active al primer elemento del menu que aparece debajo del slide
    $(".region-silder nav ul.menu li:first-child").addClass("active");

    //enlaces anclados
    var hash = window.location.hash;
    if (hash.length > 1) {

      if (hash === '#capellania') {
        jQuery('html, body').animate({
          scrollTop: jQuery('#capellania').offset().top - 100
        }, 1000);
      }
      if (hash === '#deportes') {
        jQuery('html, body').animate({
          scrollTop: jQuery('#deportes').offset().top - 100
        }, 1000);
      }
      if (hash === '#desarrollo-profesional') {
        jQuery('html, body').animate({
          scrollTop: jQuery('#desarrollo-profesional').offset().top - 100
        }, 1000);
      }
      if (hash === '#voluntariado') {
        jQuery('html, body').animate({
          scrollTop: jQuery('#voluntariado').offset().top - 100
        }, 1000);
      }
    }
//para abrir los accordion de los botones(si le quitas la coma no funciona)
    if (jQuery('body').hasClass('page-node-type-page') && jQuery('#botones-colabsables').hasClass('colabsable')) {
      let id = window.location.href.split("#")[1];
      let num_id = id.split("-")[1];
      jQuery("#" + num_id).attr("aria-expanded", "true");
      jQuery("#collapseb-" + num_id).addClass("in");
      jQuery([document.documentElement, document.body]).animate({
        scrollTop: jQuery('#' + id).offset().top - 250
      }, 500);
    }

    $(".region-buscar .views-exposed-form .form--inline .form-actions").click(function () {
      $("#views-exposed-form-busqueda-page-1").submit();
    });
    $('html[lang="es"] #search-block-form .form-search').attr("placeholder", "Buscar...");
    $('html[lang="en"] #search-block-form .form-search').attr("placeholder", "Search...");
  });

  $(".animated").each(function () {
    $(this).appear(function () {
      var element = $(this);

      var animation = element.attr("data-animation");
      if (!element.hasClass("visible")) {
        var animationDelay = element.attr("data-animation-delay");
        setTimeout(function () {
          element.addClass(animation + " visible");
        }, animationDelay);
      }
    });
  });

  $(".owl-carousel-actividades").slick({
    infinite: false,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev pull-left"><span class="icon icon-arrow-left"><i class="fa fa-long-arrow-left"></i></span></button>',
    nextArrow: '<button type="button" class="slick-next pull-right"><span class="icon icon-arrow-right"><i class="fa fa-long-arrow-right"></i></span></btton>',
    speed: 1000,
    dotsClass: "owl-dots slick-dots",
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
    ]
  });

  $(".owl-carousel-centros").slick({
    infinite: false,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev pull-left"><span class="icon icon-arrow-left"><i class="fa fa-long-arrow-left"></i></span></button>',
    nextArrow: '<button type="button" class="slick-next pull-right"><span class="icon icon-arrow-right"><i class="fa fa-long-arrow-right"></i></span></button>',
    speed: 1000,
    dotsClass: "owl-dots slick-dots",
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
    ]
  });
  //carrusel en bibliotecas
  $(".owl-carousel-biblio").slick({
    arrows: true,
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 500,
    speed: 1000,
    prevArrow: '<button type="button" class="slick-prev pull-left"><span class="icon icon-arrow-left"><i class="fa fa-long-arrow-left"></i></span></button>',
    nextArrow: '<button type="button" class="slick-next pull-right"><span class="icon icon-arrow-right"><i class="fa fa-long-arrow-right"></i></span></button>',
    speed: 1000,
    dotsClass: "owl-dots slick-dots",
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
    ]
  });

  //Para quitarle las img y videos al timeline de twitter
  $(".twitter-block").on("DOMSubtreeModified propertychange", "#twitter-widget-0", function () {
    $(".twitter-timeline").contents().find(".timeline-Tweet-media").css("display", "none");
    $(".twitter-block").css("height", "100%");
  });

  $('.webform-home .label-hidden .js-form-item').each(function () {
    $(this).find('input').attr('placeholder', jQuery(this).find('label').text());
    $(this).find('label').hide();
  });
  $('.contact-form .label-hidden .js-form-item').each(function () {
    $(this).find('input').attr('placeholder', jQuery(this).find('label').text());
    $(this).find('label').hide();
  });
  $('.contact-form .js-form-type-textarea .form-textarea').each(function () {
    $(this).find('input').attr('placeholder', jQuery(this).find('label').text());
    $(this).find('label').hide();
  });

  $(".js-form-type-textarea .form-textarea").attr('placeholder', "mensaje");
  $("html:lang(en) .js-form-type-textarea .form-textarea").attr('placeholder', "Message");
  $(".views-exposed-form .form-item-field-facultades-target-id").addClass("filter-inner");

  $('.contact-form .js-form-type-checkbox').each(function () {
    // $(this).find('input').attr('placeholder', jQuery(this).find('label').text());
    // $(this).find('label').show();
  });

  //enlaces anclados
  //capellania
  jQuery('#block-navegacionprincipal ul li:nth-child(4) ul li:nth-child(1) a').click(function () {
    jQuery('html, body').animate({
      scrollTop: jQuery('#capellania').offset().top - 100
    }, 1000);
  });
  jQuery('#cssmenu-responsive ul.nav li:nth-child(4) ul li:nth-child(1) a').click(function () {
    var window_width = jQuery(window).width();
    if (window_width < 1200) {
      jQuery('html, body').animate({
        scrollTop: jQuery('#capellania').offset().top - 100
      }, 1000);
    }
  });
  //deportes
  jQuery('#block-navegacionprincipal ul li:nth-child(4) ul li:nth-child(2) a').click(function () {
    jQuery('html, body').animate({
      scrollTop: jQuery('#deportes').offset().top - 100
    }, 1000);
  });
  jQuery('#cssmenu-responsive ul.nav li:nth-child(4) ul li:nth-child(2) a').click(function () {
    var window_width = jQuery(window).width();
    if (window_width < 1200) {
      jQuery('html, body').animate({
        scrollTop: jQuery('#deportes').offset().top - 100
      }, 1000);
    }
  });
  //desarrollo-profesional
  jQuery('#block-navegacionprincipal ul li:nth-child(4) ul li:nth-child(3) a').click(function () {
    jQuery('html, body').animate({
      scrollTop: jQuery('#desarrollo-profesional').offset().top - 100
    }, 1000);
  });
  jQuery('#cssmenu-responsive ul.nav li:nth-child(4) ul li:nth-child(3) a').click(function () {
    var window_width = jQuery(window).width();
    if (window_width < 1200) {
      jQuery('html, body').animate({
        scrollTop: jQuery('#desarrollo-profesional').offset().top - 100
      }, 1000);
    }
  });
  //voluntariado
  jQuery('#block-navegacionprincipal ul li:nth-child(4) ul li:nth-child(4) a').click(function () {
    jQuery('html, body').animate({
      scrollTop: jQuery('#voluntariado').offset().top - 100
    }, 1000);
  });
  jQuery('#cssmenu-responsive ul.nav li:nth-child(4) ul li:nth-child(4) a').click(function () {
    var window_width = jQuery(window).width();
    if (window_width < 1200) {
      jQuery('html, body').animate({
        scrollTop: jQuery('#voluntariado').offset().top - 100
      }, 1000);
    }
  });

  //contacto
  jQuery('.fac-menu li:last-child a.sf-depth-1').click(function () {
    jQuery('html, body').animate({
      scrollTop: jQuery('#contacto').offset().top - 100
    }, 1000);
  });

  jQuery('.region-silder .block-menu .menu a').click(function () {
    var window_width = jQuery(window).width();
    var id = jQuery(this).attr("href").split("#");
    if (id[1] !== "") {
      if (window_width >= 1200) {
        jQuery('html, body').animate({
          scrollTop: jQuery('#' + id[1]).offset().top - 180
        }, 1000);
      } else {
        jQuery('html, body').animate({
          scrollTop: jQuery('#' + id[1]).offset().top - 100
        }, 1000);
      }
    }
  });

  //anclas de las opciones del menu de cada fac
  jQuery('.fac-menu li:first-child ul li.sf-depth-2 a').click(function () {
    var window_width = jQuery(window).width();
    var id = jQuery(this).attr("href").split("#");
    if (id[1] !== "") {
      if (window_width >= 1200) {
        jQuery('html, body').animate({
          scrollTop: jQuery('#' + id[1]).offset().top - 180
        }, 1000);
      } else {
        jQuery('html, body').animate({
          scrollTop: jQuery('#' + id[1]).offset().top - 100
        }, 1000);
      }
    }
  });

//anclas de las opciones del menu de cada fac en responsive
  jQuery('.cssmenu-responsive ul.nav li:first-child ul li a').click(function () {
    var id = jQuery(this).attr("href").split("#");
    // alert(id[1]);
    // console.log(id[1]);
    if (id[1] !== "") {
      jQuery('html, body').animate({
        scrollTop: jQuery('#' + id[1]).offset().top - 180
      }, 1000);
    }
  });
  jQuery('.menu-item--expanded li.menu-item a').click(function () {
    jQuery('.cssmenu-resp > .button').click();
  });

  $(".slides").slick({
    asNavFor: '.captions',
    infinite: false,
    speed: 200,
    arrows: false,
    dots: true
  });
//slider en noticias
  $(".captions").slick({
    asNavFor: '.slides',
    infinite: false,
    speed: 200,
    fade: true,
    appendArrows: $('.pagination'),
    dots: true,
    arrows: false
  });
})(jQuery);

//init wow js
new WOW().init();

