const button = document.querySelector('.btnMore')
const Modal = document.querySelector('.ModalExit')
const exit = document.querySelector('.exit')
const LogOt = document.querySelector('#LogOt')
const Switch = document.querySelector('#Switch')



button.addEventListener('click', () => {
Modal.style.display = 'flex'
})

exit.addEventListener('click', () => {
    Modal.style.display = 'none'
})

LogOt.addEventListener('click', () => {
   window.location.replace('http://127.0.0.1:5500/PAGE/login.html')

})

Switch.addEventListener('click', () => {
    document.body.classList.toggle('dark')

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('tema', 'dark')
    } else {
        localStorage.setItem('tema', 'light')
    }
})