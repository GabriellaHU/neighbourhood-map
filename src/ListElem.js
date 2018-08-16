import React, { Component } from "react";

import "./App.css";

class ListElem extends Component {
  render() {

    //conditional rendering of the sidebar list items
    //the condition matches the rendered location object's id with the currently active object in the state of App.js
    let isActive = this.props.locations.id === this.props.activeObj;

    return (


          <li
            className={isActive ? 'active-li' : 'inactive-li'}
            key={this.props.locations.id}
            onClick={e => {
              this.props.handleSidebar(e, this.props.id);
            }}
          >
            {this.props.locations.place}
          </li>

    );
  }
}

export default ListElem;
