gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

const smoother = ScrollSmoother.create({
  smooth: 2,
  smoothTouch: 0.1,
	effects: false
});

gsap.utils.toArray(".comparisonSection").forEach(section => {
	let tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "center center",
				end: () => "+=" + section.offsetWidth, 
				scrub: true,
				pin: true,
        anticipatePin: 1
			},
			defaults: {ease: "none"}
		});
	tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
	  .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
});

// let links = gsap.utils.toArray("nav a");
gsap.utils.toArray(".button-scroll").forEach(function (a) {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: e.target.getAttribute("href")
    });
  });
});


function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 3, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});

gsap.utils.toArray(".v-logo").forEach(elogo => {
  var elogo = gsap.timeline({
    scrollTrigger: {
      trigger: elogo,
      start: "top center",
      end: "bottom center",
      toggleActions: "play play play reverse"
    }
    ,
    defaults: {
      duration: 0.5,
      ease: "sine.inOut"
    }
  })
  .from(elogo, {x:-60, autoAlpha: 0});
});

gsap.utils.toArray(".e-logo").forEach(elogo => {
  var elogo = gsap.timeline({
    scrollTrigger: {
      trigger: elogo,
      start: "top center",
      end: "bottom center",
      //onEnter, onLeave, onEnterBack, onLeaveBack
      toggleActions: "play play play reverse"
    }
    ,
    defaults: {
      duration: 0.5,
      ease: "sine.inOut"
    }
  })
  .from(elogo, {rotation:-150, autoAlpha: 0});
});

// gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray('.hrscroll-wrapper img');
const showDemo = () => {
  document.body.style.overflow = 'auto';
  document.scrollingElement.scrollTo(0, 0);

  gsap.utils.toArray('.hrscroll-wrapper section').forEach((section, index) => {
    const w = section.querySelector('.hrscroll-wrapper .wrapper');
    const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 0.5 } });  
  });
};

showDemo();