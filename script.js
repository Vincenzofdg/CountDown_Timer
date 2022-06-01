const hoursData = document.querySelector('#hours-in');
const hoursDisplay = document.querySelector('#hours-display');
const minutesData = document.querySelector('#minutes-in');
const minutesDisplay = document.querySelector('#minutes-display');
const secondsData = document.querySelector('#seconds-in');
const secondsDisplay = document.querySelector('#seconds-display');
const btnRun = document.querySelector('#run-btn');

function reset() {
  hoursData.value = '';
  minutesData.value = '';
  secondsData.value = '';
  hoursDisplay.innerText = "0";
  minutesDisplay.innerText = "0";
  secondsDisplay.innerText = "0";
}

function validation(param) {
  param.addEventListener('change', function (event) {
    let toCheck = event.target.value;
    if (toCheck.length > 2 || Number(toCheck) >= 60) {
      param.value = '';
      reset();
    }
  });
}

// Running the Programm
btnRun.addEventListener('click', function (event) {
  hoursDisplay.innerText = Number(hoursData.value);
  minutesDisplay.innerText = Number(minutesData.value);
  secondsDisplay.innerText = Number(secondsData.value);
})

// Deamon Actions
validation(hoursData);
validation(minutesData);
validation(secondsData);
reset();
