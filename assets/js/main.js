








$( document ).ready(function() {

      $('.multi-item-carousel').carousel({
          interval: false
      });

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
      $('.multi-item-carousel .item').each(function(){
            var next = $(this).next();
            if (!next.length) {
              next = $(this).siblings(':first');
          }

          next.children(':first-child').clone().appendTo($(this));
          
          if (next.next().length>0) {
              next.next().children(':first-child').clone().appendTo($(this));
          } else {
             $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
          }

      });

      TweenLite.from(".hero-text", 0.7, {left:100,autoAlph:0});
      


      var $img = $('.platypus-image');

        TweenMax.set($img,{autoAlpha:0});

        TweenMax.to($img,3, {autoAlpha:1});



    
});






















