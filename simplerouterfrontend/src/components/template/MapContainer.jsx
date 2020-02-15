import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';


import './MapContainer.css'

class MapContainer extends React.Component{

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
  }
}

export default GoogleApiWrapper({
})(MapContainer);
