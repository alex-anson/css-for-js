import { Petals } from "@/atoms/Petals";
import { CardVersion1 } from "@/components/CardVersion1";
import { MaxWidthWrapperSection } from "@/components/MaxWidthWrapperSection";

export default function Page(): JSX.Element {
  return (
    <main>
      {/* TODO: add h1 and back button */}

      <MaxWidthWrapperSection />
      <Petals petalSize={80} />
      <CardVersion1 />
    </main>
  );
}
