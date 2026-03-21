gsap.to("#p2 #l1 , #p2 #l3 , #p2 #l5 ",{
    transform:"translateX(-300%)",
    scrollTrigger:{
        trigger:"#p2 #l2",
        scroll:"body",
        scrub:2,
        markers:true,
        start:"top 100%",
        end:"buttom -100%"
    }
})
gsap.to("#p2 #l2 , #p2 #l4 ",{
    transform:"translateX(0%)",
    scrollTrigger:{
        trigger:"#p2 #l2",
        scroll:"body",
        scrub:2,
        markers:true,
        start:"top 100%",
        end:"buttom -100%"
    }
})