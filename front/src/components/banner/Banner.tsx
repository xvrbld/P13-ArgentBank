import styles from "./Banner.module.scss";

interface BannerProps {
  img: string;
}

function Banner(props: BannerProps) {
  return (
    <div className={styles.hero}>
      <img
        src={props.img}
        alt="banner"
      />
      <section className={styles.hero_content}>
        <h2 className={styles.sr_only}>Promoted Content</h2>
        <p className={styles.subtitle}>No fees.</p>
        <p className={styles.subtitle}>No minimum deposit.</p>
        <p className={styles.subtitle}>High interest rates.</p>
        <p className={styles.text}>Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}

export default Banner;