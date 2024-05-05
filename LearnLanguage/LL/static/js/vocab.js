function open_edit_div(word, meaning) {
    const edit_div = document.getElementById("edit-div");
    const edit_input = document.getElementById("edit-list-input");
    const edit_input2 = document.getElementById("edit-list-input2");

    edit_div.style.display = "block";
    edit_input.placeholder = word;
    edit_input2.placeholder = meaning;
}