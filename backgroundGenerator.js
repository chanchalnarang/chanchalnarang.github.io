var input1=document.getElementById("color1");
var input2=document.getElementById("color2");
var body=document.getElementById("grad1");
var h3=document.querySelector("h3");
input1.addEventListener("input",function(){

    
body.style.background="linear-gradient(to right,"+input1.value+","+input2.value+")";


});
input2.addEventListener("input",function(){
    body.style.background="linear-gradient(to right,"+input1.value+","+input2.value+")";

    
    });

body.style