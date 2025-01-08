const slider = document.querySelector('.generator__form-slider');

slider.addEventListener('input', function() {
    const value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to right, var(--lime-green) ${value}%, var(--very-dark-grey) ${value}%)`;
});