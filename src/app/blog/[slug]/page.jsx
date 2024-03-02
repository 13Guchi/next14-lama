import Image from "next/image";
import styles from "./singlePost.module.css";

function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/noavatar.png"
          alt="single post image"
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>

        <div className={styles.detail}>
          <Image
            src="/noavatar.png"
            alt=""
            className={styles.avatar}
            width={50}
            height={50}
          />

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01-01.2024</span>
          </div>
        </div>

        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
          est velit cum eius exercitationem commodi earum fugit numquam ut
          quibusdam ad adipisci vero deleniti eaque error dolore repellat
          architecto explicabo!
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;
