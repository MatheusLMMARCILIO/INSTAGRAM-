function btnReactions() {
  function like() {
    const likeSvg = document.querySelector(".btnLike path");

    const likeSalvo = localStorage.getItem("likeSalvo");

    if (likeSalvo === "true") {
      likeSvg.classList.add("liked");
    }

    likeSvg.addEventListener("click", () => {
      likeSvg.classList.toggle("liked");

      localStorage.setItem("likeSalvo", likeSvg.classList.contains("liked"));
    });
  }

  like();

  function share() {
    const btnShare = document.querySelector(".btnShare");

    let compartilhamentos = Number(localStorage.getItem("share")) || 0;
    let compartilhou = localStorage.getItem("compartilhou") === "true";

    const spanEL = document.createElement("span");
    spanEL.classList.add("SpanShare");
    spanEL.textContent = compartilhamentos;

    btnShare.appendChild(spanEL);

    btnShare.addEventListener("click", () => {
      if (!compartilhou) {
        compartilhamentos++;
        compartilhou = true;
      } else {
        if (compartilhamentos > 0) {
          compartilhamentos--;
        }
        compartilhou = false;
      }

      spanEL.textContent = compartilhamentos;

      localStorage.setItem("share", compartilhamentos);
      localStorage.setItem("compartilhou", compartilhou);
    });
  }

  share();
}

btnReactions();

function modalComment() {
  const btns = document.querySelectorAll(".btnComment");
  const modal = document.querySelector(".modalcomments");
  const exit = document.querySelector(".exitt span");

  const buttonPost = document.querySelector(".PostIN");
  const postInput = document.querySelector(".ComentariosIN");
  const childUl = document.querySelector(".comentarios");

  const popup = document.getElementById("popup");
  const yes = document.getElementById("yes");
  const no = document.getElementById("no");

  const emptyPopup = document.getElementById("emptyPopup");
  const okAlert = document.getElementById("okAlert");

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuarioAtual = Array.isArray(usuarios) ? usuarios[0] : usuarios;

  let comentariosSave = JSON.parse(localStorage.getItem("savecomment")) || [];

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  });

  exit.addEventListener("click", () => {
    modal.style.display = "none";
  });

  okAlert.onclick = () => {
    emptyPopup.classList.add("hidden");
  };

  function salvarComentarios() {
    localStorage.setItem("savecomment", JSON.stringify(comentariosSave));
  }

  function mostrarComentario(comentario) {
    const elLi = document.createElement("li");

    const elDivPerson = document.createElement("div");
    elDivPerson.classList.add("person");

    const elImg = document.createElement("img");
    elImg.src = "/IMAGE/profileIcone.avif";

    const elP = document.createElement("p");

    elP.textContent =
      comentario.nome || usuarioAtual?.nameDeUsuario || "Usuário";

    elDivPerson.appendChild(elImg);
    elDivPerson.appendChild(elP);

    const elDivComment = document.createElement("div");
    elDivComment.classList.add("commentPErson");

    const elSpanComment = document.createElement("span");

    elSpanComment.textContent = comentario.texto || comentario;

    elDivComment.appendChild(elSpanComment);

    const ElDivExit = document.createElement("div");
    ElDivExit.classList.add("deleteComment");

    const elSpanExit = document.createElement("span");
    elSpanExit.innerHTML = "&times;";

    elSpanExit.addEventListener("click", () => {
      popup.classList.remove("hidden");

      yes.onclick = () => {
        elLi.remove();

        comentariosSave = comentariosSave.filter(
          (item) => item.id !== comentario.id,
        );

        salvarComentarios();

        popup.classList.add("hidden");
      };
    });

    ElDivExit.appendChild(elSpanExit);

    elLi.appendChild(elDivPerson);
    elLi.appendChild(elDivComment);
    elLi.appendChild(ElDivExit);

    childUl.appendChild(elLi);
  }

  function adicionarComentario(texto) {
    const novoComentario = {
      id: Date.now(),
      nome: usuarioAtual?.nameDeUsuario || "Usuário",
      texto: texto,
    };

    comentariosSave.push(novoComentario);

    salvarComentarios();

    mostrarComentario(novoComentario);

    postInput.value = "";
  }

  comentariosSave.forEach((comentario) => {
    if (typeof comentario === "string") {
      const comentarioConvertido = {
        id: Date.now() + Math.random(),
        nome: usuarioAtual?.nameDeUsuario || "Usuário",
        texto: comentario,
      };

      mostrarComentario(comentarioConvertido);
    } else {
      mostrarComentario(comentario);
    }
  });

  buttonPost.addEventListener("click", () => {
    const textInput = postInput.value.trim();

    if (textInput === "") {
      emptyPopup.classList.remove("hidden");

      return;
    }

    adicionarComentario(textInput);
  });

  no.onclick = () => {
    popup.classList.add("hidden");
  };
}

modalComment();

function modalSwitch() {
  const modal = document.querySelector(".modalSwitch");
  const close = document.querySelector(".switchCloseModal p");
  const button = document.querySelector(".btnCLassSwitch");

  button.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
modalSwitch();

function modalpost() {
  const buttonCreate = document.querySelector(".createModal");
  const createPostModal = document.querySelector(".createPostModal");
  const deleteModalPost = document.querySelector(".deleteModalPost");
  const imageFile = document.querySelector("#imageInput");
  const postBtn = document.querySelector(".newPossssst");
  const ulPost = document.querySelector(".PostUL");
  let imageFilee;

  const postSave = localStorage.getItem("post") || [];
  const user = localStorage.getItem("usuarios") || [];

  buttonCreate.addEventListener("click", () => {
    createPostModal.style.display = "flex";
  });

  deleteModalPost.addEventListener("click", () => {
    createPostModal.style.display = "none";
  });

  function postCreate() {
    const elDivPost = document.createElement("div");
    elDivPost.classList.add("post");

    const elDivMySelf = document.createElement("div");
    elDivMySelf.classList.add("myself");

    const elImg = document.createElement("img");
    elImg.src = "http://127.0.0.1:5500/PAGE/IMAGE/profileIcone.avif";

    const elPName = document.createElement("p");
    elPName.textContent = user.nameDeUsuario;
    const elpostDiv = document.createElement("img");
    elpostDiv.classList.add("postPhoto");

    elpostDiv.src = URL.createObjectURL(imageFile);

    const btnEldiv = document.createElement("div");
    btnEldiv.classList.add("buttonsReaction");

    const elUl = document.createElement("ul");
    const elLi = document.createElement("li");

    const like = document.createElement("span");
    const comment = document.createElement("span");
    const share = document.createElement("span");
    const send = document.createElement("span");

    like.innerHTML = `
    <svg height="24" viewBox="0 0 48 48" width="24">
      <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
    </svg>
  `;

    comment.innerHTML = `
    <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24">
      <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
        fill="none"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-width="2">
      </path>
    </svg>
  `;

    share.innerHTML = `
    <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24">
      <path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Z"></path>
    </svg>
  `;

    send.innerHTML = `
    <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24">
      <path
        d="M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z"
        fill="none"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-width="2">
      </path>
    </svg>
  `;

    elLi.appendChild(like);
    elLi.appendChild(comment);
    elLi.appendChild(share);
    elLi.appendChild(send);

    elUl.appendChild(elLi);
    btnEldiv.appendChild(elUl);

    elDivMySelf.appendChild(elImg);
    elDivMySelf.appendChild(elPName);

    elDivPost.appendChild(elDivMySelf);
    elDivPost.appendChild(elpostDiv);
    elDivPost.appendChild(btnEldiv);

    ulPost.appendChild(elDivPost);
  }



imageInput.addEventListener("change", (event) => {
  imageFilee = event.target.files[0];

  if (imageFilee) {
    postBtn.style.display = "flex";
  }
});

postBtn.addEventListener("click", () => {
  if (imageFilee) {
    postCreate();
  }
});
}

modalpost();
