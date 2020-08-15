import styled, { createGlobalStyle } from "styled-components";

export const Navbar = styled.nav`
  background-color: #404040;
  padding: 20px;
  padding-left: 5%;
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 100%;
  top: 0;
`;

export const NavItem = styled.span`
  font-family: Roboto;
  font-weight: 100;
  color: white;
  font-size: 20px;
  margin-right: 25px;
  cursor: pointer;
`;

export const Details = styled.div`
  color: black;
  margin-left: auto;
`;

export const PhoneNumber = styled(NavItem)`
  cursor: auto;
`;

export const NormalBody = styled.div`
  background-color: #2d2d2d;
`;

export const NavTracker = styled.div`
  height: 2px;
  width: 50px;
  background-color: #00dfc8;
  position: absolute;
  bottom: 0;
  left: 1px;
`;

export const NavWrapper = styled.div`
  position: relative;
`;

export const Slider = styled.div`
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  height: 100vh;
  background-color: #2d2d2d;
  ${({ containsSlider, headerHeight }) =>
    containsSlider &&
    headerHeight &&
    `
    height: calc(100vh - ${headerHeight}px);
    margin-top: ${headerHeight}px;
  `}
`;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    position: relative;
  }
`;
