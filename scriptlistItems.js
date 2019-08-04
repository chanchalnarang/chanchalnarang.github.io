

function add(){
    var item=document.querySelector('#item').value;
     
var mainList=document.querySelector('ul');
  if(item.length>=3){
    let li=document.createElement('li');
    li.textContent=item;
    mainList.appendChild(li);
    document.querySelector('#error').textContent=' ';
  }
  else{
      document.querySelector('#error').textContent='text length should be 3 characters or more';
  }
   


}