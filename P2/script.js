var tl = gsap.timeline()

tl.from("p",{
    opacity:0,
    duration:1,
    // y:-20,
    scale:2,
    color:"grey",
    // color:"red",
    // repeat:-1,
    // yoyo:true,
    delay:0.5

})
tl.from("h1",{
    y:-20,
    duration:0.8,
    // delay:0.5,
    opacity:0

})
tl.from("h2",{
    y:-20,
    duration:0.8,
    opacity:0,
    stagger:0.3
})