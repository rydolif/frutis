$(function() {
    
//---------------------------js-----------------------
  $('.tabs__wrap').hide();
  $('.tabs__wrap:first').show();
  $('.tabs div a:first').addClass('active');
   $('.tabs div a').click(function(event){
    event.preventDefault();
    $('.tabs div a').removeClass('active');
    $(this).addClass('active');
    $('.tabs__wrap').hide();
     var selectTab = $(this).attr('href');
    $(selectTab).fadeIn();
  });

//------------------------------acardeon---------------------------
  $(".block__content").slideUp("slow");
  $(".block").first().addClass('question__block--active');
  $(".question__block--active .block__content").slideDown("slow");

  $(".block__header").on("click", function(){
    if ($(this).parent().hasClass('question__block--active')) {
      $(this).parent().removeClass('question__block--active');
      $(".block__content").slideUp("slow");
    }
    else {
      $(".question__block--active .block__content").slideUp("slow");
      $(".question__block--active").removeClass('question__block--active');
      $(this).parent().addClass('question__block--active');
      $(".question__block--active .block__content").slideDown("slow");
    }
  });


//------------------------------hero slider-----------------------------
  var swiper = new Swiper('.hero', {
    spaceBetween: 30,
    pagination: {
      el: '.hero__pagination',
    },
    autoplay: {
      delay: 5000,
    },
  });

//------------------------------revievs slider-----------------------------
  var swiper = new Swiper('.reviews__slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.reviews__pagination',
    },
    autoplay: {
      delay: 5000,
    },
  });



//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('nav').toggleClass('nav--active');
    $('header').toggleClass('header--menu');
  });

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>10){
          $('.header').addClass('header--active');
          $('.navigation').addClass('navigation--active');
      }
      else if ($(this).scrollTop()<10){
          $('.header').removeClass('header--active');
          $('.navigation').removeClass('navigation--active');
      }
  });

//-------------------------скорость якоря---------------------------------------
  $(".header__list").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 60}, 'slow', 'swing');
  //--------------------закриття меню при кліку на ссилку якоря--------------------
     // $('.hamburger').removeClass('hamburger--active');
     // $('.header-menu').removeClass('header-menu');
     // $('.header--active').removeClass('header--active');
     // $('.nav--active').removeClass('nav--active');

  });


  
});

//--------------------------------------js----------------------------------------

  ;( function( window, document )
  {
    'use strict';

    var file     = 'img/symbols.html',
        revision = 1.3;

    if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
        return true;

    var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
        request,
        data,
        insertIT = function()
        {
            document.body.insertAdjacentHTML( 'afterbegin', data );
        },
        insert = function()
        {
            if( document.body ) insertIT();
            else document.addEventListener( 'DOMContentLoaded', insertIT );
        };

    if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
    {
      data = localStorage.getItem( 'inlineSVGdata' );
      if( data )
      {
          insert();
          return true;
      }
    }

    try
    {
      request = new XMLHttpRequest();
      request.open( 'GET', file, true );
      request.onload = function()
        {
          if( request.status >= 200 && request.status < 400 )
            {
              data = request.responseText;
              insert();
              if( isLocalStorage )
              {
                localStorage.setItem( 'inlineSVGdata',  data );
                localStorage.setItem( 'inlineSVGrev',   revision );
              }
          }
      }
      request.send();
    }
    catch( e ){}

  }( window, document ) );