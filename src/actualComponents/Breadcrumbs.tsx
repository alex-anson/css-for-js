import styles from "@/actualComponents/Breadcrumbs.module.css";

export type BreadcrumbType = {
  /** `crumbs: Map<displayText: _, href: _>` */
  crumbs: Map<string, string>;
  /** displayText */
  lastBreadcrumb: string;
  handleClick: (text: string) => void;
};

export function Breadcrumbs(props: BreadcrumbType): JSX.Element {
  return (
    // For this to actually be reusable, remove the <section>, <h2>, and <div>
    <section>
      <h2>breadcrumbs component</h2>
      <div className={styles.widthWrap}>
        <nav aria-label="Breadcrumb">
          <ul className={styles.list}>
            {[...props.crumbs].map(([text, href]) => (
              <li key={text} className={styles.item}>
                <a href={href} onClick={() => props.handleClick(text)}>
                  {text}
                </a>
              </li>
            ))}
            <li className={styles.lastItem}>{props.lastBreadcrumb}</li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
