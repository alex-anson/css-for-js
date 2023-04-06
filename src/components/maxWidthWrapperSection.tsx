import styles from "@/components/MaxWidthWrapperSection.module.css";
import mww from "@/css-utils/maxWidthWrapper.module.css";

export function MaxWidthWrapperSection() {
  return (
    <section>
      <h2>max width wrapper</h2>
      <div className={mww.maxWidthWrapper}>
        <div className={styles.maxWidthContent}>
          <h4>Fulfills these constraints:</h4>
          <ul>
            <li>It fills the available space on smaller viewports.</li>
            <li>
              It sets a maximum width, and will horizontally center itself
              within the parent if there is leftover space.
            </li>
            <li>
              It includes a bit of horizontal &quot;breathing room&quot;, so
              that its children aren&rsquo;t pressed right up against the edges
              of the viewport.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
