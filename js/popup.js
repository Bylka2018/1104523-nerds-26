var link = document.querySelector(".writetous-button");

var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".close-cross");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=e-mail]"); 
var text = popup.querySelector("[name=text]");  

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  name.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    console.log("Нужно заполнить все 3 поля")
  }
  if (!email.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    console.log("Нужно заполнить все 3 поля")
  }
  if (!text.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    console.log("Нужно заполнить все 3 поля")
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});