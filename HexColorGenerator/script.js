//Javascript will come here
const hex = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
]

function generateHexCode() {
  let hexCode = ""
  for (let i = 0; i < 6; i++) {
    hexCode += hex[Math.floor(Math.random() * 12) + 1]
  }
  return hexCode
}

function changeColor() {
  let currColor = "#" + generateHexCode()
  document.querySelector(".hex-code").textContent = currColor
  document.getElementsByTagName("body")[0].style.background = currColor
}
