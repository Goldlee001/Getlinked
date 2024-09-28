document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu2')
    const close = document.querySelector('.close');
    const navUl = document.querySelector('.ul-btn');

    menu.addEventListener('click', function() {
        navUl.classList.add('show');
        menu.style.display = 'none'
        close.style.display = 'block'
    });
    
    close.addEventListener('click', function() {
        navUl.classList.remove('show');
        close.style.display = 'none'
        menu.style.display = 'block'
    });
});