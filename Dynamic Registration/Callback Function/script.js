let posts = [
  { title: 'Post1', body: 'This is post1', createdAt: new Date().getTime() },
  { title: 'Post2', body: 'This is post2', createdAt: new Date().getTime() },
];
let intervalId = 0;
function getPost() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title} created ${Math.floor(
        (new Date().getTime() - post.createdAt) / 1000
      )} seconds ago</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push({ ...post, createdAt: new Date().getTime() });
    callback();
  }, 2000);
}

function create4thPost(post, callback) {
  setTimeout(() => {
    posts.push({ ...post, createdAt: new Date().getTime() });
    callback();
  }, 8000);
}

createPost({ title: 'Post3', body: 'This is post3' }, getPost);
create4thPost({ title: 'Post4', body: 'This is post4' }, getPost);

// let timer;
// let counter = 0;
// function lastEditInSecondsAgo() {
//   counter = 0;
//   clearInterval(timer);
//   timer = setInterval(() => {
//     counter++;
//     console.log(counter);
//   }, 5000);
// }
