import styles from "@/components/CardVersion2.module.css";
import mww from "@/css-utils/maxWidthWrapper.module.css";

export function CardVersion2(): JSX.Element {
  return (
    <section>
      <h2>overflow hidden</h2>
      <div className={mww.maxWidthWrapper}>
        <div className={styles.card}>
          <h4>Yet another card</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            reiciendis maiores repudiandae assumenda molestias nihil accusamus
            cum delectus, magni libero nam corrupti rem omnis ad id? Quasi nam
            voluptates consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            ipsa qui quia aperiam incidunt.
          </p>
          <div className={`${styles.flourish} ${styles.one}`}></div>
          <div className={`${styles.flourish} ${styles.two}`}></div>
        </div>
      </div>
    </section>
  );
}
