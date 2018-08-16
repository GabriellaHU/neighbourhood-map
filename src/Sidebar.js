import React, { Component } from "react";

import ListElem from "./ListElem";
import Image from "./Image";
import Filter from "./LocationFilter";

import "./App.css";


class Sidebar extends Component {
  render() {
    const { locations } = this.props;
    const { activeObj } = this.props;
    const { filteredObj } = this.props;

    let isFiltered = false;
    if (filteredObj.length > 0) {
      isFiltered = true;
    }

    return (
      <aside className="sidebar">

        <Image pictures = {this.props.pictures} />

        <Filter
          locations={this.props.locations}
          handleChange={this.props.handleChange}
          handleSidebar={this.props.handleSidebar}
          resetFilter={this.props.resetFilter}
        />

        <section
          id="menu">
          <ul
            className="menu">

              {isFiltered
                ? filteredObj.map(location => (
                    <ListElem
                      key={location.id}
                      handleSidebar={this.props.handleSidebar}
                      activeObj={this.props.activeObj}
                      locations={location}
                    />
                  ))
                : locations.map(location => (
                    <ListElem
                      key={location.id}
                      handleSidebar={this.props.handleSidebar}
                      activeObj={this.props.activeObj}
                      locations={location}
                    />
                  ))
                }
            </ul>

        </section>
      </aside>
    );
  }
}

export default Sidebar;
