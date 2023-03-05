import styles from "@/components/TriangleBorder.module.css";
import mww from "@/css-utils/MaxWidthWrapper.module.css";

interface Props {
  children?: {
    content: string | React.ReactNode;
  };
}

export function TriangleBorder(props: Props): JSX.Element {
  return (
    <section>
      <h2 style={{ marginTop: "20px", marginBottom: "30px" }}>
        triangle border
      </h2>
      <div className={mww.maxWidthWrapper}>
        <div className={styles.box}>
          <div className={`${styles.triangle} ${styles.one}`}></div>
          <div className={`${styles.triangle} ${styles.two}`}></div>
          <div className={`${styles.triangle} ${styles.three}`}></div>
          <div className={`${styles.triangle} ${styles.four}`}></div>

          {props.children?.content &&
            typeof props.children.content === "string" && (
              <div className={styles.wrapContent}>
                <p>{props.children.content}</p>
              </div>
            )}
          {props.children?.content &&
            typeof props.children.content !== "string" &&
            props.children.content}
        </div>
      </div>
    </section>
  );
}

export function TriangleLoremJSX(): JSX.Element {
  const pStyle = { marginBottom: "0.7rem" };
  return (
    <div
      style={{
        backgroundColor: "var(--color-light)",
        padding: "1.2rem 1.5rem",
      }}
    >
      <p style={pStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam
        temporibus, quam maiores repellendus deleniti corporis odio perferendis
        quae voluptate mollitia rem unde fugiat iusto eveniet, voluptas
        possimus?
      </p>
      <p style={pStyle}>
        Minima corporis at quia. Illo natus facilis consequatur maxime eius.
      </p>
      <p>
        Iusto voluptatem itaque, quas rerum ullam libero aut sunt iure
        doloremque repudiandae, quaerat cupiditate consequuntur maxime, quia non
        suscipit?
      </p>
    </div>
  );
}
