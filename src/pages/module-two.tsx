// Local
import ModuleHeading from "@/actualComponents/ModuleHeading";
import { BubbleBorder } from "@/components/BubbleBorder";
import { CardVersion2 } from "@/components/CardVersion2";
import { CardVersion3 } from "@/components/CardVersion3";
import { CenterAbsolutePositioning } from "@/components/CenterAbsolutePositioning";
import { DecorativeBlobs } from "@/components/DecorativeBlobs";
import { HorizontalOverflow } from "@/components/HorizontalOverflow";
import { RectangleBorder } from "@/components/RectangleBorder";
import { SemanticHTML } from "@/components/SemanicHTML";
import { StickyNav } from "@/components/StickyNav";
import { SynergisticIncExample } from "@/components/SynergisticIncExample";
import { TriangleBorder, TriangleLoremJSX } from "@/components/TriangleBorder";
import { VisuallyHiddenExample } from "@/components/VisuallyHiddenExample";
import { WatchEcommerce } from "@/components/WatchEcommerce";
import { blockOne } from "@/utils/lorem";

export default function Page(): JSX.Element {
  return (
    <main>
      <ModuleHeading
        heading="rendering logic ii"
        description="positioned layout, managing overflow"
      />

      <CenterAbsolutePositioning />
      <BubbleBorder>{{ content: blockOne }}</BubbleBorder>
      <TriangleBorder>{{ content: <TriangleLoremJSX /> }}</TriangleBorder>
      <RectangleBorder />
      <WatchEcommerce />
      <DecorativeBlobs />
      <SynergisticIncExample />
      <CardVersion2 />
      <CardVersion3 />
      <HorizontalOverflow />
      <StickyNav />
      <VisuallyHiddenExample />
      <SemanticHTML />
    </main>
  );
}
