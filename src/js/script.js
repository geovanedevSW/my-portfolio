const html = document.documentElement;
const themeToggle = document.querySelector('.l');
const buttons = document.querySelectorAll('.btn')

// aplica tema salvo
const savedTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", savedTheme);
themeToggle.checked = savedTheme === "dark";

themeToggle.addEventListener('change', function () {
  const theme = this.checked ? "dark" : "light";
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
});


// clique no botão da navbar
html.addEventListener('click', e => {
    const el = e.target.closest('.btn');
    if (!el) return;

     buttons.forEach(b => b.classList.remove('active'));

    el.classList.add('active');
    removeActive();
})
