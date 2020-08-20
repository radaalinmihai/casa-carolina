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
  Slider,
  SliderWrapper,
  SliderImage,
  ArrowRight,
  ArrowLeft,
  Title,
  ContentWrapper,
  Body,
  List,
  ListItem,
} from "./shared-components";
import ArrowRightIcon from "./assets/icons/mdi_chevron_right.svg";
import ArrowLeftIcon from "./assets/icons/mdi_chevron_left.svg";
import GoogleMap from "./components/GoogleMap";

export default class App extends React.PureComponent {
  state = {
    headerHeight: 0,
    sliderImages: [
      require("./assets/media/image_1.jpg"),
      require("./assets/media/image_2.jpg"),
      require("./assets/media/image_3.jpg"),
      require("./assets/media/image_4.jpeg"),
    ],
  };
  header = React.createRef();
  getHeaderHeight = () => this.header.current.clientHeight;
  changeImageInterval = null;
  componentDidMount = () => {
    this.setState({
      headerHeight: this.getHeaderHeight(),
    });
    this.changeImageInterval = setInterval(this.nextImage, 5000);
    window.onscroll = (e) => {
      console.log(
        window.scrollY,
        this.getScrollPositionElement(this.homeRef.current),
        this.getScrollPositionElement(this.aboutRef.current),
        this.getScrollPositionElement(this.locationRef.current)
      );
    };
  };
  getScrollPositionElement = (element) => element.getBoundingClientRect().y || element.getBoundingClientRect().top;
  whoIsInView = (windowY, elementY) => {};
  componentWillUnmount = () => clearInterval(this.changeImageInterval);
  nextImage = () => {
    let sliderImages = [...this.state.sliderImages];
    let currentImage = sliderImages[0];
    sliderImages.shift();
    sliderImages[sliderImages.length] = currentImage;
    this.setState({
      sliderImages: sliderImages,
    });
  };
  previousImage = () => {
    let sliderImages = [...this.state.sliderImages];
    sliderImages.unshift(sliderImages.pop());
    this.setState({
      sliderImages,
    });
  };
  homeRef = React.createRef();
  aboutRef = React.createRef();
  locationRef = React.createRef();
  render() {
    const { headerHeight, sliderImages } = this.state;
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
          ref={this.homeRef}
          containsSlider={headerHeight !== 0}
          headerHeight={headerHeight}
          last
        >
          <Slider>
            <SliderWrapper>
              {sliderImages.map((sliderImage, index) => (
                <SliderImage key={index} index={index} src={sliderImage} />
              ))}
            </SliderWrapper>
            <ArrowRight src={ArrowRightIcon} onClick={this.nextImage} />
            <ArrowLeft src={ArrowLeftIcon} onClick={this.previousImage} />
          </Slider>
        </Content>
        <Content ref={this.aboutRef}>
          <ContentWrapper>
            <Title>Despre</Title>
            <Body>
              <p>
                Vila Carolina este locul ideal pentru a-ti petrece vacanta sau
                sejurul la mare, aceasta fiind dotata cu:
              </p>
              <List>
                <ListItem>foisor deschis</ListItem>
                <ListItem>parcare privata</ListItem>
                <ListItem>gratar</ListItem>
                <ListItem>
                  patru camere, toate echipate cu baie proprie
                </ListItem>
                <ListItem>bucatarie la comun</ListItem>
                <ListItem>televizor, wifi, frigider in camera</ListItem>
              </List>
            </Body>
          </ContentWrapper>
        </Content>
        <Content ref={this.locationRef} last>
          <ContentWrapper>
            <Title>Locatie</Title>
            <Body>
              <p>Pentru rezervari, va rugam sa sunati la 0742284253</p>
              <GoogleMap />
            </Body>
          </ContentWrapper>
        </Content>
      </>
    );
  }
}
