const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// Verifica se o usuário já tem um tema salvo
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeIcon.classList.replace("fa-sun", "fa-moon");
}

// Alterna o tema ao clicar no botão
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        localStorage.setItem("theme", "light");
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }
});