function computePi(digits) {
  // Pi computation algorithm
  let pi = "3";
  for (let i = 0; i < digits; i++) {
    let term = (4 / (i * 2 + 2)) * ((i % 4 < 2) ? -1 : 1);
    pi += term;
  }
  return pi;
}

function drawMonteCarloVisualization(canvas, iterations) {
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = width / 2 - 10;
  let insideCount = 0;

  context.clearRect(0, 0, width, height);
  context.strokeStyle = "#FF0000";
  context.fillStyle = "#FF0000";
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  context.stroke();

  for (let i = 0; i < iterations; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const distance = Math.sqrt(Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2));
    if (distance <= radius) {
      context.fillRect(x, y, 1, 1);
      insideCount++;
    }
  }

  const estimatedPi = (insideCount / iterations) * 4;
  return estimatedPi.toFixed(10);
}

function updatePi(digits) {
  const piDigitsElement = document.getElementById("pi-digits");
  const piVisualizationCanvas = document.getElementById("pi-visualization");

  const pi = computePi(digits);
  piDigitsElement.textContent = pi;

  const iterations = digits * 10000;
  const estimatedPi = drawMonteCarloVisualization(piVisualizationCanvas, iterations);
  console.log("Estimated Pi:", estimatedPi);
}

// Example usage
updatePi(50);
