const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const popup = document.getElementById('popup');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

window.onload = () => {
    popup.style.display = 'flex';
    document.getElementById('accept').addEventListener('click', () => {
        popup.style.display = 'none';
    });
    document.getElementById('decline').addEventListener('click', () => {
        popup.style.display = 'none';
    });
};