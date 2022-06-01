const hoursData = document.querySelector('#hours-in');
const hour = document.querySelector('#hours-display');
const minutesData = document.querySelector('#minutes-in');
const minute = document.querySelector('#minutes-display');
const secondsData = document.querySelector('#seconds-in');
const second = document.querySelector('#seconds-display');
const btnRun = document.querySelector('#run-btn');

function reset() {
  hoursData.value = '';
  minutesData.value = '';
  secondsData.value = '';
  hour.innerText = "0";
  minute.innerText = "0";
  second.innerText = "0";
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

function timer() {
  console.log('ativo')
  clearInterval();
  if (Number(second.innerText) === 0) {
    if (Number(minute.innerText) === 0) {
      hour.innerText = `${Number(hour.innerText) - 1}`;
      minute.innerText = "60";
    }
    minute.innerText = `${Number(minute.innerText) - 1}`;
    second.innerText = "6";
  };
  second.innerText = `${Number(second.innerText) - 1}`
}

// Running the Programm
btnRun.addEventListener('click', function () {
  hour.innerText = Number(hoursData.value);
  minute.innerText = Number(minutesData.value);
  second.innerText = Number(secondsData.value);

  const countDown = setInterval(timer, 1000)
  // clearInterval(countDown);
})

function test() {
  if (hoursData.value == "-1") console.log('PARA PARAR');
}

test();

// Deamon Actions
validation(hoursData);
validation(minutesData);
validation(secondsData);
reset();
