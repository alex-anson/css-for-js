import styles from "@/components/RectangleBorder.module.css";
import mww from "@/css-utils/maxWidthWrapper.module.css";

export function RectangleBorder(): JSX.Element {
  return (
    <section>
      <h2 className={styles.h2}>rectangle border</h2>
      <div className={mww.maxWidthWrapper}>
        <div className={styles.box}>
          <div className={`${styles.rectangle} ${styles.one}`}></div>
          <div className={`${styles.rectangle} ${styles.two}`}></div>
          <div className={`${styles.rectangle} ${styles.three}`}></div>
          <div className={`${styles.rectangle} ${styles.four}`}></div>

          <Content />
        </div>
      </div>
    </section>
  );
}

export function Content(): JSX.Element {
  return (
    <div className={styles.contentDiv}>
      <p>
        Nobis, voluptates deserunt? Animi nulla tempore reiciendis delectus eos
        necessitatibus, quod ratione facilis veniam aliquam ipsam tempora ipsa
        harum. Assumenda voluptatum placeat labore fugit quidem hic sapiente
        recusandae repellendus, soluta, repudiandae iusto ad harum odit qui
        dolor?
      </p>
    </div>
  );
}
