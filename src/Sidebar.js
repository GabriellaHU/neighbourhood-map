
import React, { Component } from "react";

import ListElem from "./ListElem";
import Image from "./Image";
import Filter from "./LocationFilter";

import "./App.css";


class Sidebar extends Component {
  render() {
    const { locations } = this.props;
    const { venues } = this.props;
    const { activeObj } = this.props;
    const { filteredObj } = this.props;
    const { handleSidebar } = this.props;
    const { handleKeyPress } = this.props;

    let isActivated = false;
    if (activeObj.length > 0) {
      isActivated = true;
    }

    let activeVenue = isActivated ? venues.filter(venue => venue.venue.id === activeObj) : false

    return (
      <aside className="sidebar">

        <Image pictures = {this.props.pictures} />

        <Filter
          venues={venues}
          handleChange={this.props.handleChange}
          handleSidebar={this.props.handleSidebar}
          resetFilter={this.props.resetFilter}
        />

        <section
          id="menu">
          <ul
            className="menu"
            tabIndex="0"
            aria-label="location-menu"
            role="menu">

              {filteredObj
                ? activeVenue.map(venue => {
                return(
                  <ListElem
                    key={venue.venue.id}
                    id={venue.venue.id}
                    handleSidebar={handleSidebar}
                    activeObj={activeObj}
                    venue={venue.venue}
                  />
                )}) :
                venues.map(venue => {
                return(
                  <ListElem
                    key={venue.venue.id}
                    id={venue.venue.id}
                    handleSidebar={handleSidebar}
                    activeObj={activeObj}
                    venue={venue.venue}
                  />
                )})
              }

          </ul>
        </section>
      </aside>
    );
  }
}

export default Sidebar;
