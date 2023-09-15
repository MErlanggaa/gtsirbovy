const buttonEl = document.querySelector('.button');
const overlayEl = document.querySelector('.overlay');

buttonEl.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    overlayEl.classList.toggle('active', document.body.classList.contains('dark-mode'));
});
