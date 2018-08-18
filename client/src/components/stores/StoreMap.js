import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class StoreMap extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} initialCenter={{
        lat: 63.44,
        lng: 10.4
      }}>
          <Marker onClick={this.onMarkerClick} name={'Current location'} />
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyC2UTPtvIYdfJ0-Q2tFNsHQPrOKVxZR4Qc')
})(StoreMap)