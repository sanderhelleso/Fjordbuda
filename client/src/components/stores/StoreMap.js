import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class StoreMap extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      // add shadow to map
      const mapCont = document.querySelector('#storeMap').querySelectorAll('div');
      mapCont[1].classList.add('z-depth-1');

      console.log(this.props);
  }

  render() {
    return (
      <div id='storeMap'>
        <Map google={this.props.google}
        style={style}
        zoom={14} 
        initialCenter={{
          lat: this.props.coords.lat,
          lng: this.props.coords.lng
        }}>
            <Marker onClick={this.onMarkerClick} name={'Current location'} />
        </Map>
      </div>
    );
  }
}

const style = {
  width: '100%',
  height: '60%'
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyC2UTPtvIYdfJ0-Q2tFNsHQPrOKVxZR4Qc')
})(StoreMap)