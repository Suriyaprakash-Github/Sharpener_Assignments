let posts = [
  {
    title: 'Post1',
    body: 'This is post1',
  },
  {
    title: 'Post2',
    body: 'This is post2',
  },
];

const createPost = async (post) => {
  const createpromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve(posts);
    }, 2000);
  });

  const deletePost = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(posts.pop());
    }, 1000);
  });

  let crepro = await createpromise;
  console.log(crepro);
  let delpro = await deletePost;
  console.log(delpro);
};

createPost({ title: 'Post3', body: 'This is post3' }).then(() => {});
