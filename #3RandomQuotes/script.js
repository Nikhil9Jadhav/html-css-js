const authorQuotes = {
  "-Dalai Lama": '"Anger is the ultimate destroyer of your own peace of mind."',
  "-Michelle Obama":
    '"Don\'t be afraid. Be focused. Be determined. Be hopeful. Be empowered."',
  "-Robin Sharma": '"We grow fearless when we do the things we fear."',
}

function generateQuote() {
  //Targetting author and qoute tags
  const authorTag = document.getElementById("author")
  const quoteTag = document.getElementById("quote")

  //Setting the value of random quote
  let randomAuthor = getRandomAuthor()
  authorTag.textContent = randomAuthor
  quoteTag.textContent = authorQuotes[randomAuthor]
}

function getRandomAuthor() {
  //Fetching authors (array) from the dictionary
  const authors = Object.keys(authorQuotes)
  return authors[Math.floor(Math.random() * authors.length)]
}
