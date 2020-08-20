import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class GoogleMap extends Component {
  render() {
    return (
      <Map
        initialCenter={{
          lat: 43.946671,
          lng: 28.627734,
        }}
        style={{ width: "100%", height: "60vh" }}
        containerStyle={{ width: "80%" }}
        google={this.props.google}
        zoom={19}
      >
        <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(GoogleMap);
