const featuresItems = document.querySelectorAll(".feature-item");
const featureContents = document.querySelectorAll(".feature-content");
const availableBalance = document.querySelector(".available-balance");
const pinNumber = document.getElementById("pin-number");

let totalBalance = parseInt(availableBalance.innerText);
let pin = "1234";

// when add money,cashout etc button will click hidden and visible all features
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

// add functionality for all features on payoo App
// add money functionality
const addMoney = (e) => {
  e.preventDefault();
  let bankNumber = document.getElementById("bank-number");
  let addMoneyAmmount = parseInt(
    document.getElementById("add-money-amount").value
  );

  console.log(bankNumber.value);
  if (pin === pinNumber.value && bankNumber.value.length >= 6) {
    totalBalance += addMoneyAmmount;
  } else {
    alert("Fill all the input correctly");
  }
  availableBalance.innerText = totalBalance;
};
document
  .querySelector(".add-money-work-btn")
  .addEventListener("click", addMoney);
// document.querySelector("add-money-work-btn").addEventListener("click", add-money)
// document.querySelector("add-money-work-btn").addEventListener("click", add-money)
// document.querySelector("add-money-work-btn").addEventListener("click", add-money)
// document.querySelector("add-money-work-btn").addEventListener("click", add-money)
