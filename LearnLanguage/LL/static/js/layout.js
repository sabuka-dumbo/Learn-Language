const bmenu1 = document.getElementById("navbar-menu1");
const bmenu2 = document.getElementById("navbar-menu2");
const bmenu3 = document.getElementById("navbar-menu3");
const menu_div = document.getElementById("navbar-device");
const navbar_for_device = document.getElementById("");

menu_div.addEventListener("click", function() {
    bmenu1.style.animation = "open-menu-first 1s ease";
    bmenu2.style.animation = "open-menu-second 1s ease";
    bmenu3.style.animation = "open-menu-third 1s ease";

    bmenu1.addEventListener("animationend", function() {
        bmenu1.style.animation = '';
        bmenu1.style.top = "10px";
        bmenu1.style.rotate = "45deg";
    })

    bmenu1.addEventListener("animationend", function() {
        bmenu1.style.animation = '';
        bmenu1.style.top = "10px";
        bmenu1.style.rotate = "45deg";
    })
})