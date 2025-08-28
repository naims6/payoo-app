// html all selector
const loginBtn = document.querySelector(".login-btn");

// login button functionality
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let pin = 1234;
  let mobileNumber = document.getElementById("mobile-number");
  let userPin = document.getElementById("pin-number").value;
  if (pin == userPin && mobileNumber.value.length >= 6) {
    window.location.href = "./home.html";
  }
  console.log(pin, userPin);
});
