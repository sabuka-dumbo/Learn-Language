const email_input = document.getElementById("email");
const email_placeholder = document.getElementById("email-placeholder");

email_input.addEventListener("focus", function() {
    if (email_input.value >= 1)
    email_placeholder.style.animation = "email-animation 0.4s ease";
    email_input.style.outline = "black 1px solid";

    email_placeholder.addEventListener("animationend", function() {
        email_placeholder.style.animation = '';
        email_placeholder.style.top = "-1.2vw";
        email_placeholder.style.left = "20%";
        email_placeholder.style.fontSize = "1.5vw";
    })
})

email_input.addEventListener("focusout", function() {
    email_placeholder.style.animation = "email-animation-2 0.4s ease";
    email_input.style.outline = '';

    email_placeholder.addEventListener("animationend", function() {
        email_placeholder.style.animation = '';
        email_placeholder.style.top = '';
        email_placeholder.style.left = '';
        email_placeholder.style.fontSize = '';
    })
})