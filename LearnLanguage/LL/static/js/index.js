const text = document.getElementById("textarea");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");

function send_word() {
    let word = true;

    if (radio1.checked) {
        word == true;
    } else {
        word == false;
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
    })
    .catch(error => {
        console.error('Error:', error);
    });
}