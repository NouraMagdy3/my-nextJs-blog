import React from "react";
import Image from "next/image";
import postImg from "../images/postImg.png";
import styles from "../page.module.css";
import { Suspense } from "react";
import PostDetails from "../components/postDetails";

const PostPage = async ({ params }) => {
  const postId = params.postId;

  return (
    <div
      className={styles.description}
      style={{
        marginTop: "110px",
      }}
    >
      <div
        style={{
          width: "50%",
        }}
      >
        <Image
          src={postImg}
          alt="Picture of the post"
          style={{ width: "100%", height: "350px" }}
        />
        <Suspense fallback={<h4>Loading...</h4>}>
          <PostDetails postId={postId} />
        </Suspense>
      </div>
    </div>
  );
};

export default PostPage;
