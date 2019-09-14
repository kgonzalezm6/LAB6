var nums = [4,5,3,6,2,8,7,1,9];

var selected = 0;

for (i = 0; i < 9; i++) {
  if (i == selected) {
    document.getElementById("array").innerHTML +=
      "<div class='bubble'><div class='num'>" +
      nums[i] +
      "</div><div class='num'>" +
      nums[i + 1] +
      "</div>";
  } else if (i == selected + 1) {
    document.getElementById("array").innerHTML += "";
  } else {
    document.getElementById("array").innerHTML +=
      "<div class='num'>" + nums[i] + "</div>";
  }
}

var counter = 0;
var numberOfPasses = 2;

function Swipe() {
  if (counter > nums.length - numberOfPasses) {
    counter = 0;
    numberOfPasses++;
  }
  
  if (nums[counter] > nums[counter + 1]) {
    var temp = nums[counter];
    nums[counter] = nums[counter + 1];
    nums[counter + 1] = temp;
    document.getElementById("array").innerHTML += "<style>.bubble .num:nth-child(1) { animation: numLeft 1s ease; } .bubble .num:nth-child(2) { animation: numLeft 1s ease; } .bubble { animation: numRight 1s ease; }</style>";
  }
  var vec = new Array(10), mayor, menor;
  vec = [4,5,3,6,2,8,7,1,9];
  mayor = vec[0];
  menor = vec[0];
  for (var i=0;i < 10; i++) {
    if (vec[i] > mayor) {
      mayor = vec[i];
      
    }
    if (vec[1]< menor) {
      menor = vec[i];
    }
    
  }
  function popup() {
    alert("Hola Ingeniero")
  }
  setTimeout(function(){ 
  document.getElementById("array").innerHTML = "";
   if (counter > nums.length - numberOfPasses) {
    counter = 0;
    numberOfPasses++;
  }
  for (i = 0; i < 9; i++) {
    if (i == counter) {
      document.getElementById("array").innerHTML +="<div class='bubble'><div class='num'>" +nums[i] +"</div><div class='num'>" +nums[i + 1] +"</div>";
    } else if (i == counter + 1) {
      document.getElementById("array").innerHTML += "";
    } else {
      document.getElementById("array").innerHTML +=
        "<div class='num'>" + nums[i] + "</div>";
    }
  }
  }, 1000);
  counter++;
}

  

