document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');
    const body = document.body;

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            this.style.backgroundColor = this.style.backgroundColor === 'transparent' ? '#ffd700' : 'transparent';
        });
    });

    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
    });
});
