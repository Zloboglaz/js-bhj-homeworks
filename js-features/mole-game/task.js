const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let deadCount = 0;
let lostCount = 0;

// сброс счёта после окончания игры
function resetGame() {
  deadCount = 0;
  lostCount = 0;
  dead.textContent = deadCount;
  lost.textContent = lostCount;
}

for (let i = 1; i <= 9; i++) {
  const hole = document.getElementById(`hole${i}`);

  hole.onclick = () => {
    if (hole.classList.contains("hole_has-mole")) {
      deadCount++;
      dead.textContent = deadCount;
    } else {
      lostCount++;
      lost.textContent = lostCount;
    }

    if (deadCount >= 10) {
      alert("Победа! Вы убили 10 кротов!");
      resetGame();
    } else if (lostCount >= 5) {
      alert("Поражение! Слишком много промахов.");
      resetGame();
    }
  };
}
