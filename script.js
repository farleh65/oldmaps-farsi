const yearRange = document.getElementById('yearRange');
const yearLabel = document.getElementById('yearLabel');

yearRange.addEventListener('input', () => {
  yearLabel.textContent = yearRange.value;
});
