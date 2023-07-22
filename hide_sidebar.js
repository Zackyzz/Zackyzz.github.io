const sidebar = document.querySelector('#sidebar');
const handle = document.querySelector('#handle');

const toggleSidebar = () => {
    sidebar.classList.toggle('collapsed');
    handle.classList.toggle('handle-collapsed');
};

handle.addEventListener('click', function() {
    toggleSidebar();
    document.querySelector('.page-content').style.paddingLeft = sidebar.classList.contains('collapsed') ? '10%' : '27.5%';
});