const darkModeToggle = document.querySelector('#darkModeToggle');
const darkMode = localStorage.getItem('darkMode') !== 'false';

if (darkMode) {
    document.body.classList.remove('light-mode');
    darkModeToggle.checked = true;
} else {
    document.body.classList.add('light-mode');
    darkModeToggle.checked = false;
}

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode', !darkModeToggle.checked);
    localStorage.setItem('darkMode', darkModeToggle.checked.toString());
});