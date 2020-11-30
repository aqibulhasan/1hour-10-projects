const btn = document.querySelector("div button");
const div = document.querySelector("div");
const blockquote = document.createElement("blockquote");

const quoteCollection = [
  {
    quote:
      "Declare your jihad on thirteen enemies you cannot see -egoism, arrogance, conceit, selfishness, greed, lust, intolerance, anger, lying, cheating, gossiping and slandering. If you can master and destroy them, then you will be read to fight the enemy you can see.",
    author: "Al-Ghazzali",
  },
  {
    quote: "Suffering is a gift. In it is hidden mercy.",
    author: "Rumi",
  },
  {
    quote:
      "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty",
    author: "Winston Churchill",
  },
  {
    quote: "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
    author: "Walt Disney",
  },
  {
    quote: `Don’t Let Yesterday Take Up Too Much Of Today.`,
    author: "Will Rogers",
  },
  {
    quote:
      "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Be peaceful, be courteous, obey the law, respect everyone; but if someone puts his hand on you, send him to the cemetery.",
    author: "Malcolm X",
  },
  {
    quote: "Whether You Think You Can Or Think You Can’t, You’re Right.",
    author: "Henry Ford",
  },
];

blockquote.innerHTML = `<q>${quoteCollection[0].quote}</q><br />
      &mdash;<cite>${quoteCollection[0].author}</cite>`;
div.prepend(blockquote);

function randomQuote() {
  const random = Math.floor(Math.random() * quoteCollection.length);
  console.log(random, quoteCollection.length);
  blockquote.innerHTML = `<q>${quoteCollection[random].quote}</q><br />
      &mdash;<cite>${quoteCollection[random].author}</cite>`;
  div.prepend(blockquote);
  div.style.backgroundColor = randomColor();
}

function randomColor() {
  Math.floor(Math.random() * 255);
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}
btn.addEventListener("click", randomQuote, () => {
  console.log("hello");
  this.style.backgroundColor = randomColor();
  console.log(this.style.backgroundColor);
});
