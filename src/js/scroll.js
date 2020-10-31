const sections = $(".section");
const display = $(".maincontent");
// const mobileDetect = new MobileDetect(window.navigator.userAgent);
// const isMobile = mobileDetect.mobile();
let inscroll = false;
sections.filter(":first-child").addClass("active");

const performTransition = (sectionEq) => {
  if (inscroll) return;
  inscroll = true;

  const position = sectionEq * -100 + "%";

  sections.eq(sectionEq).addClass("active").siblings().removeClass("active");

  display.css({
    transform: `translateY(${position})`,
  });

  setTimeout(() => {
    inscroll = false;

    $(".sidebar__item")
      .eq(sectionEq)
      .addClass("sidebar__item_active")
      .siblings()
      .removeClass("sidebar__item_active");
  }, 800);
};
$(".wrapper").on({
  wheel: (e) => {
    const deltaY = e.originalEvent.deltaY;
    const direction = deltaY > 0 ? "up" : "down";

    scrollToSection(direction);
  },
  touchmove: (e) => e.preventDefault(),
});

const defineSections = (sections) => {
  const activeSection = sections.filter(".active");
  return {
    activeSection: activeSection,
    nextSection: activeSection.next(),
    prevSection: activeSection.prev(),
  };
};

$(document).on("keydown", (e) => {
  const section = defineSections(sections);

  switch (e.keyCode) {
    case 40:
      if (!section.nextSection.length) return;
      performTransition(section.nextSection.index());
      break;

    case 35:
      if (!section.prevSection.length) return;
      performTransition(section.prevSection.index());
      break;
  }
});
const scrollToSection = (direction) => {
  const section = defineSections(sections);

  if (inscroll) return;

  if (direction === "up" && section.nextSection.length) {

    performTransition(section.nextSection.index());
  }


  if (direction === "down" && section.prevSection.length) {
      if (section.activeSection[0].classList.contains("contacts")) {
        return;
      } else {
        performTransition(section.prevSection.index());
      }
    

  }
};
//sidebar
function initEvent() {
  $("[link-scroll]").on("click", (e) => {
    e.preventDefault();
    performTransition(parseInt($(e.target).attr("link-scroll")));
  });
}
initEvent();

//mobile
// if (isMobile) {
//   $(window).swipe({
//     swipe: (event, direction) => {
//       scrollToSection(direction);
//     },
//   });
// }