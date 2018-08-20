import React, { Component } from "react";

import Sidebar from "./Sidebar";
import MapBox from "./ReactMapBox";

import "./App.css";


class App extends Component {
  // locations: an array of location objects, that is passed down to the Sidebar and MapBox Components
  // activeObj: the currently active location object
  // filteredObj: the object defined by the dropdown menu filter
  state = {
    venues: [],
    activeObj: "",
    filteredObj: false,
    activeVenue: []
  };

  componentDidMount() {
     this.getVenues()
  }



  //fetch locations
  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "DP4U0LSQBGXTHOHAG2MNOSUHBKT41THUL30Y5Q2HJLZ3ZUZA",
      client_secret: "EC1CO5SHA1XNKFMIUF5BQVB3L3RLDL3QHLBFI5IJ42B25E5P",
      ll: "47.511981, 19.029968",
      radius: "250",
      limit: '5',
      query: "food",
      v: "20182008"
    }


   fetch(endPoint + new URLSearchParams(parameters))
      .then(response => response.json())
      .then(data => this.setState({venues: data.response.groups[0].items}))
      .catch(error => console.log(`Error: ${error}`));
  }


  //function applied to markers that sets the id for the active location object
  //the markers can only be activated, when no filtering is applied
  handleSidebar= (e, id) => {
    const value = id;
    if (this.state.filteredObj === false) {
      this.setState({ activeObj: value });
    }
  };

  //function applied to list items that sets the id for the active location object
  //the list items can only be activated, when no filtering is applied
  handleMarker= e => {
    const value = e.target.id;
    if (this.state.filteredObj === false) {
      this.setState({ activeObj: value });
    }
  };

  //function that filters the locations based on the dropdown menu selection
  handleChange = e => {
    const value = e.target.value;
    this.setState({ activeObj: value });
    this.setState({ filteredObj: true });
  };

  //function that resets filtering, when the button is clicked
  resetFilter = e => {
    this.setState({ filteredObj: false });
    this.setState({ activeObj: "" });
  };

  //function that removes the active popup, when it is clicked
  //the function works only when no filtering is applied
  //closing the popup resets the active location
  removePopup = () => {
    if (this.state.filteredObj === false) {
      this.setState({ activeObj: "" });
    }
  };

  render() {


    return (
      <div className="app">
        <header className="header">
          <h1 className="app-title">Neighbourhood Map - Fine Dining</h1>
          <a
            href="#location-select"
            className="skip-link"
            >
            Skip to location selector
          </a>
        </header>
        <main className="main">
          <Sidebar
            key="sidebar"
            venues={this.state.venues}
            activeObj={this.state.activeObj}
            filteredObj={this.state.filteredObj}
            handleChange={this.handleChange}
            handleSidebar={this.handleSidebar}
            resetFilter={this.resetFilter}
            pictures={this.state.pictures}
          />
          <section className="map-container" aria-role="application">
           <MapBox
             key="mapbox"
             venues={this.state.venues}
             activeObj={this.state.activeObj}
             filteredObj={this.state.filteredObj}
             handleMarker={this.handleMarker}
             removePopup={this.removePopup}
          />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
