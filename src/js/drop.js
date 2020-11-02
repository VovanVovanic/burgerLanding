(function() {
  const openTrigger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".drop-menu");
  const closeTrigger = document.querySelector(".close");
  const menuItem = document.querySelectorAll(".navigation__item--drop");

  menuItem.forEach((el) => {
    el.addEventListener('click', () => {
      mobileMenu.classList.remove("drop-menu--active");
    })
  })
  openTrigger.addEventListener("click", function(e) {
    e.preventDefault();

      if (!mobileMenu.classList.contains("drop-menu--active"))
      mobileMenu.classList.add("drop-menu--active");
  });

  closeTrigger.addEventListener("click", function(e) {
    e.preventDefault();

    if (mobileMenu.classList.contains("drop-menu--active"))
      mobileMenu.classList.remove("drop-menu--active");
  });
})();
