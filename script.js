const btn = document.getElementById("helloButton");
const output = document.getElementById("messageOutput");

btn.addEventListener("click", () => {
  output.textContent = "Button clicked — your site JavaScript is working!";
});
