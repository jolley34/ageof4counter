"use client";

// Footer.js
import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  padding: 4rem;
  background-color: var(--subcolor);
  display: flex;
  justify-content: center;
`;

const Paragrafy = styled.p`
  font-size: 0.75rem;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Paragrafy>Age of Empire IV Unit Counter - 2024</Paragrafy>
    </Wrapper>
  );
}
