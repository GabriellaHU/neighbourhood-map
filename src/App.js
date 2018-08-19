import React, { Component } from "react";

import Sidebar from "./Sidebar";
import MapBox from "./ReactMapBox";

import "./App.css";


class App extends Component {
  // locations: an array of location objects, that is passed down to the Sidebar and MapBox Components
  // activeObj: the currently active location object
  // filteredObj: the object defined by the dropdown menu filter
  state = {
    locations: [
      {
        id: "0",
        place: "Nika Restaurant",
        address: "Budapest, Kossuth Lajos u. 7.",
        lngLat: [19.058298, 47.493740]
      },
      {
        id: "1",
        place: "Mandragora Restaurant",
        address: "Budapest, Kacsa utca",
        lngLat: [19.034505, 47.509906]
      },
      {
        id: "2",
        place: "Marangona Gastro Point",
        address: "Budapest, Bimbó út 2.",
        lngLat: [19.029968, 47.511981]
      },
      {
        id: "3",
        place: "Búsuló Juhász Restaurant",
        address: "Budapest, Kelenhegyi út 58.",
        lngLat: [19.040212, 47.485351]
      },
      {
        id: "4",
        place: "Vakvarjú Restaurant",
        address: "Budapest, Paulay Ede u. 7.",
        lngLat: [19.055999, 47.499504]
      }
    ],

    activeObj: "",
    filteredObj: [],
  };


  //function applied to markers that sets the id for the active location object
  //the markers can only be activated, when no filtering is applied
  handleSidebar= (e, id) => {
    const value = id;
    if (this.state.filteredObj.length === 0) {
      this.setState({ activeObj: value });
    }
  };

  //function applied to list items that sets the id for the active location object
  //the list items can only be activated, when no filtering is applied
  handleMarker= e => {
    const value = e.target.id;
    if (this.state.filteredObj.length === 0) {
      this.setState({ activeObj: value });
    }
  };

  //function that filters the locations based on the dropdown menu selection
  handleChange = e => {
    const value = e.target.value;
    const filteredObj = this.state.locations[value];
    this.setState({ activeObj: value });
    this.setState({ filteredObj: [filteredObj] });
  };

  //function that resets filtering, when the button is clicked
  resetFilter = e => {
    this.setState({ filteredObj: [] });
  };

  //function that removes the active popup, when it is clicked
  //the function works only when no filtering is applied
  //closing the popup resets the active location
  removePopup = () => {
    if (this.state.filteredObj.length === 0) {
      this.setState({ activeObj: "" });
    }
  };

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="app-title">Neighbourhood Map - Fine Dining</h1>
        </header>
        <a
          href="#location-select"
          className="skip-link"
          >
          Skip to location selector
        </a>
        <main className="main">
          <Sidebar
            key="sidebar"
            locations={this.state.locations}
            activeObj={this.state.activeObj}
            filteredObj={this.state.filteredObj}
            handleChange={this.handleChange}
            handleSidebar={this.handleSidebar}
            resetFilter={this.resetFilter}
            pictures={this.state.pictures}
          />
          <MapBox
            key="mapbox"
            locations={this.state.locations}
            activeObj={this.state.activeObj}
            filteredObj={this.state.filteredObj}
            handleMarker={this.handleMarker}
            removePopup={this.removePopup}
          />
        </main>
      </div>
    );
  }
}

export default App;
