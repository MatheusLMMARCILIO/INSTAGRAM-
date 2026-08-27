const like = document.querySelector(".btnLike");
const comment = document.querySelector(".btnComment");

const Photoaaa = document.querySelector("#Photo");
const postImh = Photoaaa.src;
const perfilF = document.querySelector("#PerfilPhoto");

const perfil = perfilF.src;

//modal
const divModalComment = document.querySelector(".modalcomments");

//localStorage
const reaction = localStorage.getItem("reaction");

function btnComment(button, modal, post, name, perfil) {
  button.addEventListener("click", () => {
    modal.style.display = "flex";
    createModalComment(post, name, perfil);
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

function createModalComment(post, name, perfil) {
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

  const divExit = document.createElement("div");
  divExit.classList.add("exitt");

  const ElspanExit = document.createElement("span");
  ElspanExit.innerHTML = "&times;";

  const divPersonComment = document.createElement("div");
  divPersonComment.classList.add("commentsPerson");

  const elUlLista = document.createElement("ul");
  elUlLista.classList.add("comentarios");

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

  divInput.appendChild(emoji);
  divInput.appendChild(input);
  divInput.appendChild(submit);

  divPersonComment.appendChild(elUlLista);

  divExit.appendChild(ElspanExit);

  divMyself.appendChild(imgMySelf);
  divMyself.appendChild(pMyself);

  DivComment.appendChild(divInput);
  DivComment.appendChild(divPersonComment);
  DivComment.appendChild(divExit);
  DivComment.appendChild(divMyself);

  divPostleft.appendChild(imgPost);

  divAllPost.appendChild(divPostleft);
  divAllPost.appendChild(DivComment);

  divModalComment.appendChild(divAllPost);
}

btnLike(like);

btnComment(comment, divModalComment, postImh, "mmatheuww", perfil);
