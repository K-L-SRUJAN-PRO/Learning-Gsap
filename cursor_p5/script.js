var cur = document.querySelector("#cur");
var body = document.querySelector("body");
var ov = document.querySelectorAll(".ov");


gsap.set("#cur", { xPercent: -40, yPercent: -40 });
body.addEventListener("mousemove", function (e) {
    gsap.to("#cur", {
        duration: 0.5,
        ease: "back.out(1.7)",
        y: -250,
        x: e.clientX, y: e.clientY,
        // ease:"power"
    })
})

gsap.to(".p2 div",{
    transform:"translateX(-50%)",
    scrollTrigger:{
        trigger:".p2",
        scroll:"body",
        start:"top 0%",
        end:"bottom -100%",
        markers:true,
        scrub:4,
        pin:true
    }
})


ov.forEach(function(element) {
    
    element.addEventListener("mousemove",function(){
        gsap.to(cur,{
            scale:4,
            // opacity:0.5
        })
    })

    element.addEventListener("mouseleave",function(){
        gsap.to(cur,{
            scale:1,
            // opacity:1
        })
    })
});
