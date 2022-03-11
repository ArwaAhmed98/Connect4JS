
// var name=location.search.split("?")[1].split("&")[0].split("=")[1];
// document.getElementById("info").innerHTML=name;


//var name=document.cookie.split(";")[0].split("=")[1];
//document.getElementById("FormInfo").innerHTML=name;

t = localStorage.getItem("empt")
document.getElementById("info").innerHTML= t;

document.getElementById("btn1").onclick = function () {
 
        location.href = "/html/second.html";
        

    

};
document.getElementById("btn2").onclick = function () {
 
        location.href = "/html/second2.html";
    
};
