function get(enteredvalue) {
    document.getElementById("textview").value += enteredvalue;
}

function Enter() {
    let x = document.getElementById("textview").value;
    let y = eval(x);
    document.getElementById("textview").value = y;
}

function clear() {
    document.getElementById("textview").value = "";
}

function allClear() {
    document.getElementById("textview").value = "";
}

function none() {
    document.getElementById("textview").value = "";
}