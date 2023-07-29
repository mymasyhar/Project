const colors = ["red", "green", "blue", "purple", "magenta", "cadetblue", "aliceblue", "antiqueblue"]

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}
const color = document.querySelector('.color');
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  const randomIndex = getRandomNumber();
  document.body.style.backgroundColor = colors[randomIndex];
  color.textContent = colors[randomIndex];
});