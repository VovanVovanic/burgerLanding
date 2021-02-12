
(function () {
    const right = document.querySelector(".arrow__svg--right");
    const left = document.querySelector(".arrow__svg--left");
    const slider = document.querySelector(".slider__burgers");
    const sliderList = slider.querySelector(".burgers");
    let width = slider.clientWidth;
    let slideCount = sliderList.children.length;
    let step = width;
    let activeSlide = null;
    let slidePos = 0;

    sliderList.style.width = width * slideCount + "px";

    right.addEventListener("click", (e) => {
      e.preventDefault();
      activeSlide = sliderList.querySelector(".burgers__item--active");

      if (activeSlide.nextElementSibling) {
        slideTo("next");
      } else {
        slideTo("first");
      }
    });

    left.addEventListener("click", (e) => {
      e.preventDefault();
      activeSlide = sliderList.querySelector(".burgers__item--active");

      if (activeSlide.previousElementSibling) {
        slideTo("prev");
      } else {
        slidePos = 0;
        slideTo("last");
      }
    });

    function slideTo(value) {
      switch (value) {
        case "next":
          {
            slidePos += step;
            activeSlide.nextElementSibling.classList.add(
              "burgers__item--active"
            );
          }
          break;
        case "prev":
          {
            slidePos -= step;
            activeSlide.previousElementSibling.classList.add(
              "burgers__item--active"
            );
          }
          break;
        case "first":
          {
            slidePos = 0;
            sliderList.firstElementChild.classList.add("burgers__item--active");
          }
          break;
        case "last": {
          slidePos = width * (slideCount - 1);
          sliderList.lastElementChild.classList.add("burgers__item--active");
        }
      }
      sliderList.style.transform = `translateX(${-slidePos}px)`;
      activeSlide.classList.remove("burgers__item--active");
    }
}())