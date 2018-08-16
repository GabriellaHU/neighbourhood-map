import React, { Component } from "react";

import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import MarkerImg from "./images/map-marker-alt-solid.svg";
import MarkerImgActive from "./images/map-marker-alt-solid-active.svg";


class MBMarker extends Component {
  render() {

    //conditional rendering of the markers
    //the condition matches the rendered location object's id with the currently active object in the state of App.js

    let isActive = this.props.location.id === this.props.activeObj;

    return (
      <Marker
        key={this.props.location.id}
        onClick={this.props.handleMarker}
        value={this.props.location.id}
        className="marker"
        coordinates={this.props.location.lngLat}
        anchor="bottom"
      >
          <img
            alt={this.props.location.place}
            id={this.props.location.id}
            src={isActive ? MarkerImgActive : MarkerImg}
          />
      </Marker>
    );
  }
}

export default MBMarker;
