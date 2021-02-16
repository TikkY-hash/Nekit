import slider from './slider'

'use strict'
document.addEventListener('DOMContentLoaded',() => {
  document.getElementById("trigger").onclick = function() {
    open()
  };
  
  function open() {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("trigger").classList.toggle("active");
  }



/**
 * Youtube video
 */
$('[data-youtube]').on('click', function () {
    let id = $(this).data('youtube'),
        padding = $(window).innerWidth() > 768 ? 120 : 30,
        ratio = 9 / 16,
        width = $(window).innerWidth() > 768 ? $(window).innerWidth() - padding - 200 : $(window).innerWidth() - padding,
        height = width * ratio,
        html = '<iframe style="width: ' + width + 'px; height: ' + height + 'px;" ' +
            'src="' +
            id + '" frameborder="0" gesture="media" allowfullscreen></iframe>';
    $('body').append('<div class="outer">' + html + '</div>');
});

$(document).mouseup(function (e) {
    let container = $('.outer iframe');

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.outer').remove();
    }
});

$(document).on('keyup', function (e) {
    if (e.keyCode === 27) {
        $('.outer').remove();
    }
});






document.querySelector('[data-modal]').addEventListener('click',() =>{
  const modal = document.querySelector('.modal__window');

  function showWindow() {
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function hideWindow() {
    modal.addEventListener('click',(e) => {
      if(e.target && e.target.matches('[data-close]')) {
        hideCode();
      }
    });
  }

  function hideCode() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
  }

  showWindow();
  hideWindow();

});


//Slider
slider({
  container: '.slider__test',
  fields: '.slides__fields',
  slide: '.slide',
  nextArrow: '.next__arrow',
  prevArrow: '.prev__arrow',
  arrowsWrapper: '.inner__arrow',
  speed: 3000,
  interval: false,
  mouseOverImage: true,
  mouseOverDots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [{
          breackpoint: 992,
          settings: {
              speedR: 3000,
              intervalR: false,
              mouseOverImageR: true,
              mouseOverDotsR: true,
              slidesToShowR: 2,
              slidesToScrollR: 1,
          }
      },
      {
          breackpoint: 980,
          settings: {
              speedR: 3000,
              intervalR: false,
              mouseOverImageR: true,
              mouseOverDotsR: true,
              slidesToShowR: 1,
              slidesToScrollR: 1,
          }
      },
  ]
});

})

