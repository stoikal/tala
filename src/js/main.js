import '../css/main.css';
import Sound from './sound';

const $buttons = document.querySelectorAll('button') 
const sound = new Sound();

$buttons.forEach(($button) => {
  const freq = $button.dataset.frequency;
  
  if (freq) {
    $button.addEventListener('click', async () => {
      sound.play(freq);
    })
  }
});

