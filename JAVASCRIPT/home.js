const like = document.querySelector(".btnLike");

function btnLike(button) {
  button.addEventListener("click", () => {
    button.classList.toggle("liked");
  });
}

btnLike(like);

