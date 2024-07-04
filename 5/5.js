
// Chatgpt solution

// 6. Create a tabbed interface where clicking on tabs displays different content sections without page reload.


function openTab(evt, tabName) {
  var i, tabContent, tabButtons;
  tabContent = document.getElementsByClassName("tab");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].className = tabButtons[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Display the default tab on page load
document.getElementById("tab1").style.display = "block";


// 7. Display a progress bar that updates in real-time, showing the progress of a task, download, or form submission.

var count = 0;
var pro = document.querySelector("#progress");
var h3 = document.querySelector("h3");

var int = setInterval(function(){
  if(count === 100){ 
    clearInterval(int);
    h3.style.opacity = "1";
   }
  count++;
  pro.style.width = count+ "%";
}, 20);

