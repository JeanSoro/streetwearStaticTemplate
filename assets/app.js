
let jumboTL = gsap.timeline();

jumboTL.fromTo(
  '#jumbo .transparent-color',
  {
    opacity: 1,
    backgroundColor: "black"
  },
  {
    opacity: .8,
    duration: 2
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
)
// offset after 1 animation is done header menu animations come in at the same time

// ).fromTo(
//   '#jumbo .store-info',
//   {
//     y: "100%",
//   },
//   {
//     y: 0,
//     duration: 1
//   },
// offset after 1 animation is done header menu animations come in at the same time
// '>-1.8'
// ).fromTo(
//   '#jumbo .store-info img',
//   {
//     y: 400,
//     opacity: 0,
//   },
//   {
//     y: 0,
//     opacity: 1,
//     duration: 1,
//     stagger: .2
//   },
// offset after 1 animation is done header menu animations come in at the same time
// '>-1.8'

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

// ********Homepage Big Blocks Columns Animations Start*********//

const bigColumnsTL = gsap.timeline();

bigColumnsTL.fromTo(
  '#collections_big_columns .col-md-6',
  {
    y: 300,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 1
  }
).fromTo(
  '#collections_big_columns .left-column .collection-title',
  {
    y: 300,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 1
  }
).fromTo(
  '#collections_big_columns .right-column .collection-title',
  {
    y: 300,
    opacity: 0
  },
  {
    y: -100,
    opacity: 1,
    duration: 1
  },
  ">-.8"
)

// ********Homepage Big Blocks Columns Animations End*********//

// ScrollMagic
let homeController = new ScrollMagic.Controller();

let bigColumnsScene = new ScrollMagic.Scene({
  triggerElement: "#collections_big_columns",
  triggerHook: 1,
  // reverse: true,
  reverse: false,
  offset: 100,
  // duration: 0
  duration: document.querySelector("#collections_big_columns").offsetHeight
})
  .setTween(bigColumnsTL)
  .addIndicators()
  .addTo(homeController)
// *****************************************************************************


// Animate Header

const headerTL = gsap.timeline();

headerTL.fromTo(
  'header',
  {
    backgroundColor: "rgba(0,0,0,0)",
  },
  {
    backgroundColor: "rgba(0,0,0,1)",
    duration: .4
  }
).fromTo(
  'header .logo a',
  {
    scale: 1,
  },
  {
    scale: .8,
    duration: .4
  },
  ">-.4"
);

let headerScene = new ScrollMagic.Scene({
  triggerElement: "#jumbo",
  triggerHook: 1,
  reverse: true,
  // reverse: false,
  // offset: 100,
  offset: (document.querySelector("#jumbo").offsetHeight) + 100,
  duration: 0
  // duration: document.querySelector("#collections_big_columns").offsetHeight
})
  .setTween(headerTL)
  .addIndicators()
  .addTo(homeController)




// jquery animate header
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 700) {
    $(".header").addClass("active");
    console.log('triggered')
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("active");
  }
});