import React, { Component } from 'react';

import ReactMapboxGl, { Marker} from 'react-mapbox-gl';
import markerImg from './images/map-marker-alt-solid.svg';
import markerImgActive from './images/map-marker-alt-solid-active.svg';

class MBMarker extends Component {

  state= {
    markerColor: markerImg
  }

  handleChange = (event) => {
    console.log(event);
    if (this.state.markerColor === markerImg) {
    this.setState({markerColor: markerImgActive})
  } else {
    this.setState({markerColor: markerImg})
  }
}

  render() {


    return(

    <Marker
      onClick={this.handleChange}
      coordinates={this.props.coordinates}
      className="marker"
      anchor="bottom">
        <img src={this.state.markerColor}/>
    </Marker>

  );

  }
}


export default MBMarker
