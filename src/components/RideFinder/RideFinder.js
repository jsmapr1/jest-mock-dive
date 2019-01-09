import React, { Component } from 'react';
import renderMap from 'streetMap';

export default class RideFinder extends Component {

  componentDidMount() {
    renderMap()
  }

  render() {
    return(
      <div>
        <h1>Find a Ride</h1>
        <div id="map"></div>
      </div>
    )
  }
}
