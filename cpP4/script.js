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