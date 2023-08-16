document.addEventListener("DOMContentLoaded", function () {
  //   new Splide("#image-carousel").mount();

  //   new Splide(".splide", {
  //     direction: "ttb",
  //     height: "10rem",
  //   }).mount();
  var outerSlider = new Splide("#outer-slider", {
    height: "30rem",
    drag: false,
  });

  var innerSlider = new Splide("#nested-slider", {
    height: "20rem",
    perPage: 1,
    // gap: "1rem",
    drag: true,
  });

  outerSlider.mount();
  innerSlider.mount();
});
