let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
let total = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  total += count;
  countEl.textContent = 0;
  count = 0;
  let sumEl = document.getElementById("sum-el");
  sumEl.textContent = total;
}
