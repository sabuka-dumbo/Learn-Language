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