let score = 0;

function randomColor() {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#33FFF6', '#FFD433'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function randomPosition(max) {
  return Math.floor(Math.random() * (max - 60));
}

function spawnBox() {
  const board = document.getElementById('game-board');
  const box = document.createElement('div');
  box.className = 'box';
  box.style.backgroundColor = randomColor();
  box.style.top = randomPosition(400) + 'px';
  box.style.left = randomPosition(400) + 'px';

  box.onclick = () => {
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
    board.removeChild(box);
  };

  board.appendChild(box);

  setTimeout(() => {
    if (board.contains(box)) {
      board.removeChild(box);
    }
  }, 1500);
}

setInterval(spawnBox, 1000);
