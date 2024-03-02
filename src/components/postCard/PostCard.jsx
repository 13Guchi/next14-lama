import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="/noavatar.png"
            alt="post image"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>

      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          esse accusamus culpa cupiditate sunt necessitatibus tempora assumenda,
          odit, eaque et ipsum quae. Nihil, possimus voluptates. Quisquam maxime
          cum laboriosam quaerat.
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
