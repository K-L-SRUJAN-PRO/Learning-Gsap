var menuIcon = document.querySelector("i");
var clIcon = document.querySelector(".menu i");
var tl = gsap.timeline({ paused: true }); // Start paused so it doesn't play on page load

// Define the "Open" sequence
tl.to(".menu", {
    x: 0,
    duration: 0.5,
    ease: "power2.out"
})
.from(".menu h1", {
    x: 30,
    opacity: 0,
    stagger: 0.1
});

// The Toggle Logic
menuIcon.addEventListener("click", function() {
   tl.play()
});

clIcon.addEventListener("click",function(){
    tl.reverse()
})