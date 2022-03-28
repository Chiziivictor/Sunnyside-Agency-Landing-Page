const nav = document.querySelector(".nav");
const navToggleBtn = document.querySelector(".nav-toggle-btn");
const navLinks = document.querySelector(".nav-link");

const navToggle = function () {
    nav.classList.toggle('active');
    navToggleBtn.classList.toggle('active');
}

navToggleBtn.addEventListener('click', navToggle);