const likeButton = document.querySelectorAll('.like-button');
likeButton.forEach(element => {
  element.addEventListener('click', () => {
request(element)
updatePostStats[element.textContent.trim()](element.id)
toggleButtonText[element.textContent.trim()](element)
  })
})

/* eslint-disable */
const request = (element) => { axios.post(`/posts/${element.id}/like`, {
  post_id: element.id,
})
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
});}
/* eslint-enable */

let updatePostStats = {
  Like: function (postId) {
      document.querySelector('#likes-count-' + postId).textContent++;
  },
  Unlike: function(postId) {
      document.querySelector('#likes-count-' + postId).textContent--;
  }
};

let toggleButtonText = {
  Like: (button) => {
      button.textContent = "Unlike";
  },
  Unlike: (button) => {
      button.textContent = "Like";
  }
};