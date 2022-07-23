const canvas = document.querySelector('canvas');
const shakeButton = document.querySelector('.shake');
const ctx = canvas.getContext('2d');
const {width, height} = canvas;
const MOVE_AMOUNT = 10;

let hue = 0;


let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);


ctx.lineJoin = 'round';
ctx.lineCap = 'square';
ctx.lineWidth = 30;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function handleKey(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
    
  }
}

window.addEventListener('keydown', handleKey);

function draw({key}) { 
  hue += 1;
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0,0,width,height);
  canvas.addEventListener('animationend', function(){
    console.log("Shake done");
    canvas.classList.remove('shake');
  }, {once: true})
}

shakeButton.addEventListener( 'click', clearCanvas);