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
  const createPostModal = document.querySelector(".newPost");
  const deleteModalPost = document.querySelector(".deleteModalPost");

  buttonCreate.addEventListener("click", () => {
    createPostModal.style.display = "flex";
  });

  deleteModalPost.addEventListener("click", () => {
    createPostModal.style.display = "none";
  });
}

modalpost();
