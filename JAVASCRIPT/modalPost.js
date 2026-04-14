const showModal = document.querySelector('.createModal')
const modal = document.querySelector('.modalCreate')
const exit = document.querySelector('.exitbtn')

showModal.addEventListener('click', () => {
    modal.style,display = 'flex'
})

exit.addEventListener('click', () => {
     modal.style,display = 'none'
})