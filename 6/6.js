
var input = document.querySelector("input");

var data = [
  {name : "vinayak", src : "https://images.unsplash.com/photo-1572651198362-377a3298e433?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" } ,
  {name : "vamika", src : "https://images.unsplash.com/photo-1546358321-2754954c3a43?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" } ,
  {name : "veda", src : "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" } ,
  {name : 'abhi', src : 'https://images.unsplash.com/photo-1681510477644-ba103d54fc75?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  {name : 'aman', src : 'https://images.unsplash.com/photo-1697653489143-a07cf494e7b0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  {name : 'vihaan', src : 'https://images.unsplash.com/photo-1711964429491-a8200d660b6d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  {name : 'amrita', src : 'https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} ,
  {name : 'veer', src : 'https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  {name : 'vaani', src : 'https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} ,
]

var pers = "";

data.forEach(function(elem){
  pers += `<div class="person">
  <div class="img">
    <img src="${elem.src}" alt="">
  </div>
  <h4>${elem.name}</h4>
</div>`
})

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input" , function(){
  var matching = data.filter(function(e){
    return e.name.startsWith(input.value);
  })
  console.log(matching)

  var newusers = ""
  matching.forEach(function(elem){
    newusers += `<div class="person">
    <div class="img">
      <img src="${elem.src}" alt="">
    </div>
    <h4>${elem.name}</h4>
  </div>`
  })
  
  document.querySelector(".people").innerHTML = newusers;
})

// filter function uses return and givs a new array

