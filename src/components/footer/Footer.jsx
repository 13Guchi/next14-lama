import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Guchi</div>
      <div className={styles.text}>
        Guchi creative thoughts agency &#169; All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
