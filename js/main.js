// html all selector
const loginBtn = document.querySelector(".login-btn");
const featuresItems = document.querySelectorAll(".feature-item");
const featureContents = document.querySelectorAll(".feature-content");

// when add money,cashout etc button will click
const featureContentBtns = document.querySelector(".feature-content-btn");

featureContentBtns.addEventListener("click", (e) => {
  const clicked = e.target.closest(".feature-item");
  if (!clicked) return;
  // remove all active class which one is appiled before and add active class for visible which feature is selected
  featuresItems.forEach((item) => {
    item.classList.remove("active");
  });
  clicked.classList.add("active");

  // at first hide all the element and show a default element only
  featureContents.forEach((item) => {
    item.classList.add("hidden");
  });
  // visible the element when user clicked featured item
  if (clicked.id === "add-money-btn") {
    document.querySelector(".add-money").classList.remove("hidden");
  }
  if (clicked.id === "cashout-btn") {
    document.querySelector(".cashout").classList.remove("hidden");
  }
  if (clicked.id === "transfer-money-btn") {
    document.querySelector(".transfer-money").classList.remove("hidden");
  }
  if (clicked.id === "bonus-btn") {
    document.querySelector(".bonus").classList.remove("hidden");
  }
  if (clicked.id === "pay-bill-btn") {
    document.querySelector(".pay-bill").classList.remove("hidden");
  }
  if (clicked.id === "transaction-btn") {
    document.querySelector(".transaction-history").classList.remove("hidden");
  }
});

// login button functionality
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let pin = 1234;
  let mobileNumber = document.getElementById("mobile-number");
  let userPin = document.getElementById("pin-number");
  if (pin == userPin.value && mobileNumber.value.length >= 6) {
    window.location.href = "./home.html";
  }
});
