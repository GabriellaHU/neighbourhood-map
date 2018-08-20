import React, { Component } from "react";

import ReactMapboxGl, { Popup } from "react-mapbox-gl";


class MBPopup extends Component{


  componentDidMount(){
   this.popupRef.current.focus()
  }

  render() {

  return (
    <Popup
      tabIndex="0"
      className="popup"
      onClick={this.props.removePopup}
      coordinates={[this.props.venue.location.lng, this.props.venue.location.lat]}
      offset={{
        "bottom-left": [12, -38],
        "bottom": [0, -58],
        "bottom-right": [-12, -38]
      }}
    >
      <h1
        tabIndex="-1"
        ref={this.popupRef = React.createRef()}
      >{this.props.venue.name}</h1>
      <p>{this.props.venue.location.address}</p>
    </Popup>
  );
}
}

export default MBPopup;
