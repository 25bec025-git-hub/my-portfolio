function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Cadet : ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);