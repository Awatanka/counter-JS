let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let sumEl = document.getElementById("sum-el");
let count = 0;
let total = 0;

let days = {
  Monday: 0,
  Tuesday: 0,
  Wednesday: 0,
  Thursday: 0,
  Friday: 0,
  Saturday: 0,
  Sunday: 0,
};

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let day = new Date().toLocaleDateString("en-US", { weekday: "long" });
  if (days[day] !== undefined) {
    days[day] += count;
    document.getElementById(`${day.toLowerCase()}-count`).textContent =
      days[day];
    total += count;
    countEl.textContent = 0;
    count = 0;
    sumEl.textContent = total;
  }
}
