const likeButton = document.querySelectorAll(".Like-button");
const unlikeButton = document.querySelectorAll(".Unlike-button");
likeButton.forEach((element) => {
  element.addEventListener("click", () => {
    onLikeButtonClick(element);
    toggleButtonText[element.textContent.trim()](element);
  });
});

unlikeButton.forEach((element) => {
  element.addEventListener("click", () => {
    onLikeButtonClick(element);
    toggleButtonText[element.textContent.trim()](element);
  });
});

const accordionEl = document.querySelectorAll(".accordion");
accordionEl.forEach((element) => {
  element.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

/* eslint-disable */
const onLikeButtonClick = (element) => {
  axios
    .post(`/posts/${element.id}/${element.textContent.trim()}`, {
      post_id: element.id,
    })
    .then((response) => {
      updateLikes(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
/* eslint-enable */

const updateLikes = (data) => {
  let likeCountEl = document.querySelector(".likes-count")
  let likeNamesEl = document.querySelector(".panel")
  likeCountEl.innerText = (data.likes.length)
  
  // logic probably needed for liking or unliking
  likeNamesEl.innerText = ""
  data.likes.forEach(like => {
    let para = document.createElement("p")
    para.innerText = like
    likeNamesEl.append(para)
  })
}

let toggleButtonText = {
  Like: (button) => {
    console.log("button toggled");
    button.textContent = "Unlike";
    button.className = "Unlike-button";
  },
  Unlike: (button) => {
    button.textContent = "Like";
    button.className = "Like-button";
  },
};
