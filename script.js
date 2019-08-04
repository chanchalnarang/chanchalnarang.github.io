



/* function login(){
    console.log("called");
 document.querySelector('#demo').innerHTML="Login success";
}
 */

 const imgList=document.querySelectorAll('img');
 
 for(let i=0;i<imgList.length;i++){
     imgList[i].onclick=function(){
         window.open(this.src ,'myImage','resizable=true,scrollable=yes,height=500px,width=500px');
     }
 }