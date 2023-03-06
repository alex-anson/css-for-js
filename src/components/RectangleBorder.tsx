import styles from "@/components/RectangleBorder.module.css";
import mww from "@/css-utils/MaxWidthWrapper.module.css";

export function RectangleBorder(): JSX.Element {
  return (
    <section>
      <h2 style={{ marginTop: "20px", marginBottom: "30px" }}>
        rectangle border
      </h2>
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
    <div
      style={{
        backgroundColor: "var(--color-light)",
        padding: "1.2rem 1.5rem",
      }}
    >
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
