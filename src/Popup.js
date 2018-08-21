import React, { Component } from "react";

import { Popup } from "react-mapbox-gl";


class MBPopup extends Component{


  componentDidMount(){
    this.popupRef.current.focus()

  }

  render() {

  const name = this.props.venue.name ? this.props.venue.name : 'Venue - no name available'
  const address = this.props.venue.location.address ? this.props.venue.location.address : 'Budapest'

  return (
    <Popup
      className="popup"
      onClick={this.props.removePopup}
      coordinates={[this.props.venue.location.lng, this.props.venue.location.lat]}
      offset={{
        "bottom-left": [12, -38],
        "bottom": [0, -58],
        "bottom-right": [-12, -38]
      }}
    >
    <article
      tabIndex="-1"
      ref={this.popupRef = React.createRef()}
      aria-label="venue-info"
      role="dialog"
    >
      <h1>
        {name}
      </h1>
      <p>
        <span>{address}</span>
      </p>
    </article>
    </Popup>
  );
}
}

export default MBPopup;
