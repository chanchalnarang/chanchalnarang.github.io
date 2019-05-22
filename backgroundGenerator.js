var input1=document.querySelector("#color1");
var input2=document.querySelector("#color2");
var body=document.querySelector("#grad1");
var h3=document.querySelector("h3");

function setGradient(){
    body.style.background="linear-gradient(to right,"
    +input1.value+","+input2.value+")";
h3.textContent=body.style.background  + ";"
}



