const darkModeToggle = document.querySelector('#darkModeToggle');
const darkModeOn = localStorage.getItem('darkModeOn') !== 'false';

darkModeToggle.checked = darkModeOn;
document.body.classList.toggle('dark-mode', darkModeOn);

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    localStorage.setItem('darkModeOn', darkModeToggle.checked.toString());
});