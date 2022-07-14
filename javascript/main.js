var burgerMenu = document.querySelector("i.fa-bars");
burgerMenu.onclick = function() {
    this.parentElement.firstElementChild.classList.toggle("show");
}