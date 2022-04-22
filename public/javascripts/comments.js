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
      // console.log(response.data.comments);
      removeComments(response.data);

      updateComments(response.data);
      document.querySelector(`#text-${element.id}`).value = ""
    })
    .catch((error) => {
      console.log(error);
    });
};
/* eslint-enable */

const updateComments = (data) => {
  let commentSectionEl = document.querySelector(`#comment-section-${data._id}`)
  
  
  data.comments.forEach(comment => {
   
    let commentObject = document.createElement('div')
    commentObject.className = `comment-object`
    commentSectionEl.append(commentObject)
    console.log(comment._id)
    
    let name = document.createElement("p")
    name.className = "comment-author"
    name.innerText = comment.author
    commentObject.append(name)

    let text = document.createElement("p")
    text.className = "comment-text"
    text.innerText = comment.message
    commentObject.append(text)

/* eslint-disable */

    let time = document.createElement("p")
    time.className = "comment-timeago"
    time.innerText = moment().to(comment.timestamp)
    commentObject.append(time)
    

  })
}
/* eslint-enable */

const removeComments = (data) => {
    console.log(data._id)
    let section = document.querySelector(`#comment-section-${data._id}`)

    section.innerHTML = ""
}

