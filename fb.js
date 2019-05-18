var database=[{username:"chanchal",password:"123"},{username:"Rudraansh",password:"1234"},{username:"SR",password:"12345"}];
var newsfeed=[{username:"BOBBY",timeline:"So tired from all that learning!"},{username:"Sally",timeline:"Javascript is sooooo cool!"},{username:"Mitch",timeline:"Javascript is preeetyy cool!"}]

function signIn(){
    nameInput=document.getElementById("username").value;
    pass=document.getElementById("pwd").value;
    console.log(nameInput +pass);
   for(var i=0;i<database.length;i++){
        if((database[i].username===nameInput)&&(database[i].password===pass)){
           
           newsfeed.forEach(function(news){
            var para = document.createElement("p");
            var node = document.createTextNode(news.username);
            para.appendChild(node);
            var element = document.getElementById("messages");
            element.appendChild(para);
            var para = document.createElement("p");
            var node = document.createTextNode(news.timeline);
            para.appendChild(node);
            var element = document.getElementById("messages");
            element.appendChild(para);
           
           });
           console.log("iff");
           break;
        } else{
                
                var element = document.getElementById("messages");
                element.innerText="Wrong credentials";
             }
    
       
    }
      
    
}


