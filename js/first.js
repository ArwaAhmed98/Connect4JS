var linkToPage1 = document.getElementById("start")  
if(linkToPage1){
linkToPage1.addEventListener("click", function(e){
 e.preventDefault();
    if(location.search){ 
         window.location.href = "Middle.html" + location.search;
     }
 });


}




empt = document.forms["form1"]["name"].value;
// document.getElementById("start").onclick = function () {
//     if (required()) {
//         location.href = "/html/Middle.html";
        

//     }

// };


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

