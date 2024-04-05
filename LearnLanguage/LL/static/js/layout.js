const bmenu1 = document.getElementById("navbar-menu1");
const bmenu2 = document.getElementById("navbar-menu2");
const bmenu3 = document.getElementById("navbar-menu3");
const menu_div = document.getElementById("navbar-device");
const navbar_for_device = document.getElementById("navbar-device-menu");

let cooldown = 0;
let menu = 0;

menu_div.addEventListener("click", function() {
    if (menu == 0) {
        if (cooldown == 0) {
            bmenu1.style.animation = "open-menu-first 0.6s ease";
            bmenu2.style.animation = "open-menu-second 0.6s ease";
            bmenu3.style.animation = "open-menu-third 0.6s ease";

            navbar_for_device.style.display = "block";

            navbar_for_device.style.animation = "open-menu 1s ease";

            bmenu1.addEventListener("animationend", function() {
                bmenu1.style.animation = '';
                bmenu1.style.top = "10px";
                bmenu1.style.rotate = "45deg";
            })

            bmenu2.addEventListener("animationend", function() {
                bmenu2.style.animation = '';
                bmenu2.style.opacity = "0%";
            })
            
            bmenu3.addEventListener("animationend", function() {
                bmenu3.style.animation = '';
                bmenu3.style.top = "-10px";
                bmenu3.style.rotate = "-45deg";
            })

            navbar_for_device.addEventListener("animationend", function() {
                navbar_for_device.style.animation = '';
                navbar_for_device.style.display = "block";
                navbar_for_device.style.left = "0%";
            })

            cooldown_def();
            menu = 1;
        }
    } else {
        if (cooldown == 0) {
            bmenu1.style.animation = "open-menu-first-2 0.6s ease";
            bmenu2.style.animation = "open-menu-second-2 0.6s ease";
            bmenu3.style.animation = "open-menu-third-2 0.6s ease";

            navbar_for_device.style.animation = "close-menu 1s ease"

            bmenu1.addEventListener("animationend", function() {
                bmenu1.style.animation = '';
                bmenu1.style.top = "0px";
                bmenu1.style.rotate = "0deg";
            })

            bmenu2.addEventListener("animationend", function() {
                bmenu2.style.animation = '';
                bmenu2.style.opacity = "100%";
            })
            
            bmenu3.addEventListener("animationend", function() {
                bmenu3.style.animation = '';
                bmenu3.style.top = "0px";
                bmenu3.style.rotate = "0deg";
            })

            navbar_for_device.addEventListener("animationend", function() {
                navbar_for_device.style.animation = '';
                navbar_for_device.style.display = "none";
            })

            cooldown_def();
            menu = 0;
        }
    }
})

function cooldown_def() {
    cooldown = 1;
    setTimeout(function() {
        cooldown = 0;
    }, 1000);
}