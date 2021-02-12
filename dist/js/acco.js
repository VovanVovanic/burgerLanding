(function () {
  const Accord = document.querySelector(".acco");

  Accord.addEventListener("click", function (event) {
    if (event.target.classList.contains("acco__trigger")) {
      event.preventDefault();

      const action = event.target;
      const teamItem = action.parentNode;
      const teamList = teamItem.parentNode;
      const items = teamList.children;
      const content = action.nextElementSibling;
      const contentHeight = content.firstElementChild.clientHeight;

      if (!teamItem.classList.contains("acco__item--active")) {
        for (let i = 0; i < items.length; i++) {
          items[i].classList.remove("acco__item--active");
          items[i].lastElementChild.style.height = 0;
        }

        teamItem.classList.add("acco__item--active");
        content.style.height = contentHeight + "px";
      } else {
        teamItem.classList.remove("acco__item--active");
        content.style.height = 0;
      }
    }
  });
})();



(function () {
    const menuAcco = document.querySelector(".menu__list");

    menuAcco.addEventListener("click", function (event) {
      if (
        event.target.classList.contains("menu__trigger") ||
        event.target.classList.contains("menu__title")
      ) {
        event.preventDefault();

        const menuAccord =
          event.target.closest(".menu__trigger") || event.target;
        const menuItem = menuAccord.parentNode;
        const menuList = menuItem.parentNode;
        const items = menuList.children;

        if (!menuItem.classList.contains("menu__item--active")) {
          for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("menu__item--active");
          }

          menuItem.classList.add("menu__item--active");
        } else {
          menuItem.classList.remove("menu__item--active");
        }
      }
    });  

    
}())

