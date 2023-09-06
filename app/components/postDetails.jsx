import React from "react";

const PostDetails = async ({ postId }) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();

  return (
    <section>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </section>
  );
};

export default PostDetails;
