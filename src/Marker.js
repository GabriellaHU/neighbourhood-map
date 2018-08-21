import React, { Component } from "react";

import { Marker } from "react-mapbox-gl";
import MarkerImg from "./images/map-marker-alt-solid.svg";
import MarkerImgActive from "./images/map-marker-alt-solid-active.svg";


class MBMarker extends Component {
  render() {

    //conditional rendering of the markers
    //the condition matches the rendered location object's id with the currently active object in the state of App.js

    let isActive = this.props.venue.id === this.props.activeObj;

    const name = this.props.venue.name ? this.props.venue.name : 'Venue - no name available'

    return (
      <Marker
        key={this.props.venue.id}
        onClick={this.props.handleMarker}
        value={this.props.venue.id}
        className="marker"
        coordinates={[this.props.venue.location.lng, this.props.venue.location.lat]}
        anchor="bottom"
      >
          <img
            alt={name}
            id={this.props.venue.id}
            src={isActive ? MarkerImgActive : MarkerImg}
          />
      </Marker>
    );
  }
}

export default MBMarker;
