const filterBtn = document.querySelector('.filter-btn');
const filterOptions = document.querySelector('.filter-options');

filterBtn.addEventListener('click', () => {
  filterOptions.style.display = filterOptions.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', (e) => {
  if (!filterBtn.contains(e.target) && !filterOptions.contains(e.target)) {
    filterOptions.style.display = 'none';
  }
});
