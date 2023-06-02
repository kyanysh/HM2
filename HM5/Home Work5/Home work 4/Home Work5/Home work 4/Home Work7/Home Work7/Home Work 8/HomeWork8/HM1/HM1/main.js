let foon = document.querySelector('.foon')
let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let green = document.querySelector('.green')
let reset = document.querySelector('.reset')



red.addEventListener('click', () => {
    setTimeout(() => {
        foon.style.backgroundColor = 'red'
        console.log('red');
    }, 1500);

})
yellow.addEventListener('click', () => {
    setTimeout(() => {
        foon.style.backgroundColor = 'yellow'
        console.log('yellow');
    }, 1500);

})
green.addEventListener('click', () => {
    setTimeout(() => {
        foon.style.backgroundColor = 'green'
        console.log('green');
    }, 1500);

})
reset.addEventListener('click', () => {
    setTimeout(() => {
        foon.style.backgroundColor = ''
        console.log('colors off');
    }, 1500);


})