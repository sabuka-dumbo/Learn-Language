const text = document.getElementById("textarea");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");

function send_word() {
    if (text.value != '') {
        let word = true;

        if (radio1.checked) {
            word = true;
        } else {
            word = false;
        }

        fetch("/add_word/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ word: text.value, is_word: word }),
        })
        .then(response => response.json())
        .then(data => {
            const new_word_div = document.getElementById("new_word");
            const new_word_textarea = document.getElementById("textarea");
            const new_word_radio1 = document.getElementById("radio1");
            const new_word_check = document.getElementById("new-word-check");

            new_word_div.style.animation = "fade_out 0.5s ease";
            new_word_check.style.animation = "fade_in 1s ease";
            new_word_check.style.display = "block";

            new_word_check.addEventListener("animationend", function() {
                new_word_check.style.animation = '';
            })
            
            new_word_div.addEventListener("animationend", function() {
                new_word_div.style.animation = '';
                new_word_div.style.display = "none";
            
                setTimeout(function() {
                    new_word_div.style.animation = "fade_in 0.5s ease";
                    new_word_div.style.display = "block";
                    new_word_check.style.animation = "fade_out 0.5s ease";
            
                    new_word_check.addEventListener("animationend", function() {
                        new_word_check.style.animation = '';
                        new_word_check.style.display = "none";
                    });

                    new_word_div.addEventListener("animationend", function() {
                        new_word_div.style.animation = '';
                        new_word_div.style.display = "block";
                    })
                }, 1000);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}

addEventListener("DOMContentLoaded", function() {
    let question_1 = "Translate the word: ";
    const question_h1 = document.getElementById("random-question");

    fetch("/get_word/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({  }),
    })
    .then(response => response.json())
    .then(data => {
        let word = data.word;

        if (word == '') {
            question_h1.innerText = '';
        } else {
            question_h1.innerText = question_1 + word + "?";
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });  
})