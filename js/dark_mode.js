const darkMode = localStorage.getItem('darkMode') === 'true';

if (darkMode === 'false') {
    document.body.classList.add('light-mode');
    darkModeToggle.checked = false;
}

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode', !darkModeToggle.checked);
    localStorage.setItem('darkMode', darkModeToggle.checked.toString());
});