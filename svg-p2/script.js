var path = `M 10 80 Q 500 80 990 80`
var pathfi = `M 10 80 Q 500 80 990 80`

console.log("Script is loaded!");

var line = document.querySelector("#p1")

line.addEventListener("mousemove", function (e) {
    const rect = line.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    path = `M 10 80 Q ${x} ${y} 990 80`
    gsap.to("svg path", {
        duration: 0.05,

        attr: { d: path }
    })
})

line.addEventListener("mouseleave", function () {
    gsap.to("svg path", {

        attr: { d: pathfi },
        duration: 1,
        ease: "elastic.out(1,0.3)",
    })
})
