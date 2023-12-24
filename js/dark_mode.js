const darkModeOn = localStorage.getItem('darkModeOn') === 'true';

if (!darkModeOn) {
    document.body.classList.add('light-mode');
}

darkModeToggle.checked = darkModeOn;

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode', !darkModeToggle.checked);
    localStorage.setItem('darkModeOn', darkModeToggle.checked.toString());
});