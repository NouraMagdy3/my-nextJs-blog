import Image from "next/image";
import postImg from "./images/postImg.png";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/?_limit=15",
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const posts = await response.json();

  const postsJSX = posts.map((post) => {
    return (
      <div>
        <Image
          src={postImg}
          alt="Picture of the post"
          layout="responsive"
        />
        <section>
          <h4 className={styles.description}>
            <Link href={`${post.id}`}>{post.title}</Link>
          </h4>
          <p className={styles.description}>{post.body}</p>
        </section>
      </div>
    );
  });

  return (
    <main className={styles.main}>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Ixartz’s Posts
        </p>
        <span
          style={{
            fontWeight: "300",
            fontSize: "15px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          bibendum.
        </span>
      </div>
      <div
        className={styles.description}
        style={{
          marginTop: "70px",
        }}
      >
        {postsJSX}
      </div>
    </main>
  );
}
