$(window).on("scroll", function () {
  if ($(window).scrollTop() > 700) {
    $(".header").addClass("active");
    console.log('triggered')
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("active");
  }
});