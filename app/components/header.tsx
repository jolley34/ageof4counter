"use client";
import Link from "next/link";
import styled from "styled-components";

const Logo = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;
  color: var(--subcolor);
`;

const LogoSub = styled(Logo)`
  color: var(--secondarycolor);
  font-weight: 700;
`;

const HeaderWrapper = styled.div`
  padding: 1rem 4rem 1rem 4rem;
  width: 100%;
  top: 0;
  position: sticky;
  background-color: white;
`;

const NavbarWrapper = styled.ul`
  display: flex;
  gap: 2rem;
`;

const NavbarItem = styled.li`
  font-weight: 400;
  font-size: 0.8rem;
  cursor: pointer;
`;

const Flex = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Spacer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <SpaceBetween>
          <Spacer>
            <Flex>
              <Logo>Age Of Empire IV</Logo>
              <LogoSub>UNIT COUNTER</LogoSub>
            </Flex>
            <NavbarWrapper>
              <Link href="/">
                <NavbarItem>Home</NavbarItem>
              </Link>
              <NavbarItem>All Units</NavbarItem>
            </NavbarWrapper>
          </Spacer>
          <NavbarWrapper>
            <NavbarItem>Search Unit</NavbarItem>
            <NavbarItem>Settings</NavbarItem>
          </NavbarWrapper>
        </SpaceBetween>
      </HeaderWrapper>
    </>
  );
}
