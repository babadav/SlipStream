








$( document ).ready(function() {


      TweenLite.from(".hero-text", 2, {left:100,autoAlph:0});
      


      var $img = $('.platypus-image');

        TweenMax.set($img,{autoAlpha:0});

        TweenMax.to($img,3, {autoAlpha:1});


      var $seriesB = $('.series-button'); 

      TweenLite.from($seriesB, 3, {left:100,autoAlph:0});

      $seriesB.hover(
         function() {
            TweenLite.to($(this), 0.3, {scale:1.2});
         },
         function() {
            TweenLite.to($(this), 0.15, {scale:1});  
         }
      );


      var $beginnerB = $('.beginner-button');

      $beginnerB.hover(
         function() {
            TweenLite.to($(this), 0.3, {scale:1.2});
         },
         function() {
            TweenLite.to($(this), 0.15, {scale:1});  
         }
      );

      var $mobileBeginner = $('.mobile-beginners');

      $mobileBeginner.hover(
         function() {
            TweenLite.to($(this), 0.3, {scale:1.2});
         },
         function() {
            TweenLite.to($(this), 0.15, {scale:1});  
         }
      );



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




      var $playlist = $('.playlist-shrink');

      $playlist.hover(
         function() {
            TweenLite.to($(this), 0.3, {scale:0.7});
         },
         function() {
            TweenLite.to($(this), 0.15, {scale:1});  
         }
      );

      var $catalinaM = $('.catalina-shrink');

      $catalinaM.hover(
         function() {
            TweenLite.to($(this), 0.3, {scale:0.9});
         },
         function() {
            TweenLite.to($(this), 0.15, {scale:1});  
         }
      );




    
});








 //////////////////////////////////////////////////////// Playtypus



var $compareB = $('.compare-button');

      $compareB.hover(
         function() {
            TweenLite.to($(this), 0.3, {scale:0.9});
         },
         function() {
            TweenLite.to($(this), 0.15, {scale:1});  
         }
      );


var $seriesB = $('.add-button'); 

      TweenLite.from($seriesB, 3, {left:100,autoAlph:0});

      $seriesB.hover(
         function() {
            TweenLite.to($(this), 0.3, {scale:1.2});
         },
         function() {
            TweenLite.to($(this), 0.15, {scale:1});  
         }
      );





