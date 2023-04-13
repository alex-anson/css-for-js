// Libs
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import { useState } from "react";

// Local
import { VisuallyHidden } from "@/actualComponents/VisuallyHidden";
import { PrimaryButton } from "@/compositions/buttonModule3/Button";

// Media
import nina1 from "../../public/nina/bean1.jpeg";
import nina2 from "../../public/nina/bean2.jpg";
import nina3 from "../../public/nina/bean3.jpg";
import nina4 from "../../public/nina/bean4.jpg";
import nina5 from "../../public/nina/bean5.jpg";
import nina6 from "../../public/nina/bean6.jpg";

type ImagesType = { img: StaticImageData; alt: string }[];
const IMAGES: ImagesType = [
  { img: nina1, alt: "rottweiler sitting outside" },
  { img: nina2, alt: "baby rott with curious eyes" },
  { img: nina3, alt: "baby rott with happy eyes" },
  { img: nina4, alt: "rottweiler enjoying the snow and woods" },
  { img: nina5, alt: "rottweiler rolling around on her back outside" },
  { img: nina6, alt: "rottweiler waiting patiently for a birthday treat" },
];

export default function FlexPhotoViewer(): JSX.Element {
  const [currentImg, setCurrentImg] = useState<ImagesType[0]>(IMAGES[0]);
  return (
    <section>
      <h2>flex: photo viewer</h2>
      <PhotoViewer>
        <PhotoRoll>
          {IMAGES.map((obj) => (
            <ClickablePhoto key={obj.alt}>
              <Image src={obj.img} alt={obj.alt} />
            </ClickablePhoto>
          ))}
          <Actions>
            <PrimaryButton size="small">
              {"<"}
              <VisuallyHidden screenReaderText="Previous image" />
            </PrimaryButton>
            <PrimaryButton size="small">
              {">"}
              <VisuallyHidden screenReaderText="Next image" />
            </PrimaryButton>
          </Actions>
        </PhotoRoll>
        <MainPhoto>
          <Image src={currentImg.img} alt={currentImg.alt} />
        </MainPhoto>
      </PhotoViewer>
    </section>
  );
}

const PhotoViewer = styled.div`
  display: flex;
  gap: ${16 / 16}rem;

  margin-left: 16px;
  margin-right: 16px;
`;

const PhotoRoll = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${16 / 16}rem;
`;

const ClickablePhoto = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  /* Get rid of "magic space" */
  line-height: 0;

  width: 200px;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 800px) {
    width: 100px;
  }

  @media screen and (max-width: 400px) {
    width: 70px;
  }
`;

const MainPhoto = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
  }
`;

const Actions = styled.div``;
