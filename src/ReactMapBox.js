import React, { Component } from "react";

// React wrapper for mapbox-gl-js
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

import MBPopup from "./Popup";
import MBMarker from "./Marker";

import "./App.css";


const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZ2FicmllbGxhaHUiLCJhIjoiY2praXNlaWkwMDRtazNsa2ZzdmRyZTViayJ9.vk8q9Nba8t3wx0xP1rml0g"
});

class MapBox extends Component {


  render() {

    const { locations } = this.props;
    const { activeObj } = this.props;
    const { filteredObj } = this.props;

    // conditional rendering of the markers
    // more than one marker gets only rendered when no filtering is applied

    let isFiltered = false;
    if (filteredObj.length > 0) {
      isFiltered = true;
    }

    const active = locations.filter(obj => obj.id === activeObj);

    return (
        <Map
          key="map"
          id="map"
          style="mapbox://styles/mapbox/streets-v10"
          containerStyle={{
            height: "100%",
            width: "100%"
          }}
          center={[19.042, 47.496]} /*starting position of the map*/
          fitBounds={
            [18.934, 47.513][(19.102, 47.469)]
          } /*the map will center on the given coordinates*/
        >
        // conditional rendering of the markers
        // more than one marker gets only rendered when no filtering is applied
          {isFiltered
            ? filteredObj.map(location => (
                <MBMarker
                  key={location.id}
                  handleMarker={this.props.handleMarker}
                  location={location}
                  activeObj={this.props.activeObj}
                />
              ))
            : locations.map(location => (
                <MBMarker
                  key={location.id}
                  handleMarker={this.props.handleMarker}
                  location={location}
                  activeObj={this.props.activeObj}
                />
              ))}
          {active.map(location => (
            <MBPopup
              key={location.id}
              removePopup={this.props.removePopup}
              locations={location}
            />
          ))}
        </Map>
    );
  }
}

export default MapBox;
