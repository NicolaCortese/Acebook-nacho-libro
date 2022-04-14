const likeButton = document.querySelectorAll('.like-button');
likeButton.forEach(element => {
  element.addEventListener('click', () => {
request(element)
updatePostStats[element.textContent.trim()](element.id)
toggleButtonText[element.textContent.trim()](element)
  })
})

const request = (element) => {axios.post(`/posts/${element.id}/like`, {
  post_id: element.id,
})
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
});}

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

// let actOnPost = function (event) {
//   let postId = event.target.dataset.postId;
//   let action = event.target.textContent.trim();
//   toggleButtonText[action](event.target);
//   updatePostStats[action](postId);
//   axios.post('/posts/' + postId + '/act', { action: action });
// }; 