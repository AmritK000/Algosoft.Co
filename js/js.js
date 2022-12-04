$(document).ready(function() {
   $('.c-art__blob').addClass('animatesvg');
   setTimeout(function() { removeanimateclass();}, 3000);
});

function removeanimateclass(){
	$('.c-art__blob').removeClass('animatesvg');
	setTimeout(function() {addanimateclass(); }, 2000);
}
function addanimateclass(){
	$('.c-art__blob').addClass('animatesvg');
	setTimeout(function() {removeanimateclass(); }, 3000);
}




<!--Script For Animate--> 

	AOS.init({
		easing: 'ease-out-back',
		duration: 1000
	});
<!--Bottom Progress bar-->

	$(window).load(function(){
	  $(window).scroll(function() {
		var wintop = $(window).scrollTop(), docheight = $('.wrapper_band').height(), winheight = $(window).height();
		console.log(wintop);
		var totalScroll = (wintop/(docheight-winheight))*100;
		console.log("total scroll" + totalScroll);
		$(".KW_progressBar").css("width",totalScroll+"%");
	  });
	});
 
/*Home Banner mouse mover*/

var lFollowX = 0, lFollowY = 0, x = 0, y = 0, friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  translate = "translate(" + x + "px, " + y + "px) scale(1.1)";

  $(".left_text").css({
    "-webit-transform": translate,
    "-moz-transform": translate,
    transform: translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on("mousemove click", function(e) {
  var lMouseX = Math.max(
    -100,
    Math.min(100, $(window).width() / 2 - e.clientX)
  );
  var lMouseY = Math.max(
    -100,
    Math.min(100, $(window).height() / 2 - e.clientY)
  );
  lFollowX = 30 * lMouseX / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = 50 * lMouseY / 100;
});

moveBackground();

<!--home top banner Swipe-->
	var swiper = new Swiper('.swiper-container1', {
		grabCursor: true,
		//pagination: '.swiper-pagination',
		//paginationClickable: true
                //autoplay:2000,
                //speed: 3000,
                //autoplayDisableOnInteraction: false,
                //loop: true
	});


<!--slider portfolio--> 


    var swiper = new Swiper('.swiper-container2', {
        nextButton: '.Spl',
        prevButton: '.Spr',
        speed:2000,
		//freemode:true,
		centeredSlides: true,
		effect: 'coverflow',  
		//autoplaySpeed:100,
        //autoplayDisableOnInteraction: false,
		loop: true,
		slidesPerView:5,
        spaceBetween:0,
		grabCursor: true,
        breakpoints: {
            1024: {
                slidesPerView: 5,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 0
            }
        }
    });
	

    var swiper = new Swiper('.swiper-container3', {
        nextButton: '.Spl',
        prevButton: '.Spr',
        speed:5000,
		centeredSlides: true,
		   autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		  },
		//autoplaySpeed:100,
       // autoplayDisableOnInteraction: false,
		loop: true,
		slidesPerView:10,
        spaceBetween:0,
		grabCursor: true,
        breakpoints: {
            1024: {
                slidesPerView: 10,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 8,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 5,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 4,
                spaceBetween: 0
            }
        }
    });
	
<!--Services swiper-->

   var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 2,
		freeMode: true
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        //spaceBetween: 1,
		freeModeSticky: true,
        centeredSlides: true,
        slidesPerView: '4',
        touchRatio: 0.2,
		spaceBetween: 30,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

    
<!--testimonilas slider-->


	 var galleryTop = new Swiper('.swiper_tesimonils', {
       
        spaceBetween: 10,
		grabCursor: true,
		pagination: '.swiper-pagination',
		paginationClickable: true,
		freeMode: true
    });
	
<!--Clint logo Swiper-->

    var swiper = new Swiper('.swipe_clint', {
        scrollbar: '.swiper-scrollbar',
	    nextButton: '.cn_next',
        prevButton: '.cn_prev',
        scrollbarHide: true,
        slidesPerView: '5',
        centeredSlides: false,
        spaceBetween: 30,
		freeMode: true,
		loop: true,
        grabCursor: true,
		breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 1,
                spaceBetween:40
            }
		}
    });
	
	
<!--faq collaps-->

	function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);

<!--inner page change gradient -->
/*var colors = new Array(
  [198, 144, 226],
  [255, 115, 0],
  [255, 35, 98],
  [45, 175, 230]
//  [255, 0, 255],
//  [255, 128, 0]
);

var step = 0;

var colorIndices = [0, 1, 2, 3];

//-------transition speed
var gradientSpeed = 0.002;

function updateGradient() {
  if ($ === undefined) return;

  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

  $("#gradient")
    .css({
      background:
        "-webkit-gradient(linear, left top, right top, from(" +
          color1 +
          "), to(" +
          color2 +
          "))"
    })
    .css({
      background:
        "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
    });

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //--------pick two new target color indices
    //-------do not pick the same as the current one
    colorIndices[1] =
      (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
    colorIndices[3] =
      (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
  }
}

setInterval(updateGradient, 10);*/


/*porfoli detail slider*/

var swiper = new Swiper('.portfolio-slid', {
	pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: '3',
		 nextButton: '.pl',
        prevButton: '.pr',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier:1,
			slidesOffsetBefore:0,
			loop: true,
            slideShadows : true
        }
		
	
});


/*portfolio gallery*/
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

});


<!--back to top js-->
$(window).scroll(function() {
  if ($(this).scrollTop()) {
    $('#toTop').fadeIn();
  } else {
    $('#toTop').fadeOut();
  }
});

$("#toTop").click(function() {
  //1 second of animation time
  //html works for FFX but not Chrome
  //body works for Chrome but not FFX
  //This strange selector seems to work universally
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
});


 
 $(document).ready(function(){
    $(".navbar-toggle").click(function(){
        $(".mobile_link, .mobile-fade").addClass('active');
    });
	$(".mobile-fade").click(function(){
        $(".mobile_link, .mobile-fade").removeClass('active');
    });
});