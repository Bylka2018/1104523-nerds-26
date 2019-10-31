var link = document.querySelector(".writetous-button");

var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".close-cross");

var form = popup.querySelector("form");
var surname = popup.querySelector("[name=surname]");
var email = popup.querySelector("[name=mail]"); 
 
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  surname.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!surname.value || !email.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
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