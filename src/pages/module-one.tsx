// Local
import ModuleHeading from "@/actualComponents/ModuleHeading";
import { Petals } from "@/atoms/Petals";
import { CardVersion1 } from "@/components/CardVersion1";
import { MaxWidthWrapperSection } from "@/components/MaxWidthWrapperSection";

export default function Page(): JSX.Element {
  return (
    <main>
      <ModuleHeading heading="rendering logic i" description="flow layout" />

      <MaxWidthWrapperSection />
      <Petals petalSize={80} />
      <CardVersion1 />
    </main>
  );
}
