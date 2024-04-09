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

if (window.innerWidth > 680) {
    password.addEventListener("focus", function() {
        password_placeholder.style.animation = "input-placeholder-animation-device 0.4s ease";

        password_placeholder.addEventListener("animationend", function() {
            password_placeholder.style.animation = '';
            password_placeholder.style.top = "-100%";
            password_placeholder.style.zIndex = "6";
            password_placeholder.style.fontSize = "3vw";
            password_placeholder.style.transform = "translateY(100%)";
        })
    })

    password.addEventListener("focusout", function() {
        if (password.value.length == 0) {
            password_placeholder.style.animation = "input-placeholder-animation-device-2 0.4s ease";

            password_placeholder.addEventListener("animationend", function() {
                password_placeholder.style.animation = '';
                password_placeholder.style.top = "50%";
                password_placeholder.style.zIndex = "5";
                password_placeholder.style.fontSize = "4vw";
                password_placeholder.style.transform = "translateY(-50%)";
            })
        }
    })
} else {
    password.addEventListener("focus", function() {
        password_placeholder.style.animation = "input-placeholder-animation 0.4s ease";

        password_placeholder.addEventListener("animationend", function() {
            password_placeholder.style.animation = '';
            password_placeholder.style.top = "-100%";
            password_placeholder.style.zIndex = "6";
            password_placeholder.style.fontSize = "2.5vw";
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
                password_placeholder.style.fontSize = "3.5vw";
                password_placeholder.style.transform = "translateY(-50%)";
            })
        }
    })
}

const svg_image = document.getElementById("login-svg");
const svg_text = document.getElementById("login-svg-text");
const svg_next1 = document.getElementById("logo-svg-next1");
const svg_next2 = document.getElementById("logo-svg-next2");
const svg_next3 = document.getElementById("logo-svg-next3");

let count = 1;

addEventListener("DOMContentLoaded", function() {
    svg_next1.style.backgroundColor = "#6C63FF";

    setInterval(function() {
        if (count == 1) {
            svg_2();
            count = 2;
        } else if (count == 2) {
            svg_3();
            count = 3;
        } else if (count == 3) {
            svg_1();
            count = 1;
        }
    }, 2500)
})

function svg_1() {
    svg_image.style.animation = "fade_out 1s ease";

    svg_image.addEventListener("animationend", function handler() {
        svg_image.src = "/static/images/worktime.svg"
        svg_image.style.animation = "fade_in 1s ease";

        svg_image.removeEventListener("animationend", handler);
    })

    svg_text.style.animation = "fade_out 1s ease";

    svg_text.addEventListener("animationend", function handler() {
        svg_text.innerText = "Embark on a journey to expand your vocabulary and elevate your English fluency effortlessly.";
        svg_text.style.animation = "fade_in 1s ease";

        svg_text.removeEventListener("animationend", handler);
    })

    svg_next3.style.animation = "fade_out_button 1s ease";
    svg_next1.style.animation = "fade_in_button 1s ease";

    svg_next3.addEventListener("animationend", function handler() {
        svg_next3.style.animation = '';
        svg_next3.style.backgroundColor = '';
        svg_next3.removeEventListener("animationend", handler);
    })

    svg_next1.addEventListener("animationend", function handler() {
        svg_next1.style.animation = '';
        svg_next1.style.backgroundColor = "#6C63FF";
        svg_next1.removeEventListener("animationend", handler);
    })
}

function svg_2() {
    svg_image.style.animation = "fade_out 1s ease";

    svg_image.addEventListener("animationend", function handler() {
        svg_image.src = "/static/images/designer.svg";
        svg_image.style.animation = "fade_in 1s ease";

        svg_image.removeEventListener("animationend", handler);
    })

    svg_text.style.animation = "fade_out 1s ease";

    svg_text.addEventListener("animationend", function handler() {
        svg_text.innerText = "Unlock a world of new vocabulary and elevate your English proficiency.";
        svg_text.style.animation = "fade_in 1s ease";

        svg_text.removeEventListener("animationend", handler);
    })

    svg_next1.style.animation = "fade_out_button 1s ease";
    svg_next2.style.animation = "fade_in_button 1s ease";

    svg_next1.addEventListener("animationend", function handler() {
        svg_next1.style.animation = '';
        svg_next1.style.backgroundColor = '';
        svg_next1.removeEventListener("animationend", handler);
    })

    svg_next2.addEventListener("animationend", function handler() {
        svg_next2.style.animation = '';
        svg_next2.style.backgroundColor = "#6C63FF";
        svg_next2.removeEventListener("animationend", handler);
    })
}

function svg_3() {
    svg_image.style.animation = "fade_out 1s ease";

    svg_image.addEventListener("animationend", function handler() {
        svg_image.src = "/static/images/teachers.svg";
        svg_image.style.animation = "fade_in 1s ease";

        svg_image.removeEventListener("animationend", handler);
    })

    svg_text.style.animation = "fade_out 1s ease";

    svg_text.addEventListener("animationend", function handler() {
        svg_text.innerText = "Master typing with precision, eliminating errors and boosting your speed.";
        svg_text.style.animation = "fade_in 1s ease";

        svg_text.removeEventListener("animationend", handler);
    })

    svg_next2.style.animation = "fade_out_button 1s ease";
    svg_next3.style.animation = "fade_in_button 1s ease";

    svg_next2.addEventListener("animationend", function handler() {
        svg_next2.style.animation = '';
        svg_next2.style.backgroundColor = '';
        svg_next2.removeEventListener("animationend", handler);
    })

    svg_next3.addEventListener("animationend", function handler() {
        svg_next3.style.animation = '';
        svg_next3.style.backgroundColor = "#6C63FF";
        svg_next3.removeEventListener("animationend", handler);
    })
}

const error_bar = document.getElementById("error");
const error_text = document.getElementById("error-text");

addEventListener("DOMContentLoaded", function() {
    if (error_text.innerText != '') {
        error_bar.style.animation = "error-animation 1.2s ease";

        error_bar.addEventListener("animationend", function() {
            error_bar.style.animation = '';
            error_bar.style.top = "0%";
        })
    }
})