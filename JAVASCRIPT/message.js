function showMessage() {
  const messageDirect = document.querySelector(".matheus");
  const messagemBloco = document.querySelector(".messagemm");
  const nomessagem = document.querySelector(".nomessagem");
  setTimeout(() => {
    messageDirect.style.display = "flex";
  }, 1500);

  messageDirect.addEventListener("click", () => {
    nomessagem.style.display = "none";
    messagemBloco.style.display = "flex";
  });
}

showMessage();
