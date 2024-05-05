const edit_div = document.getElementById("edit-div");
const edit_back = document.getElementById("edit-back");
const edit_header = document.getElementById("edit-header");
const edit_input = document.getElementById("edit-list-input");
const edit_input2 = document.getElementById("edit-list-input2");
const edit_cancel = document.getElementById("edit-list-cancel");
const edit_save = document.getElementById("edit-list-save");

function open_edit_div(word, meaning) {
    edit_div.style.display = "block";
    edit_input.placeholder = word;
    edit_input2.placeholder = meaning;
    edit_header.innerHTML = `<b style="color: greenyellow;"> | </b>Edit the word: ${word}`;
}

edit_back.addEventListener("click", function() {
    edit_div.style.display = "none";
})

function cancel_edit_div(word, meaning) {
    edit_div.style.display = "none";
}

function save_edit_div(word, meaning) {
    edit_div.style.display = "none";
    const warning_div = document.getElementById("warning");
    const warning_text = document.getElementById("warning-text");
    
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