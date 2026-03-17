const linkHome = document.querySelector('.logo')

linkHome.addEventListener('click', () => {
    location.href = 'http://127.0.0.1:5500/PAGE/InstagramPages/home.html'
})

const ulEl = document.querySelector('.elUl')

ulEl.addEventListener('mouseenter', () => {
  ulEl.classList.add('active')
})

ulEl.addEventListener('mouseleave', () => {
  ulEl.classList.remove('active')
})