"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import {
  Civ,
  Counter,
  CounterTypes,
  CounterUnits,
  Unit,
  civs,
  units,
} from "../../data";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  gap: 2rem;
`;

const RightSection = styled.section`
  padding: 4rem;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  z-index: 50;
`;

const ImageCard = styled.div`
  cursor: pointer;
  position: relative;
  z-index: 10;
  background-color: #64646453;
  border-radius: 10px;
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

const CounterName = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 0.8rem;
`;

const FlagImage = styled.div`
  position: absolute;
  width: 50%;
  height: 100vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    opacity: 0.1;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  filter: grayscale(1);
  opacity: 0.1;
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

const CounterTitle = styled(SubTitle)`
  font-size: 1.5rem;
  font-weight: 700;
`;

const Spacer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function CivPage() {
  const { slug } = useParams();

  const civ: Civ | undefined = civs.find((c) => c.slug === slug);

  if (!civ) {
    return <p>Civilisation not found</p>;
  }

  const unitNames = Object.keys(units[0]);

  const [selectedUnit, setSelectedUnit] = useState<keyof Unit | null>(null);
  const [hoveredCounter, setHoveredCounter] = useState<string | null>(null);

  const renderCounters = (unitName: keyof Unit) => {
    if (typeof unitName !== "string") {
      throw new Error("unitName must be a string");
    }

    const unit = units.find((unit) => unit[unitName]);
    if (unit) {
      const {
        hardcounter,
        bettercounter,
        evencounter,
        weakcounter,
        nocounter,
      } = unit[unitName];

      return (
        <>
          <GridWrapper>
            {hardcounter && hardcounter.counters.length > 0 && (
              <>
                <CounterTitle>Hard Counter:</CounterTitle>
                {renderCounterList(hardcounter)}
              </>
            )}
            {bettercounter && bettercounter.counters.length > 0 && (
              <>
                <CounterTitle>Better Trade:</CounterTitle>
                {renderCounterList(bettercounter)}
              </>
            )}
            {evencounter && evencounter.counters.length > 0 && (
              <>
                <CounterTitle>Even Counter:</CounterTitle>
                {renderCounterList(evencounter)}
              </>
            )}
            {weakcounter && weakcounter.counters.length > 0 && (
              <>
                <>
                  <CounterTitle>Weak Against:</CounterTitle>
                  {renderCounterList(weakcounter)}
                </>
              </>
            )}
            {nocounter && nocounter.counters.length > 0 && (
              <>
                <>
                  <CounterTitle>Countered By:</CounterTitle>
                  {renderCounterList(nocounter)}
                </>
              </>
            )}
          </GridWrapper>
        </>
      );
    }
    return null;
  };

  const renderCounterList = (counter: Counter) => {
    return (
      <GridContainer>
        {counter.counters.map((unitName, index) => {
          const counterUnit = CounterUnits[0][unitName as keyof CounterTypes];
          const color = counter.counterlevel || "yellow"; // Standardvärde "yellow" om ingen färg hittades
          return (
            <GridItem key={index}>
              {counterUnit && (
                <ImageCard
                  onMouseEnter={() => setHoveredCounter(counterUnit.name)}
                  onMouseLeave={() => setHoveredCounter(null)}
                  style={{
                    background: color,
                    borderRadius: "10px",
                  }}
                >
                  <img src={counterUnit.image} alt={counterUnit.name} />
                  {hoveredCounter === counterUnit.name && (
                    <CounterName>{counterUnit.name}</CounterName>
                  )}
                </ImageCard>
              )}
            </GridItem>
          );
        })}
      </GridContainer>
    );
  };

  return (
    <Wrapper>
      <FlagImage>
        <img src={civ.thumbnail} alt={civ.title} />
      </FlagImage>
      <LeftSection>
        <Spacer>
          <GridTitle>{civ.title}</GridTitle>
        </Spacer>
        <GridWrapper>
          <SubTitle>{civ.military.barracks.name}</SubTitle>
          <GridContainer>
            {civ.military.barracks.unit.map((unitImage, index) => (
              <GridItem key={index}>
                <ImageCard
                  onClick={() =>
                    setSelectedUnit(unitNames[index] as keyof Unit)
                  }
                >
                  <img src={unitImage} alt={civ.military.barracks.name} />
                </ImageCard>
              </GridItem>
            ))}
          </GridContainer>
        </GridWrapper>
      </LeftSection>
      <RightSection>
        {selectedUnit && renderCounters(selectedUnit)}
      </RightSection>
      <BackgroundImage>
        <img src="https://www.ageofempires.com/wp-content/uploads/2021/06/bg-age4-civ-eng-splash-right-desk.png" />
      </BackgroundImage>
    </Wrapper>
  );
}
