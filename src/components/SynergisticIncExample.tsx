import styles from "@/components/SynergisticIncExample.module.css";

const starterFeatures = [
  "3 projects",
  "100gb monthly transfer",
  "20gb storage",
  "No support",
];
const proFeatures = [
  "10 projects",
  "500gb monthly transfer",
  "1tb storage",
  "Email customer support",
];
const enterpriseFeatures = [
  "Unlimited projects, transfers, storage.",
  "Dedicated phone & email support",
];

export function SynergisticIncExample(): JSX.Element {
  return (
    <section style={{ marginTop: "30px" }}>
      <h2>price cards, center card emphasized</h2>
      <div className={styles.pricing}>
        <PriceCard
          heading="Starter"
          price="$29"
          description="For personal projects."
          features={starterFeatures}
        />
        <PriceCard
          heading="Pro"
          price="$99"
          description="For small businesses looking to grow. Our most popular plan for
          ambitious organizations."
          features={proFeatures}
          isPrimaryCard
        />
        <PriceCard
          heading="Enterprise"
          price="Contact Us"
          description="For large organizations."
          features={enterpriseFeatures}
        />
      </div>
    </section>
  );
}

interface PropsPriceCard {
  heading: string;
  price: string;
  description: string;
  features: string[];
  isPrimaryCard?: true;
}
function PriceCard(props: PropsPriceCard): JSX.Element {
  return (
    <article
      className={`${styles.card} ${props.isPrimaryCard ? styles.primary : ""}`}
    >
      <h3>{props.heading}</h3>
      <div className={styles.price}>{props.price}</div>
      <p>{props.description}</p>
      <ul>
        {props.features.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button>Buy Now</button>
    </article>
  );
}
