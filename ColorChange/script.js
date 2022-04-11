// javascript

const colors = ["blue", "yellow", "green", "orange", "red", "#223344"]

function getRandomColor() {
  return colors[Math.floor(Math.random() * 5) + 1]
}

function colorChange() {
  document.getElementsByTagName("body")[0].style.backgroundColor =
    getRandomColor()
}
