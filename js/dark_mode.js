const darkModeOn = localStorage.getItem('darkModeOn') === 'true';

if (!darkModeOn) {
    document.body.classList.add('light-mode');
}

if (darkModeOn === 'false') {
    document.body.classList.add('light-mode');
    darkModeToggle.checked = false;
} else {
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode', !darkModeToggle.checked);
    localStorage.setItem('darkModeOn', darkModeToggle.checked.toString());
});