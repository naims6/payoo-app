const featuresItems = document.querySelectorAll(".feature-item");
const featureContents = document.querySelectorAll(".feature-content");
const availableBalance = document.querySelector(".available-balance");
const logOutBtn = document.querySelector(".log-out-btn");
const transactionHistory = document.querySelector(".transaction-history-item");
const latestPaymentHistory = document.querySelector(".latest-payment-history");

let totalBalance = parseInt(availableBalance.innerText);
let pin = "1234";
let history = [];

// Save in Local Storage
const currentBalance = function () {
  totalBalance = parseInt(localStorage.getItem("totalBalance") || 0);
  availableBalance.innerText = totalBalance;
  history = JSON.parse(localStorage.getItem("history")) || [];
  createHistory();
};
currentBalance();

// History Creating
function createHistory() {
  transactionHistory.innerHTML = "";
  latestPaymentHistory.innerHTML = "";

  history.forEach((item) => {
    transactionHistory.innerHTML += ` <div
              class="flex items-center justify-between px-4 py-3 bg-white rounded-2xl"
            >
              <div class="flex gap-3">
                <div
                  class="bg-gray-300 rounded-full size-12 flex items-center justify-center"
                >
                  <img src="./assets/wallet1.png" alt="" />
                </div>
                <div>
                  <h2 class="font-medium text-xl">${item["transaction type"]}</h2>
                  <p>Today 1:44 AM</p>
                </div>
              </div>
              <i class="fa-solid fa-ellipsis-vertical cursor-pointer"></i>
            </div>`;

    latestPaymentHistory.innerHTML += ` <div
              class="flex items-center justify-between px-4 py-3 bg-white rounded-2xl"
            >
              <div class="flex gap-3">
                <div
                  class="bg-gray-300 rounded-full size-12 flex items-center justify-center"
                >
                  <img src="./assets/wallet1.png" alt="" />
                </div>
                <div>
                  <h2 class="font-medium text-xl">${item["transaction type"]}</h2>
                  <p>Today 1:44 AM</p>
                </div>
              </div>
              <i class="fa-solid fa-ellipsis-vertical cursor-pointer"></i>
            </div>`;
  });
}
// Log out btn functionality
logOutBtn.addEventListener("click", () => {
  window.location.href = "./index.html";
});

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

  const pinNumber = document.getElementById("pin-number");
  let bankNumber = document.getElementById("bank-number");
  let addMoneyAmmount = parseInt(
    document.getElementById("add-money-amount").value
  );

  if (pin === pinNumber.value && bankNumber.value.length >= 6) {
    totalBalance += addMoneyAmmount;
  } else {
    alert("Fill all the input correctly");
  }
  availableBalance.innerText = totalBalance;

  let historyItem = {
    "transaction type": "Add Money",
  };
  history.unshift(historyItem);

  localStorage.setItem("totalBalance", totalBalance);
  localStorage.setItem("history", JSON.stringify(history));
  createHistory();
};
// cashout functionality
const cashout = (e) => {
  e.preventDefault();
  let agentNumber = document.getElementById("agent-number");
  let agentPinNumber = document.getElementById("agent-pin-number");
  let cashoutAmout = parseInt(document.getElementById("cashout-amount").value);

  if (cashoutAmout >= totalBalance) {
    alert("you do not have sufficiant balance");
    return;
  }
  if (pin === agentPinNumber.value && agentNumber.value.length >= 6) {
    totalBalance -= cashoutAmout;
  } else {
    alert("feel all the input correctly");
  }
  availableBalance.innerText = totalBalance;

  let historyItem = {
    "transaction type": "Cashout",
  };
  history.unshift(historyItem);

  localStorage.setItem("totalBalance", totalBalance);
  localStorage.setItem("history", JSON.stringify(history));

  createHistory();
};
// transfer money functionality
const transferMoney = (e) => {
  e.preventDefault();
  let tranferAmount = parseInt(
    document.getElementById("transfer-amount").value
  );
  let userAccountNumber = document.getElementById("user-account-number");
  let transferPin = document.getElementById("transfer-pin-number");
  console.log(tranferAmount);

  if (tranferAmount >= totalBalance) {
    alert("You do not have sufficiant balance");
    return;
  }
  if (transferPin.value == pin && userAccountNumber.value.length >= 6) {
    totalBalance -= tranferAmount;
  }
  availableBalance.innerText = totalBalance;

  let historyItem = {
    "transaction type": "Transfer Money",
  };
  history.unshift(historyItem);
  localStorage.setItem("totalBalance", totalBalance);
  localStorage.setItem("history", JSON.stringify(history));
  createHistory();
};

document
  .querySelector(".add-money-work-btn")
  .addEventListener("click", addMoney);
document.querySelector(".cashout-work-btn").addEventListener("click", cashout);
document
  .querySelector(".transfer-money-work-btn")
  .addEventListener("click", transferMoney);
// document.querySelector("add-money-work-btn").addEventListener("click", add-money)
// document.querySelector("add-money-work-btn").addEventListener("click", add-money)
