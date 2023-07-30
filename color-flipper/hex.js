const hex = ["1","2","3","4","5","6","A","B","C","D","E","F"];

function getNumber(){
  return Math.floor(Math.random() * hex.length)
}

function getHexColor(){
  let hexColor = '#';
  for(let i=0; i<6; i++){
    const number = getNumber();
    hexColor += hex[number];
  }
  return hexColor;
}

const span = document.querySelector('.color');
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  const color = getHexColor();
  document.body.style.backgroundColor = color;
  span.textContent = color;
})