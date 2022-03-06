empt = document.forms["form1"]["name"].value;
document.getElementById("btn1").onclick = function () {
    if (required()) {
        location.href = "/html/second.html";
    }

};
document.getElementById("btn2").onclick = function () {
    if (required()) {
        location.href = "/html/second.html";
    }
};
function required() {
    empt = document.forms["form1"]["name"].value;
    if (empt == "") {
        alert("Please ener your name");
        return false;
    }
    else {
        alert('congrats!');
        return true;
    }
}
