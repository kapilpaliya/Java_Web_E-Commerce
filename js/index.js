

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      items: 4,
      margin: 15,
      loop: true,
        center: true,
        nav: true,
        navText:["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        dots:false,
      responsive: {
        // breakpoint from 0 up
        0: {
          items: 1,
          stagePadding: 90
        },
        // breakpoint from 576 up
        576: {
          items: 2,
          stagePadding: 90
        },
        // breakpoint from 768 up
        768: {
          items: 3,
          stagePadding: 0
        },
        // breakpoint from 992 up
        992: {
          items: 4,
          stagePadding: 0
        }
      }
    });
});
  