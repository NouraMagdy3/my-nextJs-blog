import React from "react";
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
        flexDirection: "column",
      }}
    >
      <h3>post Details</h3>
      <br></br>
      <Suspense fallback={<h4>wait...</h4>}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
};

export default PostPage;
