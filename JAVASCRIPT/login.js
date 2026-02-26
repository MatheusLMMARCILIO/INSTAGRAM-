//create login page
const acess = document.querySelector(".idDoEl");
const password = document.querySelector(".passwordId");
const username = document.querySelector(".usernameId");
const formulario = document.querySelector(".fomrulario");
const exclamation = document.querySelector(".exclamation");
const exclamation2 = document.querySelector(".exclamation2");
const exclamation3 = document.querySelector(".exclamation3");

if (!location.href == "http://127.0.0.1:5500/PAGE/login.html#") {
formulario.addEventListener("submit", createAccount);
}



function createAccount(e) {
  e.preventDefault();

  let usuariosSalvos = JSON.parse(localStorage.getItem("acesso")) || [];

  const usuario = {
    acesso: acess.value,
    senha: password.value,
    nameDeUsuario: username.value,
  };

  if (
    !usuario.acesso.trim() ||
    !usuario.senha.trim() ||
    !usuario.nameDeUsuario.trim()
  ) {
    exclamation.style.display = "flex";
    exclamation2.style.display = "flex";
    exclamation3.style.display = "flex";
  } else {
    exclamation.style.display = "none";
    exclamation.style.display = "none";
    exclamation3.style.display = "none";
    usuariosSalvos.push(usuario);
    localStorage.setItem("acesso", JSON.stringify(usuariosSalvos));
    fomrulario.reset();
  }
}
