import React, { Component } from "react";

import ListElem from "./ListElem";
import Image from "./Image";
import Filter from "./LocationFilter";
import FoursquareLogo from "./images/powered-by-foursquare-white.svg";

import "./App.css";

class Sidebar extends Component {
  render() {
    const { venues } = this.props;
    const { activeObj } = this.props;
    const { filteredObj } = this.props;
    const { handleSidebar } = this.props;

    let isActivated = false;
    if (activeObj.length > 0) {
      isActivated = true;
    }

    let activeVenue = isActivated
      ? venues.filter(venue => venue.venue.id === activeObj)
      : false;

    return (
      <aside className="sidebar">
        <Image pictures={this.props.pictures} />

        <Filter
          venues={venues}
          handleChange={this.props.handleChange}
          handleSidebar={this.props.handleSidebar}
          resetFilter={this.props.resetFilter}
        />

        <section id="menu">
          <ul
            className="menu"
            aria-label="venue list"
            role="menu"
          >
            {filteredObj
              ? activeVenue.map(venue => {
                  return (
                    <ListElem
                      key={venue.venue.id}
                      id={venue.venue.id}
                      handleSidebar={handleSidebar}
                      activeObj={activeObj}
                      venue={venue.venue}
                    />
                  );
                })
              : venues.map(venue => {
                  return (
                    <ListElem
                      key={venue.venue.id}
                      id={venue.venue.id}
                      handleSidebar={handleSidebar}
                      activeObj={activeObj}
                      venue={venue.venue}
                    />
                  );
                })}
          </ul>
        </section>

        <section className="credential">
          <span>venue data</span>
          <a href="https://developer.foursquare.com/places-api">
            <img
              alt="Powered by FourSquare"
              className="foursquare-logo"
              src={FoursquareLogo}
            />
          </a>
        </section>
      </aside>
    );
  }
}

export default Sidebar;
