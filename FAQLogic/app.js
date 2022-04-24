//using selectors inside the element (Top down approach)
const questionArticle = document.querySelectorAll(".question")
// console.log(questionArticle)

questionArticle.forEach(question => {
  const btnEl = question.querySelector(".question-btn")
  btnEl.addEventListener("click", e => {
    // Logic to close the existing open question if the other question is selected next.
    questionArticle.forEach(selectedItem => {
      if (selectedItem !== question) {
        selectedItem.classList.remove("show-text")
      }
    })
    //Toggling showing and not showing the question text
    question.classList.toggle("show-text")
  })
})

// traversing the dom (Bottom up approach)
// const btns = document.querySelectorAll(".question-btn")

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     console.log()
//     const articleEl = e.currentTarget.parentElement.parentElement

//     // articleEl.classList.contains("show-text") ? articleEl.classList.remove("show-text") : articleEl.classList.add("show-text")

//     //Using toggle instead of the above conditional statement
//     articleEl.classList.toggle("show-text")
//   })
// })
