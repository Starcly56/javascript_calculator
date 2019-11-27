function get(enteredvalue) {
    document.getElementById("textview").value += enteredvalue;
}

function Enter() {
    let x = document.getElementById("textview").value;
    let y = eval(x);
    document.getElementById("textview").value = y;
}

function erase() {
    let erasedValue = document.getElementById("textview").value;
    erasedValue = erasedValue.slice(0, -1);
    document.getElementById("textview").value = erasedValue;
}

function allClear() {
    document.getElementById("textview").value = "";
}

function none() {
    document.getElementById("textview").value = "";
}