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
import Media from "react-media";
import NavbarWeb from "./components/NavbarWeb";
import NavbarMobile from "./components/NavbarMobile";

export default class App extends React.PureComponent {
  state = {
    headerHeight: 0,
    sliderImages: [
      require("./assets/media/image_1.jpeg"),
      require("./assets/media/image_2.jpeg"),
      require("./assets/media/image_3.jpeg"),
      require("./assets/media/image_4.jpeg"),
      require("./assets/media/image_5.jpeg"),
      require("./assets/media/image_6.jpeg"),
      require("./assets/media/image_7.jpeg"),
      require("./assets/media/image_8.jpeg"),
      require("./assets/media/image_9.jpeg"),
      require("./assets/media/image_10.jpeg"),
      require("./assets/media/image_11.jpeg"),
    ],
  };
  getHeaderHeight = () => this.header.current.clientHeight;
  changeImageInterval = null;
  componentDidMount = () => {
    this.setState({
      headerHeight: this.getHeaderHeight(),
    });
    this.changeImageInterval = setInterval(this.nextImage, 5000);
    if (this.navTracker.current !== null) window.onscroll = this.trackScroll;
  };
  trackScroll = () => {
    if (this.isInView(this.getScrollPositionElement(this.homeRef.current)))
      this.moveNavTracker(1);
    else if (
      this.isInView(this.getScrollPositionElement(this.locationRef.current))
    )
      this.moveNavTracker(170);
    else this.moveNavTracker(84);
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
  header = React.createRef();
  homeRef = React.createRef();
  aboutRef = React.createRef();
  locationRef = React.createRef();
  navTracker = React.createRef();
  render() {
    const { headerHeight, sliderImages } = this.state;
    return (
      <>
        <GlobalStyle />
        <Media
          queries={{
            mobile: {
              maxWidth: 600,
            },
            web: {
              minWidth: 600,
            },
          }}
        >
          {(matches) =>
            matches.web ? (
              <NavbarWeb
                home={this.homeRef.current}
                about={this.aboutRef.current}
                location={this.locationRef.current}
                header={this.header}
                navTracker={this.navTracker}
              />
            ) : (
              <NavbarMobile
                headerHeight={this.state.headerHeight}
                home={this.homeRef.current}
                about={this.aboutRef.current}
                location={this.locationRef.current}
                header={this.header}
                removeScrollTrack={this.trackScroll}
              />
            )
          }
        </Media>
        <Content
          ref={this.homeRef}
          containsSlider={headerHeight !== 0}
          headerHeight={headerHeight}
          noBorderBottom
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
                Casa Carolina este locul ideal pentru a-ti petrece vacanta sau
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
        <Content ref={this.locationRef} noBorderBottom>
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
