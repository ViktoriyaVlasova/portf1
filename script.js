$(function(){ 
        $('.rev_slider').slick({
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 1000,
            arrows: false,
          });
    })


    $(function(){ 
        $('.prim_slider').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true,
                  autoplay: true,
                  autoplaySpeed: 5000,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  autoplay: true,
                  autoplaySpeed: 5000,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 5000,
                }
              }
              
            ]
          });
    });
    $(document).ready(function() {
      $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] 
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
            return '<small>HOME7DAYS</small>';
          }
        }
      });
    });
    
    // $(function() {

    //     $('.view img').click(function() {
    //         let src = $(this).attr('src');
    //         $('.popup img').attr('src',src);
    //         $('.popup').fadeIn();    
    //     });
    //     $('.close').click(function() {
    //         $('.popup').fadeOut();
    //     });
    // });


    // function onEntry(entry) {
    //   entry.forEach(change => {
    //     if (change.isIntersecting) {
    //      change.target.classList.add('element-show');
    //     }
    //   });
    // }
    
//     $document.ready(function() {
//   $('.popup-link').magnificPopup();
// })
    