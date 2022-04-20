const commentButton = document.querySelectorAll(".comment-button");

commentButton.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element)
    const commentText = document.querySelector(".comment-text")
    onCommentButtonClick(element);
    console.log('it works')
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
