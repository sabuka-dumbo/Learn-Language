const start_button = document.getElementById("start_button");

if (window.location.pathname === "/listening_test/") {
    start_test();
} else if (window.location.pathname === "/word_test/") {
    start_test2();
}

function start_test() {
    const start_div = document.getElementById("start-div");

    start_div.style.display = "block";
    start_div.style.animation = "start_test 1.5s ease";

    start_div.addEventListener("animationend", function() {
        start_div.style.animation = '';
        start_div.style.opacity = "100%";
    })
}

function start_test2() {
    const start_div = document.getElementById("start-div2");

    start_div.style.display = "block";
    start_div.style.animation = "start_test 1.5s ease";

    start_div.addEventListener("animationend", function() {
        start_div.style.animation = '';
        start_div.style.opacity = "100%";
    })
}

function start_test3() {
    const start_div = document.getElementById("start-div");
    const listening_test_div = document.getElementById("test-variant-1");

    start_div.style.animation = "start_test2 1.5s ease";

    start_div.addEventListener("animationend", function() {
        start_div.style.animation = '';
        start_div.style.opacity = "0%";
        start_div.style.display = "none";

        listening_test_div.style.animation = "start_test 1.5s ease";
        listening_test_div.style.display = "block";

        listening_test_div.addEventListener("animationend", function() {
            listening_test_div.style.animation = '';
        })
    })
}

function start_test4() {
    const start_div = document.getElementById("start-div2");
    const word_test_div = document.getElementById("test-variant-3");

    start_div.style.animation = "start_test2 1.5s ease";

    start_div.addEventListener("animationend", function() {
        start_div.style.animation = '';
        start_div.style.opacity = "0%";
        start_div.style.display = "none";

        word_test_div.style.animation = "start_test 1.5s ease";
        word_test_div.style.display = "block";

        word_test_div.addEventListener("animationend", function() {
            word_test_div.style.animation = '';
        })
    })
}