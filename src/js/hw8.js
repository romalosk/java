var input = document.querySelector('.date__input');
input.oninput = function () {
    document.getElementsByClassName('date__result').innerHTML = input.value;
};