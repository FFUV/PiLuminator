document.getElementById('generate-btn').addEventListener('click', function() {
  var digits = document.getElementById('digits').value;

  if (digits < 1 || digits > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  var generatedPi = generatePi(digits);
  document.getElementById('pi-result').textContent = 'Generated Pi: ' + generatedPi;
});

function generatePi(digits) {
  // Logic to generate Pi goes here
  // You can implement your desired algorithm
  // (e.g., BBP formula, Monte Carlo method, etc.)
  // and return the generated Pi value
}
