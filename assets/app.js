
let tl = gsap.timeline();

tl.fromTo(
  "#jumbo .jumbo-titles h1",
  {
    x: -100,
    opacity: 0
  },

  {
    x: 0,
    opacity: 1,
    duration: .5
  }
)


$(window).on("scroll", function () {
  if ($(window).scrollTop() > 700) {
    $(".header").addClass("active");
    console.log('triggered')
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("active");
  }
});