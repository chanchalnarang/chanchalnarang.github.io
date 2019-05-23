var tweet=document.querySelector('#tweet').value;
var form=document.querySelector("#form");
var tweetlist=document.querySelector("#tweet-list");

//EventListeners
eventlisters();
function eventlisters(){
    form.addEventListener("submit",newTweet);
    tweetlist.addEventListener("click",removeTweet);
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}

function newTweet(e){
e.preventDefault();
var tweet=document.querySelector('#tweet').value;
let ul=document.createElement('ul');
let li=document.createElement('li');
let textnode=li.textContent=tweet;
let removebtn=document.createElement('a');
removebtn.textContent="X";
removebtn.classList='remove-tweet';
tweetlist.appendChild(ul);
ul.appendChild(li);
li.appendChild(removebtn);
addTweetLocalStorage(tweet);

// Print the alert
alert('Tweet Added');

this.reset();
}
function addTweetLocalStorage(tweet){
    let tweets = getTweetsFromStorage();

    // Add the tweet into the array
    tweets.push(tweet);

    // Convert tweet array into String
    localStorage.setItem('tweets', JSON.stringify( tweets )  );
}
function getTweetsFromStorage(){

    let tweets;
     const tweetsLS = localStorage.getItem('tweets');
     // Get the values, if null is returned then we create an empty array
     if(tweetsLS === null) {
          tweets = [];
     } else {
          tweets = JSON.parse( tweetsLS ); 
     }
     return tweets;
}
// Prints Local Storage Tweets on Load
function localStorageOnLoad() {
    let tweets = getTweetsFromStorage();

    // Loop throught storage and then print the values
    tweets.forEach(function(tweet) {
         // Create the remove button
         const removeBtn = document.createElement('a');
         removeBtn.classList = 'remove-tweet';
         removeBtn.textContent = 'X';

         // Create an <li> element
         const li = document.createElement('li');
         li.textContent = tweet; 
         
         // Add the remove button to each tweet
         li.appendChild(removeBtn);

         // Add to the list
         tweetlist.appendChild(li);
    });
}

function removeTweet(e){
if(e.target.classList.contains('remove-tweet')){
    e.target.parentElement.remove();
}
}
function getFromls(){
    var tweets=localStorage.getItem('tweets');
    if(tweets==null){
        tweets=[];
    }
    else{
        tweets=JSON.parse(localStorage.getItem('tweets'));
    }
}