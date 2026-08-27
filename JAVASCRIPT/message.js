
  const messageDirect = document.querySelector(".matheus");
  const messagemBloco = document.querySelector(".messagemm");
  const nomessagem = document.querySelector(".nomessagem");
  const persona = document.querySelector("#persona");

const usuario = JSON.parse(localStorage.getItem("usuarios"))
persona.innerHTML =     `<span>${usuario[0].nome}</span>`


  setTimeout(() => {
    messageDirect.style.display = "flex";
  }, 1500);

  messageDirect.addEventListener("click", () => {
    nomessagem.style.display = "none";
    messagemBloco.style.display = "flex";
  });



