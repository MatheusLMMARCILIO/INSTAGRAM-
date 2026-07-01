function ModalExit() {

    const modal = document.querySelector(".ModalExit")
    const button = document.querySelector(".btnMore")
    const exit = document.querySelector('.closeModal')
    const logout = document.querySelector('.logout')
    const theme = document.querySelector(".switchTheme")
    const iconChange = document.querySelector('.icontheme')



    const imgEL = document.createElement('img')
    imgEL.src = "../IMAGE/moon.icon.svg";
    imgEL.width = 20;
    imgEL.height = 20;


    iconChange.appendChild(imgEL)


    button.addEventListener("click", () => {
        modal.style.display = 'flex'
    })

    exit.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    logout.addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/PAGE/login.html'
    })

    theme.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        // if (document.body.classList.contains("dark")) {
        //     imgEL.src = "../../IMAGE/moon.icon.svg";
        // } else {
        //     imgEL.src = "../../IMAGE/sun.icon.svg";
        // }

    });







}


ModalExit()