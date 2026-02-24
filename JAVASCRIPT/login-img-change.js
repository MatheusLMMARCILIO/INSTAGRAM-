const box = document.querySelector('.Imagejs');

const imgF = document.createElement('img');
imgF.classList.add('storys');
box.appendChild(imgF);


const images = [
    '/IMAGE/proImgage.png',
    '/IMAGE/proImgage2.png',
    '/IMAGE/proImgage3.png'
]

let index = 0
imgF.src = images[index]

setInterval(() => {
    index++

    if (index >= images.length) {
        index = 0
    }

    imgF.src = images[index]
}, 3000)

