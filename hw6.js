var block = document.getElementsByClassName("button-red")[0];
block.onclick = function changerstyle () {
    block.style.backgroundColor = "green";
    block.style.color = "white";
}

block.addEventListener("click", changerstyle);

///

var newblock = document.getElementsByClassName("button-green")[0];
newblock.onclick = function createblock () {
    let div = document.createElement('div');
    div.className = "button-blue";
    div.innerHTML = "Сюрприз!";
    document.body.append(div);
    newblock.removeEventListener("click", createblock);
}

newblock.addEventListener("click", createblock);