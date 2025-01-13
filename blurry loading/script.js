const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

let progress = 0;

let interval = setInterval(blur, 30);

function blur() {
  progress++;
  if (progress >= 100) {
    clearInterval(interval);
  }
  loadingText.innerText = `${progress}%`;
  loadingText.style.opacity = 1 - progress / 100;
  const blur = 30 * (1 - progress / 100);
  bg.style.filter = `blur(${blur}px)`;
}
