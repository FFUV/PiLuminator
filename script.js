function calculatePi() {
  var calculatedPi = document.getElementById('calculated-pi');
  calculatedPi.textContent = 'Calculating...';

  // Set the number of trials (increase for a more accurate result)
  var numTrials = 1000000;
  var insideCircle = 0;

  for (var i = 0; i < numTrials; i++) {
      var x = Math.random();
      var y = Math.random();
      var distance = Math.sqrt((x * x) + (y * y));

      if (distance <= 1) {
          insideCircle++;
      }
  }

  var pi = (insideCircle / numTrials) * 4;
  calculatedPi.textContent = pi.toFixed(10);
}

document.getElementById('start-button').addEventListener('click', calculatePi);
