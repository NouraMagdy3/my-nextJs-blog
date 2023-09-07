import React from "react";
import Image from "next/image";

const PostDetails = async ({ postId }) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const response = await fetch(
    `https://api.slingacademy.com/v1/sample-data/photos/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();

  return (
    <div
      style={{
        width: "50%",
      }}
    >
      <Image
        src={post.photo.url}
        alt="Picture of the post"
        width={800}
        height={420}
        objectFit="cover"
      />
      <section>
        <h4>{post.photo.title}</h4>
        <p>{post.photo.description}</p>
      </section>
    </div>
  );
};

export default PostDetails;
