var addBtn = document.querySelector("#add");
var subBtn = document.querySelector("#sub");
var mulBtn = document.querySelector("#mul");
var divBtn = document.querySelector("#div");
var clearBtn = document.querySelector("#btnClear");
var emptyInput = document.querySelector(".emptyInput");
let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
const inputHandler = () => {
  if (input1.value.trim() === "") {
    input1.classList.add("err-border");
    emptyInput.classList.remove("emptyInput");
  }
  if( input2.value.trim() === ""){
    input2.classList.add("err-border");
    emptyInput.classList.remove("emptyInput");
  }
  input1.addEventListener("change", () => {
    input1.classList.remove("err-border");
    emptyInput.classList.add("emptyInput");
  });
  input2.addEventListener("change", () => {
    input2.classList.remove("err-border");
    emptyInput.classList.add("emptyInput");
  });
};

const add = (number1, number2) => {
  inputHandler();
  let result = parseFloat(number1.value) + parseFloat(number2.value);
  document.getElementById("result").innerHTML = result;
};
const substract = (number1, number2) => {
  inputHandler();
  let result = parseFloat(number1.value) - parseFloat(number2.value);
  document.getElementById("result").innerHTML = result;
};
const multiply = (number1, number2) => {
  inputHandler();
  let result = parseFloat(number1.value) * parseFloat(number2.value);
  document.getElementById("result").innerHTML = result;
};
const division = (number1, number2) => {
  inputHandler();
  let result = parseFloat(number1.value) / parseFloat(number2.value);
  document.getElementById("result").innerHTML = result;
};
addBtn.addEventListener("click", () => {
  add(input1, input2);
});
subBtn.addEventListener("click", () => {
  substract(input1, input2);
});
mulBtn.addEventListener("click", () => {
  multiply(input1, input2);
});
divBtn.addEventListener("click", () => {
  division(input1, input2);
});
clearBtn.addEventListener("click", () => {
  if (input1.classList.contains("err-border") || input2.classList.contains("err-border")) {
    input1.classList.remove("err-border");
    input2.classList.remove("err-border");
    emptyInput.classList.add("emptyInput");
  }
  input1.value = "";
  input2.value = "";
  document.getElementById("result").innerHTML = "RESULT";
});
