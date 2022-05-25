

function getPin(){
const createRandomValue = Math.round(Math.random()*10000);


const myString = createRandomValue + '';

  if(myString.length == 4){
      
      return createRandomValue;
  }
  else {
     return getPin();
  }
}

document.getElementById('generate-button').addEventListener('click',function(){
    const generateInput = document.getElementById('generate-input');
    const generatePin = getPin();
    
    generateInput.value = generatePin;
    
});

document.getElementById('key-pad').addEventListener('click',function(event){
    const numbers = event.target.innerText;
    const inputNumbers = document.getElementById('input-numbers');
    if(isNaN(numbers)){
         if(numbers == 'C'){
          inputNumbers.value = '';
         }
        
    }
    else{
        
     const previousInput = inputNumbers.value;
     const newNumber = previousInput + numbers;
     inputNumbers.value = newNumber;
    }
   
});

function pinVerify(){
    const generateInput = document.getElementById('generate-input').value;
    const inputNumbers = document.getElementById('input-numbers').value;
    const notifySuccess = document.getElementById('success');
    const notifyFail = document.getElementById('fail');

    if(generateInput == inputNumbers){
        
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
    }
    else{
       
        notifyFail.style.display = 'block';
        notifySuccess.style.display = 'none';

    }
}