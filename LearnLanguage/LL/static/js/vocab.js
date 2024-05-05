function open_edit_div(word, meaning) {
    const edit_div = document.getElementById("edit-div");
    const edit_input = document.getElementById("edit-liist-input");
    const edit_input2 = document.getElementById("edit-liist-input2");

    edit_div.style.display = "block";
    edit_input.value = word;
    edit_input2.value = meaning;
}