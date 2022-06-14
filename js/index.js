// dark white Theme
const themeSwitch = document.querySelector('.themeSwitch input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('darkTheme');
});


// text rolling
let roller = document.querySelector('.roller');
roller.id = 'roller1';

let clone = roller.cloneNode(true);
clone.id = 'roller2';
document.querySelector('.text-wrap').appendChild(clone);

document.querySelector('#roller1').style.left = '0px';
document.querySelector('#roller2').style.left = document.querySelector('.roller ul').offsetWidth+'px';

roller.classList.add('original');
clone.classList.add('clone');


// text rolling 2
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


