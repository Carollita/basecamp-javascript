var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function colorNumber(){
  //var color = document.getElementsByTagName('span')[0];
  var colorNumber = document.getElementById("currentNumber");  
    if(currentNumber < 0){ 
    colorNumber.style.color = "lightcoral";
} 
  else if (currentNumber === 0){
    colorNumber.style.color = "black";
  }
  else {
    colorNumber.style.color = "limegreen";
}
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  colorNumber();
}

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  colorNumber();
}