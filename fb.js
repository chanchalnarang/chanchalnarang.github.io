var database=[{username:"chanchal",password:"123"}];
var newsfeed=[{username:"BOBBY",timeline:"So tired from all that learning!"},{username:"Sally",timeline:"Javascript is sooooo cool!"},{username:"Mitch",timeline:"Javascript is preeetyy cool!"}]

function signIn(){
nameInput=document.getElementById("username").value;
pass=document.getElementById("pwd").value;
console.log(nameInput +" "+pass);
for(var i=0;i<database.length;i++){
    if((database[i].username==nameInput)&&(database[i].password==pass)){
        console.log("you are signed IN");
        break;
    }
    else{
        console.log("wrong credentials");
    }
}


}