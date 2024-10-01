var tl = gsap.timeline()
tl.from("nav h3",{
    y: -40,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
})
tl.from("nav h4",{
    y: -40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
})
tl.from("main .box",{
    y: 1225,
    opacity: 0,
    duration: 1,
})
tl.from("main h1",{
    y: 15,
    opacity: 0,
    duration: 0.9,
})