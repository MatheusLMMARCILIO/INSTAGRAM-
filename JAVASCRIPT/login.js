//create login page
const acess = document.querySelector(".idDoEl");
const password = document.querySelector(".passwordId");
const username = document.querySelector(".usernameId");
const formulario = document.querySelector(".fomrulario");
const exclamation = document.querySelector(".exclamation");
const exclamation2 = document.querySelector(".exclamation2");
const exclamation3 = document.querySelector(".exclamation3");

if (formulario) {
  formulario.addEventListener("submit", createAccount);
}

const usuario = {
    acesso: acess.value,
    senha: password.value,
    nameDeUsuario: username.value,
  };

function createAccount(e) {
  e.preventDefault();

  let usuariosSalvos = JSON.parse(localStorage.getItem("acesso")) || [];

  

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
    exclamation2.style.display = "none";
    exclamation3.style.display = "none";
    usuariosSalvos.push(usuario);
    localStorage.setItem("acesso", JSON.stringify(usuariosSalvos));
    formulario.reset();
  }
}

// make login page

const IDAcess = document.querySelector(".idpEmail");
const passwordAcess = document.querySelector(".iptPassword");
const btnAcess = document.querySelector('.iptSubmit')
const form = document.querySelector('#formId')
 

function makeLogin() {

  if (IDAcess == usuario.acesso && passwordAcess == usuario.senha) {
    alert(`Parabéns, ${usuario.nameDeUsuario}! Você fez o login`)
  } else {
    
  }



}

