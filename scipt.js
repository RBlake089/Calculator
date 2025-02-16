JS
// variables 
//Dom Elements 
let displayElement = document.getElementById("display");//<div id="display"></div>


// Functions 
function handleButtonClick(displayNumber){
  let number = displayNumber.textContent;
  console.log(number)
  return number; 
}