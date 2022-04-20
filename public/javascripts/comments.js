const commentButton = document.querySelectorAll(".comment-button"); 

commentButton.forEach((element) => {
  element.addEventListener("click", () => {
    onCommentButtonClick(element);
  });
});

/* eslint-disable */
const onCommentButtonClick = (element) => {
  const commentText = document.querySelector(`#text-${element.id}`).value
  axios
    .post(`/posts/${element.id}/comment`, {
      text: commentText,
      post_id: element.id.replace("comment-",""),
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
