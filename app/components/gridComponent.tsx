"use client";
import styled from "styled-components";
import { device } from "../breakpoints";
import data from "../data/civils.json";

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

  :hover {
    filter: grayscale(60%);
    transition: filter 0.3s ease;
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
        {data.map((item, index) => (
          <GridItem key={index}>
            <GridTitle>{item.title}</GridTitle>
            <ImageCard>
              <img src={item.thumbnail} alt={item.title} />
            </ImageCard>
          </GridItem>
        ))}
      </GridContainer>
    </Wrapper>
  );
}