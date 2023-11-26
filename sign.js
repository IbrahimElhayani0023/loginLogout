const body = document.querySelector('body')
const logBox = document.querySelector('.container_slider')
const toLogUp = document.querySelector('.toLogUp')
const toLogIn = document.querySelector('.toLogIn')
const toTop = document.querySelectorAll('.logBox')
toLogUp.addEventListener('click',()=>{
    body.classList.add('red')
    logBox.classList.add('logb')
})
toLogIn.addEventListener('click',()=>{
    body.classList.remove('red')
    logBox.classList.remove('logb')
})

toLogUp.addEventListener('click',()=>{
   setTimeout(() => {
    toTop.forEach(element => {
        element.classList.add('logup')
    });
   }, 300);
})
toLogIn.addEventListener('click',()=>{
   setTimeout(() => {
    toTop.forEach(element => {
        element.classList.remove('logup')
    });
   }, 300);
})