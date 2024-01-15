function generatePi() {
  const digitsInput = document.getElementById("digits");
  const piResult = document.getElementById("pi-result");

  const digits = parseInt(digitsInput.value, 10);

  if (digits < 1 || digits > 100) {
    piResult.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  fetch(`/generate_pi?digits=${digits}`)
    .then(response => response.text())
    .then(data => {
      piResult.textContent = `Generated Pi:\n${data}`;
    })
    .catch(error => {
      console.log(error);
      piResult.textContent = "An error occurred. Please try again later.";
    });
}

document.getElementById("generate-btn").addEventListener("click", generatePi);
