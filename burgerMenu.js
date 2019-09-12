document.addEventListener("DOMContentLoaded", burgerAktiv);

const burgerKnap = document.querySelector("#burger_knap");


function burgerAktiv() {
    burgerKnap.addEventListener("click", () => {
        console.log("openMenu");

        burgerKnap.classList.toggle("open");

        document.querySelector("#menu").classList.toggle("toggle_menu");

        document.querySelector("#portfolio_link").addEventListener("mouseup", toggleMenu);
        document.querySelector("#cv_link").addEventListener("mouseup", toggleMenu);
        document.querySelector("#kontakt_link").addEventListener("mouseup", toggleMenu);
    });


    function toggleMenu() {
        console.log("toggleMenu");
        burgerKnap.classList.toggle("open");
        document.querySelector("#menu").classList.toggle("toggle_menu");
    }
}
