var bookEl = document.getElementById("book-container");
var drinkEl = document.getElementById("drink-container");
var checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    drinkEl.classList.remove("hidden");
    bookEl.classList.add("hidden");
    console.log("checked");
  } else {
    drinkEl.classList.add("hidden");
    bookEl.classList.remove("hidden");
    console.log("not checked");
  }
});
