const qoutes = [
  "I measure the progress of a community by the degree of progress which women have achieved.",
  "I like the religion that teaches liberty, equality and fraternity.",
  "Life should be great rather than long.",
  "If I find the constitution being misused, I shall be the first to burn it.",
  "Cultivation of mind should be the ultimate aim of human existence.",
  "Indifferentism is the worst kind of disease that can affect people.",
  "Equality may be a fiction but nonetheless one must accept it as a governing principle.",
  "So long as you do not achieve social liberty, whatever freedom is provided by the law is of no avail to you.",
  "Law and order are the medicine of the body politic and when the body politic gets sick, medicine must be administered",
  "Religion and slavery are incompatible.",
]

const qouteBtn = document.querySelector(".qoute-btn")
const qouteText = document.querySelector(".random-qoute")

qouteBtn.addEventListener("click", function () {
  qouteText.innerHTML = getRandomQoute()
})

function getRandomQoute() {
  return qoutes[Math.floor(Math.random() * qoutes.length)]
}
