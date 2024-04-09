const email = document.getElementById("email");
const email_placeholder = document.getElementById("email-placeholder");

email.addEventListener("focus", function() {
    email_placeholder.style.animation = "input-placeholder-animation 0.4s ease";

    email_placeholder.addEventListener("animationend", function() {
        email_placeholder.style.animation = '';
        email_placeholder.style.top = "-100%";
        email_placeholder.style.zIndex = "6";
        email_placeholder.style.fontSize = "1.2vw";
        email_placeholder.style.transform = "translateY(100%)";
    })
})

email.addEventListener("focusout", function() {
    if (email.value.length == 0) {
        email_placeholder.style.animation = "input-placeholder-animation-2 0.4s ease";

        email_placeholder.addEventListener("animationend", function() {
            email_placeholder.style.animation = '';
            email_placeholder.style.top = "50%";
            email_placeholder.style.zIndex = "5";
            email_placeholder.style.fontSize = "1.5vw";
            email_placeholder.style.transform = "translateY(-50%)";
        })
    }
})

const password = document.getElementById("password");
const password_placeholder = document.getElementById("password-placeholder");

password.addEventListener("focus", function() {
    password_placeholder.style.animation = "input-placeholder-animation 0.4s ease";

    password_placeholder.addEventListener("animationend", function() {
        password_placeholder.style.animation = '';
        password_placeholder.style.top = "-100%";
        password_placeholder.style.zIndex = "6";
        password_placeholder.style.fontSize = "1.2vw";
        password_placeholder.style.transform = "translateY(100%)";
    })
})

password.addEventListener("focusout", function() {
    if (password.value.length == 0) {
        password_placeholder.style.animation = "input-placeholder-animation-2 0.4s ease";

        password_placeholder.addEventListener("animationend", function() {
            password_placeholder.style.animation = '';
            password_placeholder.style.top = "50%";
            password_placeholder.style.zIndex = "5";
            password_placeholder.style.fontSize = "1.5vw";
            password_placeholder.style.transform = "translateY(-50%)";
        })
    }
})

const svg_image = document.getElementById("login-svg");
const svg_text = document.getElementById("login-svg-text");
const svg_next1 = document.getElementById("logo-svg-next1");
const svg_next2 = document.getElementById("logo-svg-next2");
const svg_next3 = document.getElementById("logo-svg-next3");

let count = 1;

addEventListener("DOMContentLoaded", function() {
    svg_next1.style.backgroundColor = "#6C63FF";

    setInterval(function() {
        if (count === 1) {
            console.log("1")
            svg_2();
            count = 2;
        } else if (count === 2) {
            console.log("2")
            svg_3();
            count = 3;
        } else if (count === 3) {
            console.log("3")
            svg_1();
            count = 1;
        }
    }, 2500)
})

function svg_1() {
    svg_image.style.animation = "fade_out 1s ease";

    svg_image.addEventListener("animationend", function() {
        svg_image.src = "/static/images/worktime.svg"
        svg_image.style.animation = "fade_in 1s ease";

        svg_image.addEventListener("animationend", function() {
            svg_image.animation = '';
        })
    })

    svg_text.style.animation = "fade_out 1s ease";

    svg_image.addEventListener("animationend", function() {
        svg_text.style.animation = '';
        svg_text.innerText = "Learn new words, and become a person with high English level."
        svg_text.style.animation = "fade_in 1s ease";
    })

    svg_next1.style.animation = "fade_in_button 1s ease";
    svg_next3.style.animation = "fade_out_button 1s ease";

    svg_next1.addEventListener("animationend", function() {
        svg_next1.style.backgroundColor = "#6C63FF";
    })
}

function svg_2() {
    svg_image.style.animation = "fade_out 1s ease";

    svg_image.addEventListener("animationend", function() {
        svg_image.src = "/static/images/designer.svg"
        svg_image.style.animation = "fade_in 1s ease";
    })

    svg_text.style.animation = "fade_out 1s ease";

    svg_image.addEventListener("animationend", function() {
        svg_text.style.animation = '';
        svg_text.innerText = "Learn new words, and with high English level."
        svg_text.style.animation = "fade_in 1s ease";
    })

    svg_next1.style.animation = "fade_out_button 1s ease";
    svg_next2.style.animation = "fade_in_button 1s ease";

    svg_next2.addEventListener("animationend", function() {
        svg_next1.style.backgroundColor = "#D9D9D9";
        svg_next2.style.backgroundColor = "#6C63FF";
        svg_next3.style.backgroundColor = "#D9D9D9";

        svg_next3.style.animation = '';
        svg_next2.style.animation = '';
        svg_next1.style.animation = '';
    })
}

function svg_3() {
    svg_image.style.animation = "fade_out 1s ease";

    svg_image.addEventListener("animationend", function() {
        svg_image.src = "/static/images/teachers.svg"
        svg_image.style.animation = "fade_in 1s ease";

        svg_image.addEventListener("animationend", function() {
            svg_image.animation = '';
        })
    })

    svg_text.style.animation = "fade_out 1s ease";

    svg_image.addEventListener("animationend", function() {
        svg_text.style.animation = '';
        svg_text.innerText = "Learn new words, level."
        svg_text.style.animation = "fade_in 1s ease";
    })

    svg_next2.style.animation = "fade_out_button 1s ease";
    svg_next3.style.animation = "fade_in_button 1s ease";

    svg_next3.addEventListener("animationend", function() {
        svg_next1.style.backgroundColor = "#D9D9D9";
        svg_next2.style.backgroundColor = "#D9D9D9";
        svg_next3.style.backgroundColor = "#6C63FF";

        svg_next3.style.animation = '';
        svg_next2.style.animation = '';
        svg_next1.style.animation = '';
    })
}