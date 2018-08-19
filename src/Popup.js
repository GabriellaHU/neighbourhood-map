import React, { Component } from "react";

import ReactMapboxGl, { Popup } from "react-mapbox-gl";


class MBPopup extends Component{


  componentDidMount(){
   this.popupRef.current.focus()
  }

  render() {

  return (
    <Popup
      className="popup"
      onClick={this.props.removePopup}
      coordinates={this.props.locations.lngLat}
      offset={{
        "bottom-left": [12, -38],
        "bottom": [0, -58],
        "bottom-right": [-12, -38]
      }}
    >
      <h1
        tabIndex="-1"
        ref={this.popupRef = React.createRef()}
      >{this.props.locations.place}</h1>
      <p>{this.props.locations.address}</p>
    </Popup>
  );
}
}

export default MBPopup;
