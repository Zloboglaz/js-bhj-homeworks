const timer = document.getElementById("timer");

// преобразем строку "00:00:00" в количество секунд
const timeParts = timer.textContent.split(":");
let timeInSeconds =
  Number(timeParts[0]) * 3600 +
  Number(timeParts[1]) * 60 +
  Number(timeParts[2]);
console.log(timeInSeconds);

// функция преобразования секунд в строку формата "00:00:00"
function makeStringFromSeconds(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// сам интервал
const interval = setInterval(() => {
  if (timeInSeconds > 0) {
    timeInSeconds -= 1;
    timer.textContent = makeStringFromSeconds(timeInSeconds);
  } else {
    alert("Вы победили в конкурсе!");
    clearInterval(interval);
  }
}, 1000);
