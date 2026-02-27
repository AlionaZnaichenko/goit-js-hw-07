const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", function () {
  const validValue = input.value.trim();

  if (validValue === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = validValue;
  }
});
