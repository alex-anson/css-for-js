// Local
import FlexPhotoViewer from "@/actualComponents/FlexPhotoViewer";
import ModuleHeading from "@/actualComponents/ModuleHeading";
import CombiningLayoutModes from "@/components/CombiningLayoutModes";
import FlexWrapLayout from "@/components/FlexWrapLayout";
import FlexboxFacebook from "@/components/FlexboxFacebook";
import TableOfContents from "@/components/TableOfContents";

export default function Page(): JSX.Element {
  return (
    <main>
      <ModuleHeading heading="flexbox" />

      <FlexboxFacebook />
      <FlexWrapLayout />
      <FlexPhotoViewer />
      <TableOfContents />
      <CombiningLayoutModes />
    </main>
  );
}
