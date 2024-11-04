// Get value from user input

const getInputValue = function(id){
  const inputValue =  document.getElementById(id).value;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;

}

// Get inner text by id

const getTextValue = function(id){
  const textValue = document.getElementById(id).innerText;
  const textValueNumber = parseFloat(textValue);
  return textValueNumber;
}

// Toggole Button

function showSectionById(id){
  
  document.getElementById("history-section").classList.add("hidden"); 
  document.getElementById("donate-section").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden")
}

