

// 4. Create an unordered list. Allow users to add and remove list items dyanmically using buttons.

var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var inp = document.querySelector("input");
var ul = document.querySelector('ul');

var li;

add.addEventListener("click" , function(){
  if(inp.value.trim() === ''){}
  else{
    li = document.createElement('li');
    li.textContent = inp.value;
    console.log(li);
    ul.appendChild(li);
    inp.value = "";
  }
})

remove.addEventListener("click" , function(){
  ul.removeChild(li);
})


// 6. Create a tabbed interface where clicking on tabs displays different content sections without page reload.

var home = document.querySelector('#home');
var about = document.querySelector('#about');
var contact = document.querySelector('#contact');

var hometext = document.querySelector('#home-text');
var abouttext = document.querySelector('#about-text');
var contc = document.querySelector('#contact-text');

home.addEventListener("click" , function(){
  othtext();
  hometext.style.display ='block';
  hometext.style.width = "30%";
})

about.addEventListener("click" , function(){
  othtext();
  abouttext.style.display ='block';
})

contact.addEventListener("click" , function(){
  othtext();
  contc.style.display ='block';
  contc.style.width ='25%';
})

function othtext(){
  document.querySelectorAll("h3").forEach(function(h3){
    h3.style.display = "none";
  })
}


// 9. Build a character counter for a text area or input field, which updates real-time as the user types and enforces a character limit.

var textarea = document.querySelector("textarea");
var counter = document.querySelector("#counter");


textarea.addEventListener("input" , function(){
  console.log(textarea.value);
  console.log(textarea.value.length);
  counter.textContent = textarea.value.length;

})

// 10. Show a progress bar which shows how much page has been scrolled. 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

