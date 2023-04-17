import FlexPhotoViewer from "@/actualComponents/FlexPhotoViewer";
import CombiningLayoutModes from "@/components/CombiningLayoutModes";
import FlexWrapLayout from "@/components/FlexWrapLayout";
import FlexboxFacebook from "@/components/FlexboxFacebook";
import TableOfContents from "@/components/TableOfContents";

export default function Page(): JSX.Element {
  return (
    <main>
      {/* TODO: add h1 and back button */}

      <FlexboxFacebook />
      <FlexWrapLayout />
      <FlexPhotoViewer />
      <TableOfContents />
      <CombiningLayoutModes />
    </main>
  );
}
