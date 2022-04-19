const commentButton = document.querySelectorAll(".comment-button");
commentButton.forEach((element) => {
  element.addEventListener("click", () => {
    onCommentButtonClick(element);
  });
});

/* eslint-disable */
const onCommentButtonClick = (element) => {
  axios
    .post(`/posts/${element.id}/comment`, {
      post_id: element.id,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
