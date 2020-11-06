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

const cursor = gsap.to(".cursor", {opacity: 0, ease:"power2.inOut", repeat:-1, duration:1});

const boxTl = gsap.timeline();

boxTl.to(".box", {duration: 1, width: "23vw", delay: 0.5, ease: "power4.inOut"})
    .from(".name", {opacity: 0, duration: 1, y: "7vw", ease: "power3.out", onComplete: () => masterTl.play()})
    .from(".is", {opacity: 0, duration: 1, y: "7vw", ease: "power3.out"})
    .from(".cursor", {duration: 1, y: "7vw", ease: "power3.out"})
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
        markers: true
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
        markers: true
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
        markers: true
    },
        rotation: "-90deg",
        ease: "power4.out",
        duration: 4
})
//Using timeline from GSAP to move boxes out of screen for better animation during scroll. 
const tl4 = gsap.timeline();
    tl4.from("#about", {xPercent: -100})
   


 //Using scrolltrigger from GSAP¨to trigger animation on scroll from #container.   
ScrollTrigger.create({
    animation: tl4,
    trigger: "#about",
    start: "top top",
    end: "+=4000",
    markers: true,
    scrub: 1,
    pin: true,
    pinSpacing: false,
    anticipatePin: 1
})
