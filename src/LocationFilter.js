import React, { Component } from "react";

class Filter extends Component {

  render() {
    const { locations } = this.props;

    return (
      <section className="location-selector">
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
          {this.props.locations.map(location => (
            <option value={location.id} key={location.id}>
              {location.place}
            </option>
          ))}
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
