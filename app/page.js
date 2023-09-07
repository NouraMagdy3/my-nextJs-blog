import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  const response = await fetch(
    "https://api.slingacademy.com/v1/sample-data/photos?offset=3&limit=15",
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const posts = await response.json();

  const postsJSX = posts.photos.map((post) => {
    return (
      <div>
        <Image
          src={post.url}
          alt="Picture of the post"
          width={100}
          height={200}
          layout="responsive"
        />
        <section>
          <h4 className={styles.description}>
            <Link href={`${post.id}`}>{post.title}</Link>
          </h4>
          <p className={styles.description}>{post.description}</p>
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
