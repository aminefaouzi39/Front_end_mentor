const displayScreen = document.getElementById('input-field');
const buttons = document.querySelectorAll('.number');
let isStartOfNumber = true;
//Buttons display
buttons.forEach((button) => {
    button.addEventListener('click', function() {
      const numberToAdd = this.dataset.value;
      displayScreen.value += numberToAdd;
    });
});
//Clear button

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
  displayScreen.value = '';
});
//Delete button
const deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', () => {
  displayScreen.value = displayScreen.value.slice(0, -1);
});

const body = document.querySelector('body');
const circle = document.querySelector('.circle'),
upperTexts = document.querySelectorAll('.upper-text'),
label = document.querySelector('.label'),
keysContainer = document.querySelector('.keys-container'),
resetButton = document.querySelector('.clear'),
equalButton = document.querySelector('.equal'),
subButton = document.querySelector('.sub'),
sumButton = document.querySelector('.sum'),
timesButton = document.querySelector('.times'),
divideButton = document.querySelector('.divide');



let clickCount = JSON.parse(localStorage.getItem('clickCount'));


circle.addEventListener('click', () => {
  clickCount++;
  localStorage.setItem('clickCount', JSON.stringify(clickCount));
  applyTheme();
});


function applyTheme() {
  if (clickCount % 3 === 1) {
    circle.style.transform = 'translateX(23px)';
      upperTexts.forEach((upperText) => {
        upperText.style.color = '#000';
      });
    
      label.style.backgroundColor = 'hsl(0, 5%, 81%)';
    
      displayScreen.style.backgroundColor = 'hsl(185, 42%, 37%)';
    
      keysContainer.style.backgroundColor = 'hsl(0, 5%, 81%)';
    
      buttons.forEach((button) => {
        button.style.backgroundColor = 'hsl(45, 7%, 89%)';
        button.style.boxShadow = '0 3px 0 hsl(35, 11%, 61%)';
      });
    
      subButton.style.backgroundColor = 'hsl(45, 7%, 89%)';
      sumButton.style.backgroundColor = 'hsl(45, 7%, 89%)';
      timesButton.style.backgroundColor = 'hsl(45, 7%, 89%)';
      divideButton.style.backgroundColor = 'hsl(45, 7%, 89%)';
      subButton.style.boxShadow = '0 3px 0 hsl(35, 11%, 61%)';
      sumButton.style.boxShadow = '0 3px 0 hsl(35, 11%, 61%)';
      timesButton.style.boxShadow = '0 3px 0 hsl(35, 11%, 61%)';
      divideButton.style.boxShadow = '0 3px 0 hsl(35, 11%, 61%)';
    
    
      resetButton.style.backgroundColor = 'hsl(185, 42%, 37%)';
      resetButton.style.boxShadow = '0 3px 0 hsl(185, 58%, 25%)';
    
      deleteButton.style.boxShadow = '0 3px 0 hsl(185, 58%, 25%)';
      deleteButton.style.backgroundColor = 'hsl(185, 42%, 37%)';
    
      equalButton.style.backgroundColor = 'hsl(25, 98%, 40%)';
      equalButton.style.boxShadow = '0 3px 0 hsl(25, 99%, 27%)';
      
    
      circle.style.transform = 'translateX(23px)';
      circle.style.transition = 'all 0.5s ease';
      circle.style.backgroundColor = 'hsl(25, 98%, 40%)';
    
      body.style.backgroundColor = 'hsl(0, 0%, 90%)';
  } else if (clickCount % 3 === 2) {
    circle.style.transform = 'translateX(43px)';
      upperTexts.forEach((upperText) => {
        upperText.style.color = 'hsl(52, 100%, 62%)';
      });
    
      label.style.backgroundColor = '';
    
      displayScreen.style.backgroundColor = 'hsl(268, 71%, 12%)';
    
      keysContainer.style.backgroundColor = 'hsl(268, 71%, 12%)';
    
      buttons.forEach((button) => {
        button.style.backgroundColor = 'hsl(281, 89%, 26%)';
        button.style.boxShadow = '0 3px 0 hsl(285, 91%, 52%)';
        button.style.color = 'hsl(52, 100%, 62%)';
      });
    
      subButton.style.backgroundColor = 'hsl(281, 89%, 26%)';
      sumButton.style.backgroundColor = 'hsl(281, 89%, 26%)';
      timesButton.style.backgroundColor = 'hsl(281, 89%, 26%)';
      divideButton.style.backgroundColor = 'hsl(281, 89%, 26%)';
      subButton.style.color = 'hsl(52, 100%, 62%)';
      sumButton.style.color = 'hsl(52, 100%, 62%)';
      timesButton.style.color = 'hsl(52, 100%, 62%)';
      divideButton.style.color = 'hsl(52, 100%, 62%)';
      subButton.style.boxShadow = '0 3px 0 hsl(285, 91%, 52%)';
      sumButton.style.boxShadow = '0 3px 0 hsl(285, 91%, 52%)';
      timesButton.style.boxShadow = '0 3px 0 hsl(285, 91%, 52%)';
      divideButton.style.boxShadow = '0 3px 0 hsl(285, 91%, 52%)';
    
    
      clearButton.style.backgroundColor = 'hsl(268, 47%, 21%)';
      clearButton.style.boxShadow = '0 3px 0 hsl(290, 70%, 36%)';
    
      deleteButton.style.boxShadow = '0 3px 0 hsl(290, 70%, 36%)';
      deleteButton.style.backgroundColor = 'hsl(268, 47%, 21%)';
    
      equalButton.style.backgroundColor = 'hsl(176, 100%, 44%)';
      equalButton.style.boxShadow = '0 3px 0 hsl(177, 92%, 70%)';
      equalButton.style.color = '#000';
    
      circle.style.backgroundColor = 'hsl(176, 100%, 44%)';
    
      body.style.backgroundColor = 'hsl(268, 75%, 9%)';
  } else if (clickCount % 3 === 0){
    circle.style.transform = 'translateX(0px)';
    upperTexts.forEach((upperText) => {
      upperText.style.color = '#fff';
    });
    
    label.style.backgroundColor = 'hsl(223, 31%, 20%)';
    
    displayScreen.style.backgroundColor = 'hsl(224, 36%, 15%)';
    
    keysContainer.style.backgroundColor = 'hsl(223, 31%, 20%)';
    
    buttons.forEach((button) => {
      button.style.backgroundColor = 'hsl(30, 25%, 89%)';
      button.style.boxShadow = '0 3px 0 hsl(28, 16%, 65%)';
      button.style.color = '#000';
    });
    
    subButton.style.backgroundColor = 'hsl(30, 25%, 89%)';
    sumButton.style.backgroundColor = 'hsl(30, 25%, 89%)';
    timesButton.style.backgroundColor = 'hsl(30, 25%, 89%)';
    divideButton.style.backgroundColor = 'hsl(30, 25%, 89%)';
    subButton.style.color = '#000';
    sumButton.style.color = '#000';
    timesButton.style.color = '#000';
    divideButton.style.color = '#000';
    subButton.style.boxShadow = '0 3px 0 hsl(28, 16%, 65%)';
    sumButton.style.boxShadow = '0 3px 0 hsl(28, 16%, 65%)';
    timesButton.style.boxShadow = '0 3px 0 hsl(28, 16%, 65%)';
    divideButton.style.boxShadow = '0 3px 0 hsl(28, 16%, 65%)';
    
    
    resetButton.style.backgroundColor = 'hsl(225, 21%, 49%)';
    resetButton.style.boxShadow = '0 3px 0 hsl(224, 28%, 35%)';
    
    deleteButton.style.boxShadow = '0 3px 0 hsl(224, 28%, 35%)';
    deleteButton.style.backgroundColor = 'hsl(225, 21%, 49%)';
    
    equalButton.style.backgroundColor = 'hsl(6, 63%, 50%)';
    equalButton.style.boxShadow = '0 3px 0 hsl(6, 70%, 34%)';
    equalButton.style.color = '#fff';
    
    
    circle.style.backgroundColor = 'hsl(6, 63%, 50%)';
    
    body.style.backgroundColor = 'hsl(222, 26%, 31%)';
  }
};

applyTheme();

equalButton.addEventListener('click', function() {
  try {
    let expression = displayScreen.value;
    expression = expression.replace(/x/g, '*');

    const result = eval(expression);

    if (Number.isFinite(result)) {
      displayScreen.value = result.toString();
    }else{
      displayScreen.value = 'Error';
    }
  }catch(error) {
    displayScreen.value = 'Error';
  }
});