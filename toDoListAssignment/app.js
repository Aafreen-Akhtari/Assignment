let item = document.querySelector("#item");
let submit = document.querySelector("#submit");
let error = document.querySelector(".err_msg");
let list = document.querySelector("#items");
submit.onclick = function (e) {
  e.preventDefault();
  if (item.value == "") {
    error.classList.add("display-error");
  } else {
    error.classList.remove("display-error");
    let newItem = item.value;
    addItemTodo(newItem);
    
  }
};
let addItemTodo = (text) => {
  let li = document.createElement("li");
  li.innerText = text;
  list.insertBefore(li, list.childNodes[0]);
  item.value = "" 
};


