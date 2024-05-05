const edit_div = document.getElementById("edit-div");
const edit_back = document.getElementById("edit-back");
const edit_header = document.getElementById("edit-header");
const edit_input = document.getElementById("edit-list-input");
const edit_input2 = document.getElementById("edit-list-input2");

function open_edit_div(word, meaning) {
    edit_div.style.display = "block";
    edit_input.placeholder = word;
    edit_input2.placeholder = meaning;
    edit_header.innerHTML = `<b style="color: greenyellow;"> | </b>Edit the word: ${word}`;
}

edit_back.addEventListener("click", function() {
    edit_div.style.display = "none";
})