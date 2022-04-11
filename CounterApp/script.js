let count = 0
const counterEl = document.getElementById("counter-el")
function changeCounter(num) {
  count += num
  counterEl.style.color = count < 0 ? "red" : "green"
  counterEl.textContent = count
}
