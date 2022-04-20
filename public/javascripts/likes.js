const likeButton = document.querySelectorAll(".like-button");
likeButton.forEach((element) => {
  element.addEventListener("click", () => {
    onLikeButtonClick(element);
    // updatePostStats[element.textContent.trim()](element.id);
    // updateLikedByList[element.textContent.trim()](element.id);
    toggleButtonText[element.textContent.trim()](element);
  });
});

const accordionEl = document.querySelectorAll(".accordion");
accordionEl.forEach((element) => {
  element.addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
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
  let likeBtnEl = document.querySelector(".like-button")
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
    button.className = "unlike-button";
  },
  Unlike: (button) => {
    button.textContent = "Like";
    button.className = "like-button";
  },
};

// let updateLikedByList = {
//   Like: (postId) => {
//     console.log("check this has been called");
//     const post = document.querySelector("#post-" + postId);
//     const likedBy = document.createElement("span");
//     likedBy.innerText = "Batman placeholder";
//     post.append(likedBy);
//   },
//   Unlike: (button) => {
//     // find the liked-by list
//     // remove the user from the list
//     console.log("check this has been called");
//     const post = document.querySelector("#post-" + postId);
//     const likedBy = document.createElement("span");
//     likedBy.innerText = "Batman placeholder";
//   },
// };
