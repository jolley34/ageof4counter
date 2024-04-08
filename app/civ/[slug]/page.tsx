"use client";

import { useParams } from "next/navigation";
import styled from "styled-components";
import { Civ, civs } from "../../data";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LeftSection = styled.section`
  padding: 4rem;
`;

const RightSection = styled.section`
  position: relative;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

const ImageCard = styled.div`
  cursor: pointer;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
  }

  :hover {
    filter: grayscale(60%);
    transition: filter 0.3s ease;
  }
`;

const FlagImage = styled(ImageCard)`
  img {
    width: 50px;
    height: 50px;
  }
`;

const BackgroundImage = styled.div`
  filter: grayscale(1);
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const GridItem = styled.div`
  border-radius: 10px;
`;

const GridTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const SubTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;

const Spacer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export default function CivPage() {
  const { slug } = useParams();

  const civ: Civ | undefined = civs.find((c) => c.slug === slug);

  if (!civ) {
    return <p>Civilisation not found</p>;
  }

  return (
    <Wrapper>
      <LeftSection>
        <Spacer>
          <GridTitle>{civ.title}</GridTitle>
          <FlagImage>
            <img src={civ.thumbnail} alt={civ.title} />
          </FlagImage>
        </Spacer>
        <SubTitle>{civ.military.barracks.name}</SubTitle>
        <GridContainer>
          {civ.military.barracks.unit.map((unitImage, index) => (
            <GridItem key={index}>
              <ImageCard>
                <img src={unitImage} alt={civ.military.barracks.name} />
              </ImageCard>
            </GridItem>
          ))}
        </GridContainer>
      </LeftSection>
      <RightSection>
        <BackgroundImage>
          <img src="https://www.ageofempires.com/wp-content/uploads/2021/06/bg-age4-civ-eng-splash-right-desk.png" />
        </BackgroundImage>
      </RightSection>
    </Wrapper>
  );
}
