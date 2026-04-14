const show = document.querySelector('.NotificationModal')
const modal = document.querySelector('.modalNotifications')
const exitbtn = document.querySelector('.exitexit')


show.addEventListener('click', () => {
   modal.style.display = 'flex'
})

exitbtn.addEventListener('click', () => {
    modal.style.display = 'none'
})