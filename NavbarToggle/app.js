// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggleBtnEL = document.querySelector(".nav-toggle")
const linksEl = document.querySelector(".links")

navToggleBtnEL.addEventListener("click", function () {
  let linksClassList = linksEl.classList
  /**  if (linksClassList.contains("show-links")) {
      linksClassList.remove("show-links")
    } else {
      linksClassList.add("show-links")
    }*/
  linksClassList.toggle("show-links")
})
