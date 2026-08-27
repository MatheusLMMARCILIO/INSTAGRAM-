//comment

const like = document.querySelector(".btnLike");
const comment = document.querySelector(".btnComment");
const exitt = document.querySelector(".exitt");
const popup = document.getElementById("popup");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const emptyPopup = document.querySelector("#emptyPopup");
const okAlert = document.querySelector("#okAlert");

const Photoaaa = document.querySelector("#Photo");
const postImh = Photoaaa.src;
const perfilF = document.querySelector("#PerfilPhoto");

const perfil = perfilF.src;

//modal
const divModalComment = document.querySelector(".modalcomments");
const postModal = document.querySelector(".postModal");

//localStorage
const reaction = localStorage.getItem("reaction");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const comentario = JSON.parse(localStorage.getItem("Commit")) || [];

exitt.addEventListener("click", () => {
  divModalComment.style.display = "none";
  postModal.innerHTML = "";
});

okAlert.addEventListener("click", () => {
  emptyPopup.style.display = "none";
});

function btnComment(button, modal, post, name, perfil, user) {
  button.addEventListener("click", () => {
    modal.style.display = "flex";

    postModal.innerHTML = "";

    createModalComment(post, name, perfil, user);
  });
}

function btnLike(button) {
  if (reaction === "true") {
    button.classList.add("liked");
  }

  button.addEventListener("click", () => {
    button.classList.toggle("liked");

    localStorage.setItem("reaction", button.classList.contains("liked"));
  });
}

function createModalComment(post, name, perfil, user) {
  const divAllPost = document.createElement("div");
  divAllPost.classList.add("allpost");

  const divPostleft = document.createElement("div");
  divPostleft.classList.add("postPhotoModal");

  const divPostPicture = document.createElement("div");
  divPostPicture.classList.add("div");

  const imgPost = document.createElement("img");
  imgPost.src = post;

  const DivComment = document.createElement("div");
  DivComment.classList.add("commentsPost");

  const divMyself = document.createElement("div");
  divMyself.classList.add("myself");

  const imgMySelf = document.createElement("img");
  imgMySelf.src = perfil;

  const pMyself = document.createElement("p");
  pMyself.textContent = name;

  const divPersonComment = document.createElement("div");
  divPersonComment.classList.add("commentsPerson");

  const elUlLista = document.createElement("ul");
  elUlLista.classList.add("comentarios");

  comentario.forEach((item) => {
    addComment(item.texto, elUlLista, item.nome, comentario.length - 1);
  });

  const divInput = document.createElement("div");
  divInput.classList.add("comments");

  const emoji = document.createElement("svg");
  emoji.innerHTML = `  <svg
              aria-label="Emoji"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Emoji</title>
              <path
                d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"
              ></path>
            </svg>`;

  const input = document.createElement("input");
  input.type = "text";
  input.classList.add("ComentariosIN");
  input.placeholder = "Add a comment";

  const submit = document.createElement("input");
  submit.type = "submit";
  submit.classList.add("PostIN");
  submit.value = "Post";
  submit.addEventListener("click", () => {
    if (input.value === "") {
      emptyPopup.style.display = "flex";
    } else {
      comentario.push({
        texto: input.value,
        nome: user,
      });

      localStorage.setItem("Commit", JSON.stringify(comentario));

      addComment(input.value, elUlLista, user, comentario);
    }

    input.value = "";
  });

  divMyself.appendChild(imgMySelf);
  divMyself.appendChild(pMyself);

  divInput.appendChild(emoji);
  divInput.appendChild(input);
  divInput.appendChild(submit);

  divPersonComment.appendChild(elUlLista);

  DivComment.appendChild(divMyself);
  DivComment.appendChild(divPersonComment);
  DivComment.appendChild(divInput);

  divPostleft.appendChild(imgPost);
  divAllPost.appendChild(divPostleft);
  divAllPost.appendChild(DivComment);

  postModal.appendChild(divAllPost);
}

function addComment(text, modal, nome, index) {
  console.log("TEXTO RECEBIDO:", text);

  const elLi = document.createElement("li");

  const allcommit = document.createElement("div");
  allcommit.classList.add("AllCommit");

  const elDivPerson = document.createElement("div");
  elDivPerson.classList.add("person");

  const elImg = document.createElement("img");
  elImg.src = "../../IMAGE/profileIcone.avif";

  const elP = document.createElement("p");

  elP.textContent = nome;

  elDivPerson.appendChild(elImg);
  elDivPerson.appendChild(elP);

  const elDivComment = document.createElement("div");
  elDivComment.classList.add("commentPErson");

  const elSpanComment = document.createElement("span");

  elSpanComment.textContent = text;

  elDivComment.appendChild(elSpanComment);

  const ElDivExit = document.createElement("div");
  ElDivExit.classList.add("deleteComment");

  const elSpanExit = document.createElement("span");
  elSpanExit.innerHTML = "&times;";

  elSpanExit.addEventListener("click", () => {
    comentario.splice(index, 1);

    localStorage.setItem("Commit", JSON.stringify(comentario));

    elLi.remove();
  });

  ElDivExit.appendChild(elSpanExit);

  allcommit.appendChild(elDivPerson);
  allcommit.appendChild(elDivComment);
  allcommit.appendChild(ElDivExit);

  elLi.appendChild(allcommit);
  modal.appendChild(elLi);
}

btnLike(like);

btnComment(
  comment,
  divModalComment,
  postImh,
  "mmatheuww",
  perfil,
  usuarios[0].nome,
);

// switch

const you = document.querySelector(".you")

you.innerHTML = usuarios[0].nome