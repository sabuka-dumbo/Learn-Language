const email_input = document.getElementById("email");
const email_placeholder = document.getElementById("email-placeholder");

email_input.addEventListener("focus", function() {
    email_placeholder.style.animation = "email-animation 0.4s ease";

    email_input.addEventListener("animationend", function() {
        email_placeholder.style.animation = '';
        email_placeholder.style.top = "-1.2vw";
        email_placeholder.style.left = "20%";
        email_placeholder.style.fontSize = "1.5vw";
    })
})