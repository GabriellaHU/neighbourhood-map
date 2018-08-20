import React, { Component } from "react";

class Filter extends Component {

  render() {
    const { venues } = this.props;

    return (
      <section id="location-filter">
        <select
          aria-label="location-selector"
          id="location-select"
          name="location-selector"
          onChange={this.props.handleChange}
          value={"selector"}
        >
          <option value="" defaultValue>
            Select an option
          </option>
          {venues.map(venue => {
            return (
              <option
                value={venue.venue.id}
                key={venue.venue.id}>
                  {venue.venue.name}
              </option>
            )
          })}
        </select>
        <button
          className="reset"
          type="reset"
          name="reset"
          value="reset"
          onClick={this.props.resetFilter}
        >
          Reset Filter
        </button>
      </section>
    );
  }
}

export default Filter;
