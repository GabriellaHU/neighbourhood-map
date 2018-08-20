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

    const { venues } = this.props;
    const { activeObj } = this.props;
    const { filteredObj } = this.props;
    const { handleMarker } = this.props;
    const { removePopup } = this.props;

    // conditional rendering of the markers
    // more than one marker gets only rendered when no filtering is applied

    let isActivated = false;
    if (activeObj.length > 0) {
      isActivated = true;
    }

    let activeVenue = isActivated ? venues.filter(venue => venue.venue.id === activeObj) : false

    return (
        <Map
          key="map"
          id="map"
          style="mapbox://styles/mapbox/streets-v10"
          containerStyle={{
            height: "100%",
            width: "100%"
          }}
          center={[19.029968, 47.511981]} /*starting position of the map*/
          zoom={[14]}
          fitBounds={
            [18.934, 47.513][(19.102, 47.469)]
          } /*the map will center on the given coordinates*/
          // onStyleLoad={map => {
          // }}
        >
        // conditional rendering of the markers
        // more than one marker gets only rendered when no filtering is applied
            {filteredObj
                ? activeVenue.map(venue => {
                  return (
                    <MBMarker
                      key={venue.venue.id}
                      venue={venue.venue}
                      handleMarker={handleMarker}
                      activeObj={activeObj}
                    />
                  )})  :
                    venues.map(venue => {
                        return (
                         <MBMarker
                           key={venue.venue.id}
                           venue={venue.venue}
                           handleMarker={handleMarker}
                           activeObj={activeObj}
                         />
                  )})
             }
            {activeVenue ?
              <MBPopup
                key={activeVenue[0].venue.id}
                venue={activeVenue[0].venue}
                removePopup={removePopup}
              />
             : ''
            }

        </Map>
    );
  }
}

export default MapBox;
