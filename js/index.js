// dark white Theme
const themeSwitch = document.querySelector('.themeSwitch input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('darkTheme');
});


// text rolling
// let roller = document.querySelector('.roller');
// roller.id = 'roller1';

// let clone = roller.cloneNode(true);
// clone.id = 'roller2';
// document.querySelector('.text-wrap').appendChild(clone);

// document.querySelector('#roller1').style.left = '0px';
// document.querySelector('#roller2').style.left = document.querySelector('.roller ul').offsetWidth+'px';

// roller.classList.add('original');
// clone.classList.add('clone');


// text rolling 2

// 롤링 배너 1




var slide1 = "";
slide1 += "<p class='slide-box'>space hub</p>";
slide1 += "<p class='slide-box'>world space</p>";

for(var k=0; k < 120; k++){
    $('.band-box-1').append(slide1);
}

var slide2 = "";
slide2 += "<p class='slide-box'>text</p>";
slide2 += "<p class='slide-box'>text</p>";

for(var k=0; k < 120; k++){
    $('.band-box-2').append(slide2);
}

var slide3 = "";
slide3 += "<p class='slide-box'>text</p>";

for(var k=0; k < 60; k++){
    $('.band-box-3').append(slide3);
}

var slide4 = "";
slide4 += "<p class='slide-box'>text</p>";
slide4 += "<p class='slide-box'>text</p>";

for(var k=0; k < 120; k++){
    $('.band-box-4').append(slide4);
}


// sprite image
gsap.registerPlugin(ScrollTrigger);

var frame_count  = 20,
    offset_value = 100;

gsap.to(".spriteImg-box", {
  backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
  ease: "steps(" + frame_count + ")",
  scrollTrigger: {
    trigger: ".sticky-bg",
    start: "top top",
    end: "+=" + (frame_count * offset_value),
    pin: true,
    scrub: true
  }
});

// grid scroll trigger



// floting object
createFloatingObjectTimeline();
createSection1PinTimeline();

function createSection1PinTimeline() {
  return gsap.timeline({
    scrollTrigger: {
      id: "floating-object",
      trigger: ".visual",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      markers: false
    }
  });
}

function createFloatingObjectTimeline() {
  const floatingObjectTimeline = gsap.timeline({
    scrollTrigger: {
      id: "floating-object",
      trigger: ".neon",
      start: "top top",
      end: "bottom top",
      scrub: true,
      markers: false
    }
  });

  floatingObjectTimeline.to(".floating-object", {
    rotate: 45
  });

  return floatingObjectTimeline;
}


