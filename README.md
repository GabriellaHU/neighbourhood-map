# Neighbourhood Map App

A small React application that diplays a map with several markers and a sidebar with the list of locations.
The markers can be clicked to open up an additional infowindow, and look distinct from the other markers, when active.
Locations and markers can be filtered by the searchbar synchronously.
The app uses the Unsplash API to fetch photos.
The application is fully responsive and accessible.
The project uses React's own ServiceWorker.


## Getting Started

   These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

   **Pre-requisites**: Install [git](https://gitforwindows.org/), [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) on your computer.

   1. Get a local copy of this repo by typing: `<git clone https://github.com/GabriellaHU/neighbourhood-map.git>` to the terminal. (Or download the zip file and unzip it.)
   2. Enter the project folder in your terminal and run <`serve-s build`>
   3. Navigate to `localhost:5000` in your browser to explore the app. Review the files in your preferred code editor.

   **Optional:**
   In case you wish to use the code for development purposes, you can type `npm start` to the terminal, and navigate to `localhost:3000`.
   (You can setup the ServiceWorker with `npm run build` afterwards.)
   In this case, please [create your own MapBox API key](https://www.mapbox.com/signup/?route-to=%22/account/%22), and replace the current one in the MapBox.js file.


## Built With

   * HTML5
   * CSS
   * JS6
   * [React](https://reactjs.org/)
   * [Create React App](https://github.com/facebookincubator/create-react-app)
   * [MapBox GL JS](https://www.mapbox.com/mapbox-gl-js/api/)
   * [React Mapbox GL](https://github.com/alex3165/react-mapbox-gl)
   * [Prettier](https://prettier.io/) (a code formatting plugin for Atom)
   * [Unsplash API](https://unsplash.com/developers)
   * [FourSquare API](https://developer.foursquare.com/places-api)




## Contributing
The purpose of this project was educational, thus pull requests will likely not be excepted.
