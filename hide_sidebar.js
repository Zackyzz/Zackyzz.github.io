const sidebar = document.querySelector('#sidebar');
const handle = document.querySelector('#handle');

let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

sidebar.classList.toggle('collapsed', isMobile);
handle.classList.toggle('handle-collapsed', isMobile);

const toggleSidebar = () => {
    isMobile = !isMobile;
    sidebar.classList.toggle('collapsed', isMobile);
    handle.classList.toggle('handle-collapsed', isMobile);
};

handle.addEventListener('click', function() {
    sidebar.classList.toggle('collapsed');
    document.querySelector('.page-content').style.paddingLeft = sidebar.classList.contains('collapsed') ? '10%' : '27.5%';
});