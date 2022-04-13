console.log("hi")
      const likeButton = document.querySelectorAll('.like-button');
      likeButton.forEach(i => {
        i.addEventListener('click', async () => {
          console.log(i.id)
          const data = { post_id: i.id };
          console.log(data)
          fetch('http://localhost:3000/posts/like', {
            method: 'POST',
            body: JSON.stringify(i.id)
          })
          // if (i.style.backgroundColor === 'salmon') {
              // fetch(`http://localhost:3000/posts/like`)
              //   .then((response) => response.json())
              //   .then((data) => console.log(data))
          // }

          //   i.style.backgroundColor = 'black'
          // } 
          // else {
            // const data = { id: i.id };
            // console.log(data)
            // const step1 = await fetch('http://localhost:3000/posts/like', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify(data),
            // })
            // console.log(step1)
            // const step2 = await step1.json()
            // console.log(step2)
            // const step3 = step2(data => {
            //   console.log('Success:', data);
            // })
            // console.log(step3)

            // i.style.backgroundColor = 'salmon';
            // i.style.color = 'white';
          // }
        })
      })