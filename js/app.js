gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none", duration: 3});

//Using timeline from GSAP to animate the intro
const tl = gsap.timeline();

tl.to(".text-intro", {y: "0%", duration: 1, stagger: 1});
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
    .from(".name", {opacity: 0, duration: 4, y: "7vw", ease: "power3.out", onComplete: () => masterTl.play()})
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
    tl4.fromTo("#projects", {xPercent: 110, background: "rgba(255, 255, 255, 0.658)"}, {delay: 0.3,xPercent: 0, background: "#FFF"})
    tl4.fromTo("#contact", {xPercent: -200, background: "rgba(255, 166, 0, 0.658)"}, {xPercent: 0, background: "rgb(255, 166, 0)"})
    tl4.to(".contact-me", {rotate: "-90deg", x: "-200px"})
    tl4.fromTo(".form", {yPercent: 150, opacity: 0}, {yPercent: 0, opacity: 1})
    tl4.fromTo(".google-map", {xPercent: 150, opacity:0}, {xPercent: 0, opacity: 1})

 //Using scrolltrigger from GSAP to trigger animation on scroll from #about.   
 
ScrollTrigger.create({
    animation: tl4,
    trigger: "#about",
    start: "top top",
    end: "+=3500",
    scrub: true,
    pin: true,
    anticipatePin: 1
})


// logos' animation

const tl5 = gsap.timeline();
tl5.to(".html5", {x: 800, y: 400, rotate: "360deg"})
    .to(".js", {x: 600, y: 200, rotate: "360deg"})
    .to(".css", {x: 410, y:200, rotate: "360deg"})
    .to(".bootstrap", {x: 220, y:200, rotate: "360deg"})
    .to(".github", {x: -810, rotate: "-360deg"})
    .to(".vuejs", {x: -190, rotate: "-360deg"})
    .to(".node", {x: -190, rotate: "-360deg"})
    .to(".wordpress", {x: -220, rotate: "-360deg"})
    .to(".elementor", {x: -620, rotate: "-360deg"})


    // ScrollTrigger.create({
    //     animation: tl5,
    //     trigger: "#skills",
    //     start: "top top",
    //     end: "+=2000",
    //     scrub: true,
    //     pin: true,
    //     anticipatePin: 1
    // })



    