function showMessage() {
  const messageDirect = document.querySelector(".matheus");
  const messagemBloco = document.querySelector(".messagemm");
  const nomessagem = document.querySelector(".nomessagem");
  const persona = document.querySelector("#persona");
  setTimeout(() => {
    messageDirect.style.display = "flex";
  }, 1500);

  messageDirect.addEventListener("click", () => {
    nomessagem.style.display = "none";
    messagemBloco.style.display = "flex";
  });

  const user = JSON.parse(localStorage.getItem("usuarios"));
  persona.innerHTML = `<span>${user[0].nameDeUsuario}</span>`
}

showMessage();
