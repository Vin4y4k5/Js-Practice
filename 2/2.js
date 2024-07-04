// Modifying Elements

// textContent is used for text manipulation and innerHTML is used for tag manipulation. += puts text content after the selected tag.

var btn = document.querySelector("button");
btn.textContent = "download";

var h1 = document.querySelector("h1");
h1.textContent += " how are you ";

var h2 = document.querySelector("h2");
h2.innerHTML +=  "<i> ipsum dolor sit</i>";


// Manipulating Styles and Classes


//styles
var h1 = document.querySelector("h1");
h1.style.color = "blue";
h1.style.fontSize = '2vw';
h1.style.padding = '1vw';

//classList
var h2 = document.querySelector("h2");
h2.classList.add('make');
h2.classList.remove('make');
h2.style.padding = '1vw';


// Creating and Deleting Elements

var h4 = document.createElement('h4');
h4.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing.';
h4.classList.add('7');
h4.style.fontSize = '3vw';
h4.style.letterSpacing = '0.5vw';
h4.style.fontStyle = 'italic';
h4.style.padding = '1vw';


document.querySelector("body").appendChild(h4);
// document.querySelector("body").removeChild(h4);

// Event handling

// any kind of action done on an event it raises automatically and if you have not created any event listener then it ignores the event but if you have created an event listener then the action occurs on the listener.


var btn = document.querySelector("button");
btn.addEventListener('click',function(){
  btn.textContent = 'loading...';
  btn.style.backgroundColor = "white";

})

