const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "./home.html";
});
