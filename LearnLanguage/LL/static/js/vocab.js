const edit_div = document.getElementById("edit-div");
const edit_back = document.getElementById("edit-back");
const edit_header = document.getElementById("edit-header");
const edit_input = document.getElementById("edit-list-input");
const edit_input2 = document.getElementById("edit-list-input2");
const edit_cancel = document.getElementById("edit-list-cancel");
const edit_save = document.getElementById("edit-list-save");
const remove_confirmation_div = document.getElementById("delete-confimation-div");
const remove_confirmation_back = document.getElementById("delete-confimation-back");
const remove_confirmation_header = document.getElementById("delete-confimation-header");
const warning_div = document.getElementById("warning");
const warning_text = document.getElementById("warning-text");
let old_word = "";
let old_meaning = "";
let word_pk_for_confirm = 0;

function open_edit_div(word, meaning) {
    edit_div.style.display = "block";
    edit_input.placeholder = word;
    edit_input2.placeholder = meaning;
    edit_header.innerHTML = `<b style="color: greenyellow;"> | </b>Edit the word: ${word}`;
    old_word = word;
    old_meaning = meaning;
}

edit_back.addEventListener("click", function() {
    edit_div.style.display = "none";
})

function cancel_edit_div() {
    edit_div.style.display = "none";
}

function save_edit_div() {
    edit_div.style.display = "none";
    
    const warning_div = document.getElementById("warning");
    const warning_text = document.getElementById("warning-text");
    
    warning_div.style.display = 'block';
    warning_div.style.animation = 'warning-animation 1s ease';
    warning_div.style.backgroundColor = "green";
    warning_text.innerText = "Changes saved succsessfully!";
    warning_text.style.color = "white";
    
    warning_div.addEventListener("animationend", function() {
        warning_div.style.animation = '';
        warning_div.style.display = "block";
        
        setTimeout(function() {
            warning_div.style.animation = 'warning-animation2 2s ease';
    
            warning_div.addEventListener("animationend", function() {
                warning_div.style.animation = '';
                warning_div.style.display = "none";
                warning_div.style.backgroundColor = '';
                warning_text.style.color = '';
            });
        }, 1500);
    });

    fetch("/edit_word/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            "old_word": old_word,
            "old_meaning": old_meaning,
            "new_word": edit_input.value,
            "new_meaning": edit_input2.value,
        }),
    })
    .then(response => response.json())
    .then(data => {
        let done = data.done;

        if (done == false) {
            warning_div.style.display = 'block';
            warning_div.style.animation = 'warning-animation 1s ease';
            warning_text.innerText = "Please fill in all the fields above";
            
            warning_div.addEventListener("animationend", function() {
                warning_div.style.animation = '';
                warning_div.style.display = "block";
                
                setTimeout(function() {
                    warning_div.style.animation = 'warning-animation2 2s ease';
            
                    warning_div.addEventListener("animationend", function() {
                        warning_div.style.animation = '';
                        warning_div.style.display = "none";
                    });
                }, 1500);
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function delete_word(word, pk) {
    remove_confirmation_div.style.display = "block";
    remove_confirmation_header.innerHTML = `<b style="color: red;"> | </b>Do you want to delete the word: ${word}?`;
    word_pk_for_confirm = pk;
}

function cancel_confirm_div() {
    remove_confirmation_div.style.display = "none";
}

remove_confirmation_back.addEventListener("click", function() {
    remove_confirmation_div.style.display = "none";
})

function confirm_confirm_div() {
    fetch("/remove_word/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            "pk": word_pk_for_confirm,
        }),
    })
    .then(response => response.json())
    .then(data => {
        let done = data.done;

        remove_confirmation_div.style.display = "none";

        if (done == true) {
            warning_div.style.display = 'block';
            warning_div.style.animation = 'warning-animation 1s ease';
            warning_text.innerText = "Please fill in all the fields above";
            
            warning_div.addEventListener("animationend", function() {
                warning_div.style.animation = '';
                warning_div.style.display = "block";
                
                setTimeout(function() {
                    warning_div.style.animation = 'warning-animation2 2s ease';
            
                    warning_div.addEventListener("animationend", function() {
                        warning_div.style.animation = '';
                        warning_div.style.display = "none";
                    });
                }, 1500);
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}