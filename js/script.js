var addBtn = document.querySelector("#add");
var subBtn = document.querySelector("#sub");
var mulBtn = document.querySelector("#mul");
var divBtn = document.querySelector("#div");
var clearBtn = document.querySelector("#btnClear");
const inputHandler = () => {
  if (num1.value === "" || num2.value === "") {
    num1.classList.add("err");
    num2.classList.add("err");
    alert("Please enter two number values....!");
  }
  num1.addEventListener("change", () => {
    num1.classList.remove("err");
  });
  num2.addEventListener("change", () => {
    num2.classList.remove("err");
  });
};

addBtn.addEventListener("click", () => {
  debugger;
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  inputHandler();
  let result = parseFloat(num1.value) + parseFloat(num2.value);
  document.getElementById("result").value = result;
});
subBtn.addEventListener("click", () => {
  debugger;
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  inputHandler();
  let result = num1 - num2;
  document.getElementById("result").value = result;
});
mulBtn.addEventListener("click", () => {
  debugger;
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  inputHandler();
  let result = num1 * num2;
  document.getElementById("result").value = result;
});
divBtn.addEventListener("click", () => {
  debugger;
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  inputHandler();
  let result = num1 / num2;
  document.getElementById("result").value = result;
});
clearBtn.addEventListener("click", () => {
  debugger;
  if((num1.classList.contains('err')) || (num2.classList.contains('err'))){
    num1.classList.remove("err");
    num2.classList.remove("err");
  };
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").value = "Result";
});
