const loginLink = document.querySelector(".address-button");
const loginPopup = document.querySelector(".modal-login");
const loginlClose = document.querySelector(".modal-close");
const loginForm = document.querySelector(".modal-form");
const loginLogin = loginPopup.querySelector(".login-user");
const loginEmail = loginPopup.querySelector(".email-user");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
  if (storage) {
    loginLogin.value = storage;
    loginLogin.focus();
  } else {
    loginEmail.focus();
  }
});

loginlClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginEmail.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-remove");
    }
  }
});