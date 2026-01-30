const menuToggle = document.querySelector("#menu-toggle");
const menuItems = document.querySelectorAll(".fancy-item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuToggle.checked = false; // fecha o menu
    });
});