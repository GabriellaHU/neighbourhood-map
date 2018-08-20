import React, { Component } from "react";

import ListElem from "./ListElem2";
import Image from "./Image";
import Filter from "./LocationFilter2";

import "./App.css";


class Sidebar extends Component {
  render() {
    const { locations } = this.props;
    const { venues } = this.props;
    const { activeObj } = this.props;
    const { filteredObj } = this.props;
    const { handleSidebar } = this.props;

    let isFiltered = false;
    if (filteredObj.length > 0) {
      isFiltered = true;
    }

    return (
      <aside className="sidebar">

        <Image pictures = {this.props.pictures} />

        <Filter
          locations={this.props.locations}
          venues={venues}
          handleChange={this.props.handleChange}
          handleSidebar={this.props.handleSidebar}
          resetFilter={this.props.resetFilter}
        />

        <section
          id="menu">
          <ul
            className="menu">

              {venues.map(venue => {
                return(
                  <ListElem
                    key={venue.venue.id}
                    id={venue.venue.id}
                    handleSidebar={handleSidebar}
                    activeObj={activeObj}
                    venue={venue.venue}
                  />
                )})}

          </ul>

        </section>
      </aside>
    );
  }
}

export default Sidebar;
