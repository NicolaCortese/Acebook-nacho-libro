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
      console.log(response.data.comments);
      updateComments(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
/* eslint-enable */

const updateComments = (data) => {
  let commentAuthorsEl = document.querySelector('.commented-by')

  commentAuthorsEl.innerText = ''
  data.comments.forEach(comment => {
    console.log(comment)
    let name = document.createElement("p")
    name.className = "comment-author"
    name.innerText = comment.author
    commentAuthorsEl.append(name)
  })
}