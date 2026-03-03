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

function createAccount(e) {
  e.preventDefault();

  let usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

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
    exclamation2.style.display = "none";
    exclamation3.style.display = "none";

 const existe = usuariosSalvos.some((u) => u.acesso === usuario.acesso);
  if (existe) {
     alert("Usuário já cadastrado!");
     acess.focus()
    return
  }
    usuariosSalvos.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));
    formulario.reset();
  }

 
}

// make login page

const IDAcess = document.querySelector(".idpEmail");
const passwordAcess = document.querySelector(".iptPassword");
const form = document.querySelector("#formPage");
const errorLogin = document.querySelector(".erroLogin");

function makeLogin() {
  const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios')) || []
  const usuarioEncontrado = usuariosSalvos.find(dados => dados.acesso === IDAcess.value && dados.senha === passwordAcess.value)
  
  if (usuarioEncontrado) {
    alert(`Parabéns, ${usuarioEncontrado.nameDeUsuario}! Você fez o login`)
errorLogin.style.display = 'none'
  } else {
    errorLogin.style.display = "flex";
  }

}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  makeLogin()
});
