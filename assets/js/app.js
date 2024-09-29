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

// clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
