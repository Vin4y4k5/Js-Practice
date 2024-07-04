
// 1. Create an html page with a button. when the button is clicked , change the text of a paragragh element.

 var btn = document.querySelector("button");
 var p = document.querySelector("p");

 btn.addEventListener('click', function(){
  p.textContent = "hello";
 })


// 2.  Create a page with two images and a button . When the button is clicked , swap the source attribute of the images.

 var img1 = document.querySelector("#one");
 var img2 = document.querySelector("#two");

 var btn = document.querySelector("#swap");
 btn.addEventListener("click" , function(){
  var src1 = img1.src;
  var src2 = img2.src;

  img1.src = src2;
  img2.src = src1;
})


// 5. Build a countdown timer that starts when a button is clicked and updates in real time.

var start = document.querySelector("#start");
var stop = document.querySelector("#stop");

var h3 = document.querySelector('h3');
var int;

start.addEventListener("click" , function(){
  var count = 0;
  int = setInterval(function(){
    h3.textContent = count;
    count++;
  } , 1000);
})

// 1000 = 1sec

stop.addEventListener("click" , function(){
  clearInterval(int);
})


