const message = document.getElementById("message");      // 1 mark: select elements
const changeBtn = document.getElementById("changeBtn");

function changeMessage() {                                // 2 marks: the function
  message.textContent = "Hello there!";
}

changeBtn.addEventListener("click", changeMessage);       // 2 marks: listener
