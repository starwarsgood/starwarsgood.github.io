$(document).ready(function(){
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 49) {
        $('body').addClass('header-fixed');
    } else {
        $('body').removeClass('header-fixed');
    }
    // change the style of the navbar when the user scrolls into the next zone.
    // get the distance of the 2nd section from the top of the page - height of header.
    var topOffset = $('#demosection2').offset().top;
    var headerHeight = $('#topnav').height();
    var transitionPoint = topOffset - headerHeight;
    if (scrollTop > transitionPoint) {
        $('#topnav').addClass('alt-header');
    } else {
        $('#topnav').removeClass('alt-header');
    }
  });
});
// Menu 

//Slider
var $slider = $(".slider"), $bullets = $(".bullets");
        function calculateHeight(){
            var height = $(".slide.active").outerHeight();
            $slider.height(height);
        }

        $(window).resize(function() {
            calculateHeight();
            clearTimeout($.data(this, 'resizeTimer'));
        });
        
        function resetSlides(){
            $(".slide.inactive").removeClass("inactiveRight").removeClass("inactiveLeft");
        }

        function gotoSlide($activeSlide, $slide, className){
             $activeSlide.removeClass("active").addClass("inactive "+className);
             $slide.removeClass("inactive").addClass("active");
             calculateHeight();
             resetBullets();
             setTimeout(resetSlides, 300);
        }

        $(".next").on("click", function(){
             var $activeSlide = $(".slide.active"),
                 $nextSlide = $activeSlide.next(".slide").length != 0 ? $activeSlide.next(".slide") : $(".slide:first-child");
                 console.log($nextSlide);
                 gotoSlide($activeSlide, $nextSlide, "inactiveLeft");
        });
        $(".previous").on("click",  function(){
             var $activeSlide = $(".slide.active"),
                 $prevSlide = $activeSlide.prev(".slide").length != 0 ? $activeSlide.prev(".slide") : $(".slide:last-child");

                 gotoSlide($activeSlide, $prevSlide, "inactiveRight");
        });
        $(document).on("click", ".bullet", function(){
            if($(this).hasClass("active")){
                return;
            }
            var $activeSlide = $(".slide.active");
            var currentIndex = $activeSlide.index();
            var targetIndex = $(this).index();
            console.log(currentIndex, targetIndex);
            var $theSlide = $(".slide:nth-child("+(targetIndex+1)+")");
            gotoSlide($activeSlide, $theSlide, currentIndex > targetIndex ? "inactiveRight" : "inactiveLeft");
        })
        function addBullets(){
            var total = $(".slide").length, index = $(".slide.active").index();
            for (var i=0; i < total; i++){
                var $bullet = $("<div>").addClass("bullet");
                if(i==index){
                    $bullet.addClass("active"); 
                }
                $bullets.append($bullet);
            }
        }
        function resetBullets(){
            $(".bullet.active").removeClass("active");
            var index = $(".slide.active").index()+1;
            console.log(index);
            $(".bullet:nth-child("+index+")").addClass("active");
        }
        addBullets();
        calculateHeight();

        //Contact
        