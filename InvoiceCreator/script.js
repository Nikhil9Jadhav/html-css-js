const carBtnEl = document.getElementById("car")
const lawnBtnEl = document.getElementById("lawn")
const weedsBtnEl = document.getElementById("weeds")

const itemEl = document.getElementById("item-list")
const itemCostEl = document.getElementById("item-cost")

const items = {
  "Wash Car": "10",
  "Mow Lawn": "20",
  "Pull Weeds": "30",
}

let totalSum = 0

carBtnEl.addEventListener("click", function () {
  addGivenItem(0)
})

lawnBtnEl.addEventListener("click", function () {
  addGivenItem(1)
})

weedsBtnEl.addEventListener("click", function () {
  addGivenItem(2)
})

function addGivenItem(itemNum) {
  const itemsList = Object.keys(items)
  itemEl.innerHTML += `<li> ${itemsList[itemNum]} <li>`
  itemCostEl.innerHTML += `<li> $ ${items[itemsList[itemNum]]}`
  totalSum += Number(items[itemsList[itemNum]])
  console.log(totalSum)
}

/*
Todo :
-Need to show the totalSum on the right position.
-We can limit the addition of a item by some boolean logic 
which will hide the height responsiveness issue.
-Refer other people code and try to improve our code quality.
-Scope of adding data to localStorage is pending
*/
