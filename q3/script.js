const list = document.getElementById("numberList");

function generateNumbers() {
  list.textContent = "";                       // clears old items, so no duplicates
  for (let i = 1; i <= 5; i++) {               // loop runs 1 through 5
    const li = document.createElement("li");
    li.textContent = "The number is " + i;
    list.appendChild(li);
  }
}

document.getElementById("generateBtn").addEventListener("click", generateNumbers);
