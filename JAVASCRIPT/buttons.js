const btn = document.getElementById("like");



let curtido = false;

btn.addEventListener("click", () => {
  curtido = !curtido;

  if (curtido) {
    btn.classList.add("liked");
    btn.classList.remove("noliked");
  } else {
    btn.classList.remove("liked");
    btn.classList.add("noliked");
  }
});

const input = document.querySelector("#CommentInput");
const publicar = document.querySelector(".btnComment");
const ulEl = document.querySelector(".ulElement");


publicar.addEventListener("click", () => {
  const comentario = input.value.trim();

  if (!comentario) {
    alert("Seu comentário está vazio!");
    return;
  }

  const commentSalvo = JSON.parse(localStorage.getItem("comment")) || [];

  const user = JSON.parse(localStorage.getItem("usuarios"));

  let nomeUsuario = "Anônimo";

  if (user && user.length > 0) {
    nomeUsuario = user[0].nameDeUsuario;
  }

  const novoComentario = {
    usuario: nomeUsuario,
    Comment: comentario,
  };

  commentSalvo.push(novoComentario);

  localStorage.setItem("comment", JSON.stringify(commentSalvo));

  renderizarComment(novoComentario);

  input.value = "";
});


function renderizarComment(comentario) {
  const elLi = document.createElement("li");
  elLi.innerHTML = `<span>${comentario.usuario}</span> ${comentario.Comment}`;
  ulEl.appendChild(elLi);
}


window.onload = () => {
  const comentarios = JSON.parse(localStorage.getItem("comment")) || [];

  comentarios.forEach((comentario) => {
    renderizarComment(comentario);
  });
};