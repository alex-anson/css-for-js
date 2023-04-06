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
          <ol className={styles.list}>
            {[...props.crumbs].map(([text, href]) => (
              <li key={text} className={styles.item}>
                <a href={href} onClick={() => props.handleClick(text)}>
                  {text}
                </a>
              </li>
            ))}
            <li className={styles.lastItem}>{props.lastBreadcrumb}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}

/*
his styled-components version

const Breadcrumbs = ({ children }) => {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
};

const Crumb = ({ href, isCurrentPage, children }) => {
  return (
    <CrumbWrapper>
      <CrumbLink
        href={href}
        aria-current={isCurrentPage ? 'page' : undefined}
      >
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
};

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 12px;

  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &::before {
      content: '/';
      opacity: 0.25;
      margin-right: var(--spacing);

      /* Note: The ideal version of this solution
       * would instead use a transformed border,
       * to avoid using a real character.
       *
       * For example, something like this:
       *
       *    content: '';
       *    display: inline-block;
       *    transform: rotate(15deg);
       *    border-right: 1px solid;
       *    margin-right: var(--spacing);
       *    height: 0.8em;
       *\/ mwahahaha
    }
  }
`;

const CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }
`;

render(
  <Breadcrumbs>
    <Crumb href="/">Home</Crumb>
    <Crumb href="/living">Living Room</Crumb>
    <Crumb href="/living/couch">Couches</Crumb>
    <Crumb
      href="/living/couch/sectional"
      isCurrentPage={true}
    >
      Sectionals
    </Crumb>
  </Breadcrumbs>
);
*/
