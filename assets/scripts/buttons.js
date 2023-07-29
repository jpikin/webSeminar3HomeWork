let flag = false;
function changedColor() {
    let element = document.getElementById("001");
    element.classList.toggle('red');
    if (element.textContent == 'Элемент 1') {
        element.textContent = 'Элемент 2'
        flag = true;
    } else {
        element.textContent = 'Элемент 1'
        flag = false;
    }
}
function checkColor(){
    let lst = document.getElementById("lst001");
    if (flag) {
        lst.classList.add('red');
    } else {
        lst.classList.remove('red');
    }
}

let btn = document.getElementById("002");
btn.addEventListener("click", changedColor);


let btn2 = document.getElementById("003");
btn2.addEventListener("click", checkColor);