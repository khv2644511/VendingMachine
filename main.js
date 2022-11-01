/** @format */

const inputMoney = document.querySelector("#input_money");
const inputMoneyBtn = document.querySelector("#input_money_btn");
const showChange = document.querySelector("#show_change");

const original_Drink = document.querySelector(".Original");
const Violet_Drink = document.querySelector(".Violet");
const Yellow_Drink = document.querySelector(".Yellow");
const Cool_Drink = document.querySelector(".Cool");
const Green_Drink = document.querySelector(".Green");
const Orange_Drink = document.querySelector(".Orange");

// const drinkPriceObj = {
//   original_Drink: 1000,
//   Violet_Drink: 1000,
//   Yellow_Drink: 1000,
//   Cool_Drink: 1000,
//   Green_Drink: 1000,
//   Orange_Drink: 1000,
// };

let drinkList = [
  original_Drink,
  Violet_Drink,
  Yellow_Drink,
  Cool_Drink,
  Green_Drink,
  Orange_Drink,
];

drinkList.forEach((el) =>
  el.addEventListener("click", () => change_ChangeMoney(el))
);

inputMoneyBtn.addEventListener("click", get_show_InputMoneyValue);

function get_show_InputMoneyValue() {
  let inputVlaue = inputMoney.value;
  console.log(typeof inputVlaue);
  if (isNaN(inputVlaue)) {
    alert("숫자를 입력하세요");
    inputMoney.value = "";
  } else {
    console.log(inputMoney.value);
    inputMoney.value = "";
    showChange.innerText = parseInt(inputVlaue);
    // toLocaleString();
  }
}

function change_ChangeMoney(event) {
  console.log(el);
  // console.log(event.currentTarget);
  console.log(showChange.textContent);
}
