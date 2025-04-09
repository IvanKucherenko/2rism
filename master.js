const menuList = document.querySelector(".navi-list");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("menu--open");
})