
let jumboTL = gsap.timeline();

jumboTL.fromTo(
  '#jumbo .transparent-color',
  {
    opacity: 1,
    backgroundColor: "black"
  },
  {
    opacity: .8,
    duration: 1.5
  }
).fromTo(
  '.logo',
  {
    x: -200,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1.2
  }
).fromTo(
  '.menu',
  {
    x: 200,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1.2
  },
  // offset after 1 animation is done header menu animations come in at the same time
  '>-1.3'
).fromTo(
  '#jumbo .jumbo-titles h1',
  {
    x: 0,
    opacity: 0,
  },
  {
    x: 100,
    opacity: 1,
    duration: 1.2
  },
  // offset after 1 animation is done header menu animations come in at the same time
  '>-.3'
).fromTo(
  '#jumbo .jumbo-titles h2',
  {
    x: 0,
    opacity: 0,
  },
  {
    x: 135,
    opacity: 1,
    duration: 1.2
  },
  // offset after 1 animation is done header menu animations come in at the same time
  '>-.7'
).fromTo(
  '#jumbo .state',
  {
    x: "100%",
  },
  {
    x: 0,
    duration: 1
  }
  // offset after 1 animation is done header menu animations come in at the same time

).fromTo(
  '#jumbo .store-info',
  {
    y: "100%",
  },
  {
    y: 0,
    duration: 1
  },
  // offset after 1 animation is done header menu animations come in at the same time
  '>-1.8'
).fromTo(
  '#jumbo .store-info img',
  {
    y: 400,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: .2
  },
  // offset after 1 animation is done header menu animations come in at the same time
  '>-1.8'
)
// jumboTL.fromTo(
//   '#jumbo .jumbo-image',
//   {
//     opacity: 0
//   },
//   {
//     opacity: 1,
//     duration: 1.5
//   }
// )



$(window).on("scroll", function () {
  if ($(window).scrollTop() > 700) {
    $(".header").addClass("active");
    console.log('triggered')
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("active");
  }
});