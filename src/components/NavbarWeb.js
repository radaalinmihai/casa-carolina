import React, { PureComponent } from "react";
import {
  Navbar,
  NavItem,
  Details,
  PhoneNumber,
  NavTracker,
  NavWrapper,
} from "../shared-components";

export default class NavbarWeb extends PureComponent {
  navigateTo = (where) => {
    where.scrollIntoView({
      behavior: "smooth",
    });
  };
  goHome = () => this.navigateTo(this.props.home);
  goAbout = () => this.navigateTo(this.props.about);
  goLocation = () => this.navigateTo(this.props.location);
  render() {
    return (
      <Navbar ref={this.props.header}>
        <NavWrapper>
          <NavItem onClick={this.goHome}>Acasa</NavItem>
          <NavItem onClick={this.goAbout}>Despre</NavItem>
          <NavItem onClick={this.goLocation}>Locatie</NavItem>
          <NavTracker ref={this.props.navTracker} />
        </NavWrapper>
        <Details>
          <PhoneNumber>Pentru detalii: 0742284253</PhoneNumber>
        </Details>
      </Navbar>
    );
  }
}
