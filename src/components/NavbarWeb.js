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
  render() {
    return (
      <Navbar ref={this.props.navTracker}>
        <NavWrapper>
          <NavItem onClick={() => console.log("navigate to home")}>
            Acasa
          </NavItem>
          <NavItem onClick={() => console.log("navigate to about")}>
            Despre
          </NavItem>
          <NavItem onClick={() => console.log("navigate to location")}>
            Locatie
          </NavItem>
          <NavTracker ref={this.navTracker} />
        </NavWrapper>
        <Details>
          <PhoneNumber>Pentru detalii: 0742284253</PhoneNumber>
        </Details>
      </Navbar>
    );
  }
}
