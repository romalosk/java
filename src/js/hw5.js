var div = document.createElement('div');
div.className = "block";
div.innerHTML = "JavaScript";
document.body.append(div);

///

console.log(document.getElementsByClassName("main")[0].innerHTML);

///

document.body.classList.add('discription', 'image');
console.log(document.body.className);