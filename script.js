const slider = document.querySelector('.generator__form-slider');
const characterLengthNumber = document.querySelector('.generator__form-text_number');

function updateSliderBackground(slider) {
  const value = slider.value;
  const min = slider.min;
  const max = slider.max;

  const percentage = ((value - min) / (max - min)) * 100;

  slider.style.background = `linear-gradient(to right, var(--lime-green) ${percentage}%, var(--very-dark-grey) ${percentage}%)`;
}

document.addEventListener('input', (event) => {
  updateSliderBackground(slider);
  characterLengthNumber.textContent = event.target.value;
});