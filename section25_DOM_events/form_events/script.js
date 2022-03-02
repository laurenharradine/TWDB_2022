const btn = document.querySelector('button');

btn.addEventListener('click', function () {

  const rgb = randColour();
  const h1 = document.querySelector('h1');
  
  h1.innerText = rgb;
  document.body.style.backgroundColor = rgb; 
})

const randColour = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`
}