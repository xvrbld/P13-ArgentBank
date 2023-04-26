import styles from "./Feature.module.scss";

interface FeatureProps {
  iconSrc: string;
  title: string;
  text: string;
}

function Feature(props: FeatureProps) {
  return (
    <div className={styles.features}>
      <h2 className={styles.sr_only}>Features</h2>
      <div className={styles.feature_item}>
        <img src={props.iconSrc} alt="Feature Icon" className={styles.feature_icon} />
        <h3 className={styles.feature_item_title}>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Feature;