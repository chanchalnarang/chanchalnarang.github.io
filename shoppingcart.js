let courses=document.querySelector('#courses-list');
let cartContent=document.querySelector('#cart-content tbody');
let clearCart=document.querySelector('#clear-cart');
eventListeners();

function eventListeners(){
    courses.addEventListener("click",addcourse);
    cartContent.addEventListener("click",removeCourse);
    document.addEventListener('DOMContentLoaded',onLoadfromLs);
    clearCart.addEventListener("click",clearLocalStorage);
}
function clearLocalStorage() {
    localStorage.clear();
}
function addcourse(e){
    e.preventDefault();
if(e.target.classList.contains('add-to-cart')){
    const course=e.target.parentElement.parentElement;
getcourseInfo(course);
}

}


function onLoadfromLs(){
   
    var courses=getcoursesfromls();
    console.log(courses);
    courses.forEach(function(course){
        const row= document.createElement('tr');
        row.innerHTML=`<tr style="width:100px;">
                    <td> <img src="${course.image}"</td>
                    <td> ${course.title}</td>
                    <td> ${course.price}</td>
                   <td> <a  class="remove" href="#" data-id="${course.id}">X</a></td>
        </tr>`;
        cartContent.appendChild(row);
    })
}

function removeCourse(e){
if(e.target.classList.contains('remove')){
    alert("course removed");
    let course= e.target.parentElement.parentElement;
    var courseId=course.querySelector('a').getAttribute('data-id');
    course.remove();
    
    //let courseId=e
}
console.log(courseId);
removefromls(courseId);
}
 function removefromls(id){
     var courses=getcoursesfromls();
     courses.forEach(function(coursels,index){
        if(coursels.id===id){
            console.log("matched");
            courses.splice(index,1);
            console.log(courses);
            localStorage.setItem('courses',JSON.stringify(courses));
        }

     });
 }
function getcourseInfo(course){

    var courseInfo={
image:course.querySelector('img').src,
title:course.querySelector('h4').textContent,
price:course.querySelector('.price span').textContent,
id:course.querySelector('a').getAttribute('data-id')

    }
   addIntocart(courseInfo);
    
}
function clearLocalstorage(){
    localStorage.clear();
}
function addIntocart(courseInfo){
const row= document.createElement('tr');
row.innerHTML=`<tr style="width:100px;">
            <td> <img src="${courseInfo.image}"</td>
            <td> ${courseInfo.title}</td>
            <td> ${courseInfo.price}</td>
           <td> <a  class="remove" href="#" data-id="${courseInfo.id}">X</a></td>
</tr>`;
cartContent.appendChild(row);
var courseAdded =getcoursesfromls();
courseAdded.push(courseInfo);
console.log(courseAdded);
localStorage.setItem('courses',JSON.stringify(courseAdded));
}

function getcoursesfromls(){
    let courses;

    // if something exist on storage then we get the value, otherwise create an empty array
    if(localStorage.getItem('courses') === null) {
         courses = [];
    } else {
         courses = JSON.parse(localStorage.getItem('courses') );
    }
    return courses;
}
