// const { ScrollTrigger } = require("gsap/all");

gsap.from("section .nav .part1 h1",{
    y:-100,
    opacity:0,
    duration:0.8
})
var tl = gsap.timeline();
tl.from("section .part2 h2",{
    y:-100,
    opacity:0,
    stagger:0.15,
    duration:1.2
},"anim")
tl.from(
  "section .part2 button",
  {
    y: -100,
    opacity: 0,
    // stagger: 0.15,
    duration: 1.5,
  },
  "anim"
);
tl.from(".center .center-part1 h1 ,p ",{
    x:-100,
    opacity:0,
    duration:1
    
},"-=1.5")
tl.from(".center .center-part2",{
    x:100,
    opacity:0,
    scrub:2,
    duration:1
},"-=1.5" )
tl.from(".center .center-part1 button",{
    y:50,
    opacity:0,
    duration:0.8
},"-=1.5");
tl.from(".img-sec",{
    y:20,
    stagger:0.15,
    opacity:0
},"-=1")


var tl2 = gsap.timeline({

    scrollTrigger:{
        trigger:".services",
        scroller:"body",
        
        start:"top 50%",
        end:"top 0",
        scrub:2,


    }
}
)
tl2.from(".services h1",{
    x:-100,
    opacity:0,
    duration:0.8
})
tl2.from(".services p",{
    x:-100,
    opacity:0,
    duration:0.8
})
tl2.from(".box.left",{
    x:-100,
    duration:1,
    scrub:2,
    opacity:0,
    stagger:0.5
},"amin2")
tl2.from(".box.right",{
    x:100,
    duration:1,
    scrub:2,
    opacity:0,
    stagger:0.5
},"amin2")