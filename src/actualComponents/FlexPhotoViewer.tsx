// Libs
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import { useState } from "react";

// Local
import { VisuallyHidden } from "@/actualComponents/VisuallyHidden";
import { PrimaryButton } from "@/compositions/buttonModule3";

// Media
import nina1 from "../../public/nina/bean1.jpeg";
import nina2 from "../../public/nina/bean2.jpg";
import nina3 from "../../public/nina/bean3.jpg";
import nina4 from "../../public/nina/bean4.jpg";
import nina5 from "../../public/nina/bean5.jpg";
import nina6 from "../../public/nina/bean6.jpg";

// Component is actually reuseable if IMAGES is passed via props.
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

  function goBackward(): void {
    const currentIndex = IMAGES.findIndex(
      (image) => image.alt === currentImg.alt
    );

    if (currentIndex === -1) {
      setCurrentImg(IMAGES[0]);
    } else if (currentIndex === 0) {
      // Current image is the first in the list: display the last image
      setCurrentImg(IMAGES[IMAGES.length - 1]);
    } else {
      setCurrentImg(IMAGES[currentIndex - 1]);
    }
  }

  function goForward(): void {
    const currentIndex = IMAGES.findIndex(
      (image) => image.alt === currentImg.alt
    );

    if (currentIndex === -1 || currentIndex === IMAGES.length - 1) {
      // Current image is the last in the list, or is somehow not found.
      // Display the first image
      setCurrentImg(IMAGES[0]);
    } else {
      setCurrentImg(IMAGES[currentIndex + 1]);
    }
  }

  function goToImg(altTxt: string): void {
    const clickedImg = IMAGES.find((image) => image.alt === altTxt);
    if (!clickedImg) {
      setCurrentImg(IMAGES[0]);
      console.warn("clicked nonexistent image");
      return;
    }
    setCurrentImg(clickedImg);
  }

  return (
    <section>
      <h2>flex: photo viewer</h2>
      <PhotoViewer>
        <PhotoRoll>
          {IMAGES.map((obj) => (
            <ClickablePhoto
              key={obj.alt}
              onClick={() => goToImg(obj.alt)}
              isSelected={currentImg.alt === obj.alt}
            >
              <Image src={obj.img} alt={obj.alt} draggable={false} />
            </ClickablePhoto>
          ))}
          <Actions>
            <PrimaryButton size="small" onClick={goBackward}>
              {"<"}
              <VisuallyHidden screenReaderText="Previous image" />
            </PrimaryButton>
            <PrimaryButton size="small" onClick={goForward}>
              {">"}
              <VisuallyHidden screenReaderText="Next image" />
            </PrimaryButton>
          </Actions>
        </PhotoRoll>
        <MainPhoto>
          <Image src={currentImg.img} alt={currentImg.alt} draggable={false} />
        </MainPhoto>
      </PhotoViewer>
    </section>
  );
}

const PhotoViewer = styled.div`
  display: flex;
  gap: 16px;

  margin-left: 16px;
  margin-right: 16px;
`;

const PhotoRoll = styled.div`
  flex: 0 0 200px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 800px) {
    flex-basis: 100px;
  }

  @media screen and (max-width: 400px) {
    flex-basis: 70px;
  }
`;

interface ClickablePhotoProps {
  readonly isSelected: boolean;
}
const ClickablePhoto = styled.button<ClickablePhotoProps>`
  padding: 0;
  margin: 0;
  border: none;

  /* Get rid of "magic space" */
  line-height: 0;
  display: block;

  outline: ${(props) => props.isSelected && "#dcdcdc solid 2px"};

  outline-offset: 2px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    outline: #dcdcdc dotted 4px;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const MainPhoto = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;

  /* make arrows align with bottom of selected image if selected image height exceeds
  height of combined thumbnail images */
  margin-top: auto;
`;
