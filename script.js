let input = document.querySelector(".input");
let btn = document.querySelector(".search-btn");
let searchBar = document.querySelector(".search-bar");

btn.addEventListener("click", () => {
    searchBar.classList.toggle("active");
    input.focus();
});


let mybutton = document.getElementById("myBtn")

window.onscroll = function() { scrollFunction() }

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"
    } else {
        mybutton.style.display = "none"
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
