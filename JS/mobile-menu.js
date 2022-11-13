(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mobile-menu__open-btn"),
    closeMenuBtn: document.querySelector(".mobile-menu__close-btn"),
    menu: document.querySelector(".mobile-menu__backdrop"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("mobile-menu__backdrop--is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
