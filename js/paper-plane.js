gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const tl6 = gsap.timeline();
tl6.to(".paper-plane", {duration: 15, motionPath: {path:[{x:100, y:50}, {x:200, y:0}, {x:300, y:100}], autoRotate: true, curviness: 2},   ease: "power1.inOut"})

// ScrollTrigger.create({
//     animation: tl6,
//     trigger: ".landing",
//     start: "top top",
//     end: "+=2000",
//     scrub: true,
//     pin: true,
//     markers: true,
//     anticipatePin: 1
// })