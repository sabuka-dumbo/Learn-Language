const text = document.getElementById("textarea");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");

let word = false;

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
    body: JSON.stringify({  }),
})
.then(response => response.json())
.then(data => {
    
})
.catch(error => {
    console.error('Error:', error);
});