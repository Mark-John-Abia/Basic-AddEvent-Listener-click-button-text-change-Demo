document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    document.querySelector("h1").innerText = "Text Changed!";
  });

document.getElementById("resetButton").addEventListener("click", function () {
  document.querySelector("h1").innerText = "Welcome to My Web Project!";
});
