// Libs
import Link from "next/link";
import styled from "styled-components";

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

      <HolyGrailLink href="/holy-grail-layout" id="hgl">
        <HGDiv>
          <HGP>holy grail layout</HGP>
        </HGDiv>
      </HolyGrailLink>
    </main>
  );
}

const HolyGrailLink = styled(Link)`
  display: block;
  max-width: fit-content;
  text-decoration: none;
  margin: 10rem auto 12rem;
`;

const HGDiv = styled.div`
  border: 1px solid hsl(0, 0%, 25%);
  padding: 12px 16px;
  border-radius: ${12 / 16}rem;
  color: var(--color-primaryLight);
  background-color: rgba(34, 34, 34, 0.96);
  transition: all 0.2s;
  font-weight: 500;

  &:hover {
    border-color: hsl(0, 0%, 40%);
    background-color: rgba(25, 25, 25, 0.96);
  }
`;

const HGP = styled.p`
  font-size: ${20 / 16}rem;
  letter-spacing: 0.8px;
`;
