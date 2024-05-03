const start_button = document.getElementById("start_button");
let score = 0;

if (window.location.pathname === "/listening_test/") {
    start_test();
} else if (window.location.pathname === "/word_test/") {
    start_test2();
} else if (window.location.pathname === "/translate_test/") {
    start_test6();
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

    fetch("/get_word2/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ }),
    })
    .then(response => response.json())
    .then(data => {
        let word = data.word;
        const main_word = document.getElementById("main_word");
        const question_in_div = document.getElementById("test-div-question");

        question_in_div.innerText = "Write the word '" + word + "':";
        main_word.value = word;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function start_test5() {
    const start_div = document.getElementById("start-div3");
    const word_test_div = document.getElementById("test-variant-2");

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

function start_test6() {
    const start_div = document.getElementById("start-div3");

    start_div.style.display = "block";
    start_div.style.animation = "start_test 1.5s ease";

    start_div.addEventListener("animationend", function() {
        start_div.style.animation = '';
        start_div.style.opacity = "100%";
    })
}

function next_test_variant_3() {
    const word_field1 = document.getElementById("word_field1");
    const word_field2 = document.getElementById("word_field2");
    const word_field3 = document.getElementById("word_field3");
    const word_field4 = document.getElementById("word_field4");
    const word_field5 = document.getElementById("word_field5");
    const main_word = document.getElementById("main_word");

    fetch("/check_test3/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            "word_field1": word_field1.value,
            "word_field2": word_field2.value,
            "word_field3": word_field3.value,
            "word_field4": word_field4.value,
            "word_field5": word_field5.value,
            "main_word": main_word.value,
         }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.success_percentage)
    })
    .catch(error => {
        console.error('Error:', error);
    });  
}