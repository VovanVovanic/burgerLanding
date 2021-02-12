(function () {
  const feedsList = document.querySelector(".feeds__list");
  feedsList.addEventListener("click", (event) => {
    if (event.target.classList.contains("button")) {
      const item = event.target.closest(".feeds__item");
      const title = item.querySelector(".feed__title").textContent;
      const content = item.querySelector(".feed__descr").textContent;

      const popUp = document.querySelector(".review-overlay");
      const close = popUp.querySelector(".review-popup__close");
      popUp.querySelector(".review__title").textContent = title;
      popUp.querySelector(".review__description").textContent = content;
      popUp.classList.add("review-overlay_open");
        close.addEventListener("click", (event) => {
          event.preventDefault()
        popUp.classList.remove("review-overlay_open");
      });
    }
  });
})();
