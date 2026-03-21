gsap.from('#p1 #box', {
    opacity: 0,
    duration: 1,
    rotate: 180,
    delay: 1,
    scrollTrigger: {
        trigger: "#p1 #box",
        scroller:"body",
        markers:true,
        start:"top 30%",
        end:"buttom 10%",
        scrub:2

    }

})
gsap.from('#p2 #box', {
    opacity: 0,
        duration: 1,
        rotate: 900,
    scrollTrigger: {
        trigger: "#p2 #box",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"buttom 10%",
        scrub:2

    }

})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#p3 #box", // The container that starts the whole sequence
        scroller: "body",
        markers: true,
        start: "top 60%",
        end:"buttom 50%",
        scrub:2,
        // toggleActions: "play none none none" // Ensures it plays like a normal animation
    }
});

tl.from("#p3 #box", {
    opacity: 0,
    scale: 0,
    duration: 2,
    stagger: 0.5 // Reduced stagger so it doesn't take forever
});
tl.from("#p3 #box h1", {
    opacity: 0,
    duration: 1
});
tl.from("#p3 #box h2", {
    opacity: 0,
    duration: 1
});
