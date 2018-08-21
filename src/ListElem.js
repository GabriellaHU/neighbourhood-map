import React, { Component } from "react";

import "./App.css";

class ListElem extends Component {
  render() {

    //conditional rendering of the sidebar list items
    //the condition matches the rendered location object's id with the currently active object in the state of App.js
    let isActive = this.props.venue.id === this.props.activeObj;

    const name = this.props.venue.name ? this.props.venue.name : 'Venue - no name available'

    return (

        //a button is wrapped in the list element, because it handles focus and the enter keypress by default
        <li
            aria-label="venue"
            role="menuitem"
        >
            <button
              className={isActive ? 'active-li' : 'inactive-li'}
              name="venue"
              key={this.props.venue.id}
              onClick={e => {
                this.props.handleSidebar(e, this.props.venue.id);
                }}
        >
             {name}
           </button>
        </li>

    );
  }
}

export default ListElem;
