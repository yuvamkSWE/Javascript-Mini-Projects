document.querySelector('.left').addEventListener('mouseover', () => {
    document.querySelector('.left').classList.add('active');
    document.querySelector('.right').classList.remove('active');
});

document.querySelector('.right').addEventListener('mouseover', () => {
    document.querySelector('.right').classList.add('active');
    document.querySelector('.left').classList.remove('active');
});

document.querySelector('.left').addEventListener('mouseout', () => {
    document.querySelector('.left').classList.remove('active');
});

document.querySelector('.right').addEventListener('mouseout', () => {
    document.querySelector('.right').classList.remove('active');
});