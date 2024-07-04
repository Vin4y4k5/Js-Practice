


// 3.  Create a Form with input fields and a submit button. Use Javascript to validate the form and display an error message if the input is invalid.


// node list is an array type structure that contains HTML tags.
// third method - loop

var form = document.querySelector("form");
var inputs = document.querySelectorAll('input[type = "text"]');
var h4 = document.querySelector('h4')


form.addEventListener("submit" , function(ev){
  ev.preventDefault();
  console.log(inputs.length);
  for(var i = 0 ; i<inputs.length ; i++){
    if (inputs[i].value.trim() === ''){
      h4.textContent = 'Error , some fields are blank.'
      h4.style.color = 'red'
    }
  }

})


