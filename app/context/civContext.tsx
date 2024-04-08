"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";
import civData from "../data/civils.json";

export interface Barrack {
  name: string;
  units: string[];
}

export interface Civ {
  title: string;
  thumbnail: string;
  slug: string;
  military: {
    barracks: Barrack | never[];
  };
}

export interface Counter {
  counterlevel: string;
  counters: string[];
}

export interface UnitDetails {
  image: string;
  level: string;
  civflags: string[];
  description: string;
  counterDescription: string;
  positive: string[];
  negative: string[];
  hardcounter: Counter;
  bettercounter: Counter;
  evencounter: Counter;
  weakcounter: Counter;
  nocounter: Counter;
}

export interface Unit {
  [key: string]: UnitDetails;
}

interface CivContextValue {
  civs: Civ[];
  units: Unit[];
}

const CivContext = createContext<CivContextValue>({
  civs: [],
  units: [],
});

export default function CivProvider(props: PropsWithChildren<{}>) {
  const [civs] = useState<Civ[]>(civData.civs);
  const [units] = useState<Unit[]>(civData.units);

  return (
    <CivContext.Provider value={{ civs, units }}>
      {props.children}
    </CivContext.Provider>
  );
}

export const useCivs = () => useContext(CivContext);
