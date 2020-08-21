import React from "react";
import {
  GlobalStyle,
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
import Media from 'react-media';
import NavbarWeb from "./components/NavbarWeb";

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
      if (this.isInView(this.getScrollPositionElement(this.homeRef.current)))
        this.moveNavTracker(1);
      else if (
        this.isInView(this.getScrollPositionElement(this.locationRef.current))
      )
        this.moveNavTracker(170);
      else this.moveNavTracker(84);
    };
  };
  getScrollPositionElement = (element) => ({
    top: element.getBoundingClientRect().top,
    bottom: element.getBoundingClientRect().bottom,
  });
  moveNavTracker = (howMuch) =>
    (this.navTracker.current.style.left = howMuch + "px");
  isInView = (element) =>
    element.top >= 0 &&
    element.bottom <=
      (window.innerHeight || document.documentElement.clientHeight);
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
  navTracker = React.createRef();
  render() {
    const { headerHeight, sliderImages } = this.state;
    return (
      <>
        <GlobalStyle />
        <NavbarWeb navTracker={this.navTracker} />
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
