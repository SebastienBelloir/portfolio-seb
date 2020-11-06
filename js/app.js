gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none", duration: 3});

//Using timeline from GSAP to animate the intro
const tl = gsap.timeline();

tl.to(".text", {y: "0%", duration: 1, stagger: 1});
tl.to('.slider', {y: '-100%', duration: 1.5, delay: 0.5});
tl.to('.intro', {y: '-100%', duration: 1.5}, "-=1.5");
tl.fromTo('nav', {opacity: 0 }, {opacity: 1, stagger: 1, duration: 0.5});
tl.fromTo('.magic-mouse', {opacity: 0, y: -10}, {opacity: 1, duration: 1, y: 10, repeat: -1, yoyo : true});

const tl2 = gsap.timeline();

tl2.to(".box-top-left", { duration: 1, width: "80%", delay: 0.5})
    .to(".box-top-right", { duration: 1, width: "80%", delay: 0.5, ease: "power4.inOut"})
    .to(".box-bottom-left", { duration: 1, width: "80%", delay: 0.5, ease: "power4.inOut"})
    .to(".box-bottom-right", { duration: 1, width: "80%", delay: 0.5, ease: "power4.inOut"})

// animated text using GSAP plugins

const words = ["DÉVELOPPEUR WEB", "FRONT-END", "AIME RELEVER", "DES DÉFIS"];

const cursor = gsap.to(".cursor2", {opacity: 0, ease:"power2.inOut", repeat:-1, duration:1});

const boxTl = gsap.timeline();

boxTl.to(".box", {duration: 1, width: "23vw", delay: 0.5, ease: "power4.inOut"})
    .from(".name", {opacity: 0, duration: 1, y: "7vw", ease: "power3.out", onComplete: () => masterTl.play()})
    .from(".is", {opacity: 0, duration: 1, y: "7vw", ease: "power3.out"})
    .from(".cursor2", {duration: 1, y: "7vw", ease: "power3.out"})
    .to(".box", {duration: 1.2, height: "7vw", x: -50, ease: "elastic.out"})
    .to(".box", {duration: 2, autoAlpha:0.5, yoyo:true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})

let masterTl = gsap.timeline({repeat: -1}).pause();

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, delay: 1.5, repeatDelay: 1})
    tl.to(".text", {duration:1.5, text: word})
    masterTl.add(tl)
})

const tl3 = gsap.timeline();

tl3.from(".profil-picture", {
    scrollTrigger:{
        trigger: "#about",
        start: "top center",
        end: "50% top",
        scrub: true,
    },
        x: -500,
        ease: "power4.out",
        duration: 4
})
    .from(".text-about-me", {
    scrollTrigger:{
        trigger: "#about",
        start: "top center",
        end: "top top",
        scrub: true,
    },
        x: 700,
        y: 700,
        ease: "power4.out",
        duration: 4
})
    .to(".about-me", {
    scrollTrigger:{
        trigger: "#about",
        start: "top center",
        end: "top top",
        scrub: true,
        
    },
        rotation: "-90deg",
        color: "rgba(0, 0, 255, 0.658)",
        ease: "power4.out",
        duration: 4
})


//Using timeline from GSAP to move boxes out of screen for better animation during scroll. 
const tl4 = gsap.timeline();
    tl4.fromTo("#skills", {xPercent: -120, background: "rgba(0, 128, 0, 0.658)"}, {xPercent: 0, background: "rgb(0, 128, 0)"})
    tl4.fromTo("#projects", {xPercent: 100, background: "rgba(255, 255, 255, 0.658)"}, {delay: 0.3,xPercent: 0, background: "#FFF"})


 //Using scrolltrigger from GSAP to trigger animation on scroll from #container.   
ScrollTrigger.create({
    animation: tl4,
    trigger: "#about",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    anticipatePin: 1
})

//cursor modification
const cursor1 = document.querySelector(".cursor");

document.addEventListener('mousemove', e => {
    cursor1.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
    cursor1.classList.add('expand');

    setTimeout(() => {
        cursor1.classList.remove('expand');
    }, 500)
})
// logos' animation

gsap.from(".html5", {
    scrollTrigger: ".html5",
    x: 700,
    rotation: 360,
    delay: 2,
    start: "top top",
    markers: true,
    toggleActions: "restart reverse reverse pause"
})