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

/* eslint-disable */
const onLikeButtonClick = (element) => {
  axios
    .post(`/posts/${element.id}/${element.textContent.trim()}`, {
      post_id: element.id,
    })
    .then((response) => {
      updateLikes(response.data, element.id);
    })
    .catch((error) => {
      console.log(error);
    });
};
/* eslint-enable */

const updateLikes = (data, post_id) => {
  let likeCountEl = document.querySelector(`#likes-count-${post_id}`)
  let likeNamesEl = document.querySelector(`#like-names-${post_id}`)
  likeCountEl.innerText = (data.likes.length)
  
  // logic probably needed for liking or unliking
  likeNamesEl.innerText = ""
  data.likes.forEach(like => {
    let para = document.createElement("p")
    para.className = "like-name"
    para.innerText = like
    likeNamesEl.append(para)
  })
}

let toggleButtonText = {
  Like: (button) => {
    button.textContent = "Unlike";
    button.className = "Unlike-button";
  },
  Unlike: (button) => {
    button.textContent = "Like";
    button.className = "Like-button";
  },
};
