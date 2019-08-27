var input = document.body.children[0];
function changedate() {
    document.getElementById('result').innerHTML = input.value;
};
input.oninput = changedate;
input.addEventListener("change", changedate);