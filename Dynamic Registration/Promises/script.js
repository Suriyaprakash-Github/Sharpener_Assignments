let posts = [
  { title: 'Post1', body: 'This is post1' },
  { title: 'Post2', body: 'This is post2' },
];

function getPost() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title} created seconds ago</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Eror: Something Went wrong');
      }
    }, 2000);
  });
}

function deletePost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        resolve(posts.pop());
      } else {
        reject('Array is empty');
      }
    }, 1000);
  });
}

createPost({ title: 'Post3', body: 'This is post3' })
  .then(() => {
    getPost();
    deletePost().then(() => {
      getPost();
      deletePost().then(() => {
        getPost();
        deletePost().then(() => {
          getPost();
          createPost({ title: 'Post4', body: 'This is post4' }).then(() => {
            getPost();
            deletePost().then(() => {
              getPost();
              deletePost()
                .then(() => {})
                .catch((err) => console.log(err));
            });
          });
        });
      });
    });
  })
  .catch((err) => console.log(err));
