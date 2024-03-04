document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById('box');
    const resultDisplay = document.getElementById('result');
    let startTime, endTime, reactionTime, topSpeed = Infinity;
    
    function getRandomTime(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    function startGame() {
      box.classList.add('red');
      box.classList.remove('green');
      resultDisplay.textContent = '';
      const delay = getRandomTime(3000, 5000);
      setTimeout(() => {
        box.classList.remove('red');
        box.classList.add('green');
        startTime = new Date().getTime();
      }, delay);
    }
    
    function endGame() {
      endTime = new Date().getTime();
      reactionTime = (endTime - startTime) / 1000;
    
      if (reactionTime < topSpeed) {
        topSpeed = reactionTime;
      }
    
      resultDisplay.textContent = `Your reaction time: ${reactionTime.toFixed(3)}s | Top speed: ${topSpeed.toFixed(3)}s`;
    
      setTimeout(() => {
        box.classList.remove('green');
        box.classList.add('red');
        startGame();
      }, 2000);
    }
    
    box.addEventListener('mousedown', startGame);
    box.addEventListener('mouseup', endGame);
});
