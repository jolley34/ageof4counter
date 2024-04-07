"use client";

import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  padding: 4rem 4rem 4rem 4rem;
  bottom: 0;
  background-color: var(--subcolor);
  display: flex;
  justify-content: center;
`;

const Paragrafy = styled.p`
  font-size: 0.75rem;
`;

export default function Footer() {
  return (
    <>
      <Wrapper>
        <Paragrafy>Age of Empire IV Unit Counter - 2024</Paragrafy>
      </Wrapper>
    </>
  );
}
