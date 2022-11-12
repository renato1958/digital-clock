const hoursFace = document.querySelector('.face__hours');
const minutesFace = document.querySelector('.face__minutes');
const secondsFace = document.querySelector('.face__seconds');
const mSecsFace = document.querySelector('.face__milliseconds');
const watch = document.querySelector('.faces-container');

let started = true;
let request;

watch.addEventListener('click', () => {
  started = !started;
  if(started) {
    request = requestAnimationFrame(animate);
  } else {
    cancelAnimationFrame(request);
  }
}, true);

function animate() {
  let mSecs = new Date().getMilliseconds();
  let seconds = new Date().getSeconds();
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();

  mSecsFace.innerText = String(mSecs).padStart(3, '0');
  secondsFace.innerText = String(seconds).padStart(2, '0');
  minutesFace.innerText = String(minutes).padStart(2, '0');
  hoursFace.innerText = String(hours).padStart(2, '0');
  
  request = requestAnimationFrame(animate);
}

request = requestAnimationFrame(animate);
