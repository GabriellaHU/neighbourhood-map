import React, { Component } from "react";

import ReactMapboxGl, { Popup } from "react-mapbox-gl";


class MBPopup extends Component{


  componentDidMount(){
   this.popupRef.current.focus()
  }

  render() {

  const name = this.props.venue.name ? this.props.venue.name : 'Venue - no name available'
  const address = this.props.venue.location.address ? this.props.venue.location.address : 'Budapest'

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
      >
        {name}
      </h1>
      <p>
        <span>{address}</span>
      </p>

    </Popup>
  );
}
}

export default MBPopup;
