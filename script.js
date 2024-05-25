const menu = document.querySelector("#menu");
const nav = document.querySelector(".nav");

menu.addEventListener("click", () => nav.classList.toggle("active"));

const mode = document.getElementById('mode_icon');

mode.addEventListener ('click' , () => {
    if(mode.classList.contains('fa-solid fa-bars')) {
        mode.classList.remove('fa-solid fa-bars');
        mode.classList.add('fa-solid fa-x');
    }
});
