const userInput = document.getElementById("userInput");
const result = document.getElementById("result");

function checkInput() {
  const raw = userInput.value.trim();     // trim() makes whitespace-only count as empty
  const num = Number(raw);

  if (raw === "" || Number.isNaN(num)) {  // empty or "abc" is invalid
    result.textContent = "Please enter a valid number!";
  } else if (num < 10) {
    result.textContent = "The number is lower than 10";
  } else if (num > 10) {
    result.textContent = "The number is higher than 10";
  } else {
    result.textContent = "The number is equal to 10";
  }
}

document.getElementById("checkBtn").addEventListener("click", checkInput);