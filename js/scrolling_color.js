const path = document.querySelectorAll('nav ul ul li a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 250) {
            current = section.getAttribute('id');
        }
    });
    
    path.forEach(li => {
        li.classList.remove('active');
        document.querySelector('nav ul ul li a[href*= ' + current + ']').classList.add('active');
    });
});