import React from "react";
import {
  Navbar,
  NavItem,
  GlobalStyle,
  Details,
  PhoneNumber,
  NavTracker,
  NavWrapper,
  Content,
} from "./shared-components";

export default class App extends React.PureComponent {
  state = {
    headerHeight: 0,
  };
  header = React.createRef();
  getHeaderHeight = () => this.header.current.clientHeight;
  componentDidMount = () =>
    this.setState({
      headerHeight: this.getHeaderHeight(),
    });
  render() {
    const { headerHeight } = this.state;
    return (
      <>
        <GlobalStyle />
        <Navbar ref={this.header}>
          <NavWrapper>
            <NavItem>Acasa</NavItem>
            <NavItem>Despre</NavItem>
            <NavItem>Locatie</NavItem>
            <NavTracker />
          </NavWrapper>
          <Details>
            <PhoneNumber>Pentru detalii: 0742284253</PhoneNumber>
          </Details>
        </Navbar>
        <Content
          containsSlider={headerHeight !== 0}
          headerHeight={headerHeight}
        ></Content>
      </>
    );
  }
}
