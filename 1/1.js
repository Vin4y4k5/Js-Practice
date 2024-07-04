
console.log("hello")

var a = 2;
var b = 3;

console.log(a+b);

//for(Start; end; change){}

for(var a = 2; a<5 ; a++){

}

// start; while(end) { change; }

var a = 3;
while(a<45){
  a++;
}


// return and function

function abcd(){
  return 12;
}

var ans = abcd();
console.log(abcd()); 

// array

var users = [ "Vinayak" , "harsh" , "priya" , "Rahul"];
console.log(users[0])

// how to loop an array and for each element

var arr = [1, 2, 3, 4, 5];

arr.forEach(function(val){
  console.log("hey");
  console.log(val);
  console.log(val+val*val);
})

// objects

var obj = {};
var obj2 = new Object();

var obj = {
  name: "vinayak",
  age : 20
};

// this keyword in different Reference objects

// global - window (code outside function/braces)
console.log(this);

// function - window (caode inside function)
function abcd(){
  console.log(this);

};

abcd();

// method - object (function inside an object)
var obj = {
  name : function(){
    console.log(this);
  }
}

obj.name();

// function inside method (es5) - window
var obj2 = {
  name : function(){
    console.log(this.age)
    function childfnc(){
      console.log(this);
    }

    childfnc();
  },
  age : 24

}

obj2.name();

// function inside method (es6) - object
// arrow function takes value from its parent make this keyword according to that

var obj3 = {
  name : function(){
    const child = () => {
      console.log(this);
    }
    child();
  }
}

obj3.name();

var obj4 = {
  name : ()=>{
    const child = () => {
      console.log(this);
    }
    child();
  }
}

obj4.name();


// constructor function - new blank object
// by adding (new) before output constructor function creates black object

function add(){
  console.log(this);
}

ans = new add();


// event listener - element on which event listener is placed on or that element which is selected before him.

document.querySelector("button")
.addEventListener("click", function(){
  console.log(this);
})

// call apply bind  - these are three diffrent methods to call function by object that is (this keyword) and change its value from default (window). 

//call - have to put object above function fo rit to run
// apply - if function is demanding parameters then at call/apply we have to give params in array.
// bind - gives another function that can be used for later time.


const obj5 = { name : "vinayak" };

function abcd(){
  console.log(this);
}

abcd.call(obj5);
abcd.call();
abcd.call('king');
abcd.call(465);

function abcd(a, b, c){
  console.log(this, a, b, c);
}


abcd.apply(obj5,[1, 2, 3]);

obj6 = { name : "fnhf" };

function abcd(){
  console.log(this);
}
abcd.bind(obj6);

const baadmein = abcd.bind(obj6);
baadmein();

// Prototypal Inheritance - give children-objects same properties that parent constructor function creates in a prototype.



function makehuman(name , age){
  this.name = name;
  this.age = age;
}

makehuman.prototype.faq = 12;
makehuman.prototype.printMyName = function(){
  console.log(this.name);
}

const human1 = new makehuman("vinayak" , 25);

const human2 = new makehuman("gashgd" , 5);

//closures - any function which returns another function by using some value of the parent function is called closure

function counter(){
  var count = 0 ;
  return function (){
    count++;
    console.log(count);
  }
}

var fnc = counter();
fnc();
fnc();
fnc();

function timer(){
  var a = 20;
  return setTimeout(
    function(){
      console.log(a);
    } , 2000
  )
}

var ans = timer();

// Event Delegation = handling different elements(ids , class , tags) through parent where event listerner is placed.

var parent = document.querySelector("#parent");

parent.addEventListener('click' , function(detailes){
  console.log("works");
  console.log(detailes);
  console.log(detailes.target);
  if(detailes.target.id === "play"){
      console.log("play song");     
  }

  else if(detailes.target.id === "pause"){
    console.log("pause song");
  }
})

// High Order Functions - any function that accpets function in its parameter space and another case could be that any function that returns a function is a HOF.

// clouser uses variable necessarly while HOF does not.

function sip(){

}

sip(function(){});

function sop(){
  return function(){

  }
}

// error handling like a pro - try and catch
// this is an example to show error handling

function divide(a,b){
  try {
    if (b == 0){
      throw Error("Problem")
    }
    console.log(a/b);
  }
  catch(err){
    console.error(err);
  }
}

divide(12,0);

// Custom Events -- helps when line of codes is huge.
// Some examples of events - click , doubleclick , mouseover , input

const evt = new Event("home");

document.querySelector("button")
.addEventListener("mon", function(){
   alert("going home");
})

document.querySelector("button").dispatchEvent(evt);

// DOM manipulation  = controling whole HTML tag in html  in JavaScript

// change in selection while an event occur

// selection 
  // document.querySelector(); 

  // document.getElementById();
  // document.getElementsByClassName();
  // document.getElementsByClassName();
  // document.getElementsByTagName();


//id
var random = document.querySelector('#random');

//class
var classjs = document.querySelector('.classjs');
var p = document.querySelector('.p');

//tag
var h3 = document.querySelector("h3");

//if we have many h3 in the code so only first h3 will be selected and if we have to select all h3 then we have to use document.querySelectorALL(); for it

