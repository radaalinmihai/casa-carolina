import React, { PureComponent } from "react";
import {
  Navbar,
  Details,
  NavItem,
  PhoneNumber,
  MobileMenuIcon,
  DropdownMobileMenu,
  MobileNavFixer,
} from "../shared-components";
import MenuIcon from "../assets/icons/menu-white-18dp.svg";

export default class NavbarMobile extends PureComponent {
  state = {
    showDropdown: false,
  };
  toggleDropdown = () =>
    this.setState((prevState) => ({
      showDropdown: !prevState.showDropdown,
    }));
  navigateTo = (where) => {
    where.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    this.toggleDropdown();
  };
  componentDidMount = () => {
    window.removeEventListener("scroll", this.props.removeScrollTrack);
  };
  goHome = () => this.navigateTo(this.props.home);
  goAbout = () => this.navigateTo(this.props.about);
  goLocation = () => this.navigateTo(this.props.location);
  dropdownMobile = React.createRef();
  render() {
    const { showDropdown } = this.state,
      { headerHeight } = this.props;
    return (
      <Navbar noPadding ref={this.props.header}>
        <MobileNavFixer>
          <MobileMenuIcon src={MenuIcon} onClick={this.toggleDropdown} />
          <Details>
            <PhoneNumber>Pentru detalii: 0742284253</PhoneNumber>
          </Details>
        </MobileNavFixer>
        <DropdownMobileMenu
          headerHeight={headerHeight}
          ref={this.dropdownMobile}
          show={showDropdown}
        >
          <NavItem onClick={this.goHome}>Acasa</NavItem>
          <NavItem onClick={this.goAbout}>Despre</NavItem>
          <NavItem onClick={this.goLocation}>Locatie</NavItem>
        </DropdownMobileMenu>
      </Navbar>
    );
  }
}
