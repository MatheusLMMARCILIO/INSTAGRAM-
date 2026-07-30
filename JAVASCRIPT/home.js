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

function commentss() {

  const textComennt = document.querySelector(".ComentariosIN")
  const btnComment = document.querySelector(".PostIN")

  btnComment.addEventListener("click", () => {


    

  })


}

commentss() 
