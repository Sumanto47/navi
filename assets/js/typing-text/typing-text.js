// type js plugin
let typeJsText = document.querySelector(".typeJsText");
let textArray = typeJsText.dataset.typetext.split("");
let counter = -1;

typeJsText.innerHTML = "";

function typeJs() {
  if (counter < typeJsText.dataset.typetext.length) {
    counter++;
    typeJsText.innerHTML += typeJsText.dataset.typetext.charAt(counter);
    textArray = typeJsText.dataset.typetext.split("");
  } else {
    textArray.pop();
    typeJsText.innerHTML = textArray.join("");
    if (textArray.length == 0) {
      counter = -1;
    }
  }
}

setInterval(() => {
  typeJs();
}, 200);
