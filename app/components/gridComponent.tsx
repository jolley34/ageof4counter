"use client";
import Link from "next/link";
import styled from "styled-components";
import { device } from "../breakpoints";
import { civs } from "../data";

const Wrapper = styled.section`
  margin: 2rem 4rem 2rem 4rem;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 1rem;

  @media ${device.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.xl} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.xxl} {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const ImageCard = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }
  overflow: hidden;
  border-radius: 10px;

  :hover {
    scale: 1.1;
    transition: scale 0.3s ease;
  }
`;

const GridItem = styled.div`
  border-radius: 10px;
`;

const GridTitle = styled.h1`
  font-size: 1rem;
  font-weight: 700;
`;

export default function GridComponent() {
  return (
    <Wrapper>
      <GridContainer>
        {civs.map((civ, index) => (
          <GridItem key={index}>
            <GridTitle>{civ.title}</GridTitle>
            <Link href={`/civ/${civ.slug}`}>
              <ImageCard>
                <img src={civ.thumbnail} alt={civ.title} />
              </ImageCard>
            </Link>
          </GridItem>
        ))}
      </GridContainer>
    </Wrapper>
  );
}
