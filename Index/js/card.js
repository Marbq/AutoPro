const card1s = document.querySelectorAll(".card1");
let currentCard1 = 0;

card1s[currentCard1].classList.add("active");

function nextCard1() {
  card1s[currentCard1].classList.remove("active");
  currentCard1 = (currentCard1 + 1) % card1s.length;
  card1s[currentCard1].classList.add("active");
}

setInterval(nextCard1, 3000);