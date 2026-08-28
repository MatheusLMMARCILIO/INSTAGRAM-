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
  usuarios[0].name,
);

// switch

const you = document.querySelector(".you")

you.innerHTML = usuarios[0].name


//create post

const createNewModal = document.querySelector(".createNew")
const modalCreatePost = document.querySelector(".createPostModal")
const postCreateNow = document.querySelector(".postCreateNow")
const fileImgBtn = document.querySelector("#imageInput")
const btnCreatePost = document.querySelector(".createModal")
const btnExitt = document.querySelector(".deleteModalPost")
const newPossssst = document.querySelector(".btnPosta")
const errorP = document.querySelector(".errorPhoto")
const fileImage = document.querySelector("#FileImage")
const PostUL = document.querySelector(".PostUL")

let imagePhoto = null
let postSave = JSON.parse(localStorage.getItem("post")) || []

btnCreatePost.addEventListener("click", () => {
  modalCreatePost.style.display = "flex"
})

btnExitt.addEventListener("click", () => {
  modalCreatePost.style.display = "none"
})

fileImgBtn.addEventListener("change", () => {
  const image = fileImgBtn.files[0]
  if (image) {
    imagePhoto = image
    createNewModal.style.display = "none"
    postCreateNow.style.display = "flex"
    fileImage.src = URL.createObjectURL(image)
  } else {
    errorP.textContent = "Your image is corrupted or is not an image."
    errorP.style.color = "red"
  }
})

function criarUrlDaImagem(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
}

function excluirPost(index, elemento) {
  postSave.splice(index, 1)
  localStorage.setItem("post", JSON.stringify(postSave))
  elemento.remove()
}

function creatingANewPost(user, image, modal, index) {
  const elLi = document.createElement("li")
  const divPost = document.createElement("div")
  divPost.classList.add("post")

  const divMyself = document.createElement("div")
  divMyself.classList.add("myself")

  const imgProfile = document.createElement("img")
  imgProfile.src = "../../IMAGE/profileIcone.avif"

  const pProfile = document.createElement("p")
  pProfile.textContent = user

  const btnDelete = document.createElement("button")
  btnDelete.classList.add("deletePost")

  btnDelete.innerHTML = `
    <svg aria-label="Delete" height="24" role="img" viewBox="0 0 24 24" width="24">
      <title>Delete</title>
      <path d="M3 6h18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"></path>
      <path d="M8 6V4h8v2M19 6l-1 15H6L5 6M10 10v7M14 10v7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
    </svg>
  `

  btnDelete.addEventListener("click", () => {
    excluirPost(index, elLi)
  })

  const postPhotoDiv = document.createElement("div")
  postPhotoDiv.classList.add("postPhoto")

  const postImage = document.createElement("img")
  postImage.src = image

  const btnReacts = document.createElement("div")
  btnReacts.classList.add("buttonsReaction")

  const elulReacts = document.createElement("ul")

  const ellike = document.createElement("li")
  ellike.classList.add("btnLike")

  ellike.addEventListener("click", () => {
    btnLike(ellike)
  })

  const svglike = document.createElement("div")
  svglike.innerHTML = `
    <svg aria-label="Like" height="24" role="img" viewBox="0 0 48 48" width="24">
      <title>Like</title>
      <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
    </svg>
  `

  const elComment = document.createElement("li")
  elComment.classList.add("btnComment")

  elComment.addEventListener("click", () => {
btnComment(
  elComment,
  divModalComment,
  image,
  user,
  "../../IMAGE/profileIcone.avif",
  usuarios[0].name
)
  })

  const svgcomment = document.createElement("div")
  svgcomment.innerHTML = `
    <svg aria-label="Comment" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
      <title>Comment</title>
      <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
    </svg>
  `


  const elshare = document.createElement("li")
  elshare.classList.add("btnShare")

  const svgshare = document.createElement("div")
  svgshare.innerHTML = `
    <svg aria-label="Repost" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
      <title>Repost</title>
      <path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z"></path>
    </svg>
  `

  const elSend = document.createElement("li")
  elSend.classList.add("btnSend")

  const svgsend = document.createElement("div")
  svgsend.innerHTML = `
    <svg aria-label="Share" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
      <title>Share</title>
      <path d="M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
      <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7.488" x2="15.515" y1="12.208" y2="7.641"></line>
    </svg>
  `

  ellike.appendChild(svglike)
  elComment.appendChild(svgcomment)
  elshare.appendChild(svgshare)
  elSend.appendChild(svgsend)

  elulReacts.appendChild(ellike)
  elulReacts.appendChild(elComment)
  elulReacts.appendChild(elshare)
  elulReacts.appendChild(elSend)

  btnReacts.appendChild(elulReacts)
  postPhotoDiv.appendChild(postImage)

  divMyself.appendChild(imgProfile)
  divMyself.appendChild(pProfile)
  divMyself.appendChild(btnDelete)

  divPost.appendChild(divMyself)
  divPost.appendChild(postPhotoDiv)
  divPost.appendChild(btnReacts)

  elLi.appendChild(divPost)
  modal.appendChild(elLi)
}

newPossssst.addEventListener("click", async () => {
  if (!imagePhoto) {
    errorP.textContent = "Please select an image."
    errorP.style.color = "red"
    return
  }

  const imagem = await criarUrlDaImagem(imagePhoto)

  postSave.push(imagem)

  localStorage.setItem("post", JSON.stringify(postSave))

  creatingANewPost(
    usuarios[0].name,
    imagem,
    PostUL,
    postSave.length - 1
  )

  imagePhoto = null
  fileImgBtn.value = ""
  modalCreatePost.style.display = "none"
})

postSave.forEach((post, index) => {
  creatingANewPost(
    usuarios[0].name,
    post,
    PostUL,
    index
  )
})