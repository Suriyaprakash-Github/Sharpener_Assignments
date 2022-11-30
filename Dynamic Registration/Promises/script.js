let posts = [
  {
    title: 'Post1',
    body: 'This is post1',
    lastActivityTime: new Date().getTime(),
  },
  {
    title: 'Post2',
    body: 'This is post2',
    lastActivityTime: new Date().getTime(),
  },
];

function getPost() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title} created ${Math.floor(
        (new Date().getTime() - post.lastActivityTime) / 1000
      )} seconds ago</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ ...post, lastActivityTime: new Date().getTime() });
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

// createPost({ title: 'Post3', body: 'This is post3' })
//   .then(() => {
//     getPost();
//     deletePost().then(() => {
//       getPost();
//       deletePost().then(() => {
//         getPost();
//         deletePost().then(() => {
//           getPost();
//           createPost({ title: 'Post4', body: 'This is post4' }).then(() => {
//             getPost();
//             deletePost().then(() => {
//               getPost();
//               deletePost()
//                 .then(() => {})
//                 .catch((err) => console.log(err));
//             });
//           });
//         });
//       });
//     });
//   })
//   .catch((err) => console.log(err));

//from youtube video:
// const promise1 = promise.resole('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, 'Goodbye')
// );
// Promise.all([promise1, promise2, promise3]).then((values) =>
//   console.log(values)
// );

// Task:
function updateLastActivityTime(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.lastActivityTime = new Date().getTime();
      resolve(console.log(posts.lastActivityTime));
    }, 1000);
  });
}

Promise.all([
  createPost({ title: 'Post3', body: 'This is post3' }),
  updateLastActivityTime(),
]).then(() => {
  getPost();
  updateLastActivityTime();
  deletePost().then(() => {
    getPost();
    updateLastActivityTime();
    deletePost().then(() => {
      getPost();
      updateLastActivityTime();
      deletePost().then(() => {});
    });
  });
});
