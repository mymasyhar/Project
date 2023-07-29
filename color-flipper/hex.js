const hex = ["1","2","3","4","5","6","A","B","C","D","E","F"];

function getHexColor(){
  let hexColor = '#';
  for(let i=0; i<6; i++){
    hexColor += hex[Math.floor(Math.random() * hex.length)];
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