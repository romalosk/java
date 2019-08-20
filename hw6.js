var block = document.getElementsByClassName('button');
block.onclick = function changerstyle () {
    block.style.backgroundColor = "green";
};

block.addEventListener("click", changerstyle);