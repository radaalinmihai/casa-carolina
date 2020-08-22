import styled, { createGlobalStyle } from "styled-components";

export const Navbar = styled.div`
  background-color: #404040;
  padding: 20px;
  padding-left: 10%;
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  align-items: center;
  ${({ noPadding }) => noPadding && `padding: 0;`}
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
  @media (max-width: 600px) {
    margin-right: 0;
    font-size: 17px;
  }
`;

export const NavTracker = styled.div`
  height: 2px;
  width: 50px;
  background-color: #00dfc8;
  position: absolute;
  bottom: -2px;
  left: 1px;
  transition: all 250ms;
`;

export const NavWrapper = styled.div`
  position: relative;
`;

export const MobileNavFixer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #404040;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
  padding-left: 10%;
  font-size: 15px;
  align-items: center;
`;

export const Slider = styled.div`
  height: 100%;
  position: relative;
`;

export const SliderWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const SliderImage = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  ${({ src }) =>
    src &&
    `
    background: url(${src}) center no-repeat;
    background-size: cover;
  `}
  transition: all 250ms;
  ${({ index }) =>
    index &&
    `
    left: calc(100vw * ${index});
  `}
`;

export const Arrow = styled.img`
  position: absolute;
  cursor: pointer;
  top: 50%;
  transform: translate(0, -50%);
  @media (max-width: 600px) {
   width: 70px;
   height: 70px; 
  }
`;

export const ArrowRight = styled(Arrow)`
  right: 0;
`;

export const ArrowLeft = styled(Arrow)`
  left: 0;
`;

export const MobileMenuIcon = styled.img`
  width: 27px;
  height: 27px;
`;

export const DropdownMobileMenu = styled.div`
  position: absolute;
  ${({ headerHeight, show }) =>
    headerHeight &&
    (show
      ? `bottom: calc(-100% - ${headerHeight}px + 21px);`
      : `bottom: ${headerHeight}px;`)}
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #414042;
  width: 100%;
  border-top: 1px solid #58595b;
  padding: 20px;
  padding-left: 10%;
  transition: all 500ms;
  z-index: -20;
`;

export const Content = styled.div`
  height: 100vh;
  background-color: #2d2d2d;
  overflow: auto;
  ${({ containsSlider, headerHeight }) =>
    containsSlider &&
    headerHeight &&
    `
    height: calc(100vh - ${headerHeight}px);
    margin-top: ${headerHeight}px;
  `}
  border-bottom: 1px solid #58595B;
  ${({ noBorderBottom }) => noBorderBottom && `border-bottom: 0px`}
`;

export const ContentWrapper = styled.div`
  padding: 100px 10%;
  position: relative;
  @media (max-width: 600px) {
    padding: 50px 10%;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 48px;
  font-family: Roboto, sans-serif;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const Body = styled.section`
  font-family: Roboto, sans-serif;
  color: white;
  font-size: 18px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li`
  position: relative;
  margin-bottom: 30px;
  &::before {
    content: "";
    position: absolute;
    width: 44px;
    height: 44px;
    left: -44px;
    bottom: -5px;
    background-image: url(${require("./assets/icons/mdi_check.svg")});
  }
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
