const countDown = (totalSeconds, updateState, callback) => {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  const result = {
    hour: hours,
    minute: minutes,
    second: seconds
  };

  const timer = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      seconds--;

      if (seconds < 0) {
        seconds = 59;
        minutes--;

        if (minutes < 0) {
          minutes = 59;
          hours--;
        }

        result.hour = hours;
        result.minute = minutes;
        result.second = seconds;
      } else {
        result.second = seconds;
      }
      updateState({...result})
    } else {
      clearInterval(timer);
      callback()
    }
  }, 1000);
  return;
};

export default countDown;