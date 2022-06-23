const wave = document.querySelector('#wave')
const logo = document.querySelector('.logo')

const shape2 = 'M469.539032,263.986786H-0.000001L0,229.890961c310.649475,58.156982,255.61113-98.5,469.539032-65.062302V263.986786z'
const shape3 = 'M469.539032,263.986786H-0.000001L0,0c226.11113,0,182.887283-0.414484,469.539032,0V263.986786zz'

new TimelineMax({
    repeat: -1,
    repeatDelay: 1
})
.to(wave, .8, {
    attr: { d: shape2 },
    ease: Power2.easeIn
})
.to(wave, .8, {
    attr: { d: shape3 },
    ease: Power2.easeOut,
    fill: '#77aeff'
})
.from(logo, .8, {
    y: 75
}, '-=.8')
