// Libs
import styled from "styled-components";
import Image from "next/image";

// Local
import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";
import { Shoe } from "@/soleAndAnkle/types";

export default function ShoeCard(props: Shoe): JSX.Element {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof props.salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(props.releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${props.slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={props.imageSrc} height={100} width={100} />
        </ImageWrapper>
        <Spacer size={12} axis="vertical" />
        <Row>
          <Name>{props.name}</Name>
          <Price>{formatPrice(props.price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", props.numOfColors)}</ColorInfo>
        </Row>
      </Wrapper>
    </Link>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
`;

const Row = styled.div`
  font-size: 1rem;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span``;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;
