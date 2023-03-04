import styles from "@/atoms/Petals.module.css";

interface Props {
  /** unit = pixels */
  petalSize: number;
}

export function Petals(props: Props): JSX.Element {
  const size = {
    width: props.petalSize + "px",
    height: props.petalSize + "px",
  };
  return (
    <section>
      <h2>petals</h2>
      <div className={styles.container}>
        <div className={`${styles.petal} ${styles.one}`} style={size}></div>
        <div className={`${styles.petal} ${styles.two}`} style={size}></div>
        <div className={`${styles.petal} ${styles.three}`} style={size}></div>
        <div className={`${styles.petal} ${styles.four}`} style={size}></div>
      </div>
    </section>
  );
}
