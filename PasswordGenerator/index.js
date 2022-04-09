const passCharSet = ["a", "b", "c", "d", "e", "A", "B", "C", "&", "%"]
let pwdSection = document.querySelector(".password-section")

function getRandomChar() {
  return passCharSet[Math.floor(Math.random() * passCharSet.length)]
}

function getRandomPassword() {
  let password = ""
  for (let i = 0; i < 6; i++) {
    password += getRandomChar()
  }
  return password
}

//Consider password size is fixed and is 6.
function genPassword() {
  for (let childId = 0; childId < pwdSection.childElementCount; childId++) {
    let random = getRandomPassword()
    pwdSection.children[childId]
      .querySelector('input[name="password"]')
      .setAttribute("value", random)
  }
}
