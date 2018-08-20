import React, { Component } from "react";

import "./App.css";

class ListElem extends Component {
  render() {

    //conditional rendering of the sidebar list items
    //the condition matches the rendered location object's id with the currently active object in the state of App.js
    let isActive = this.props.venue.id === this.props.activeObj;

    return (


          <li
            className={isActive ? 'active-li' : 'inactive-li'}
            tabIndex="0"
            key={this.props.venue.id}
            onClick={e => {
              this.props.handleSidebar(e, this.props.venue.id);
            }}
          >
            {this.props.venue.name}
          </li>

    );
  }
}

export default ListElem;
