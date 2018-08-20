import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { getStores } from '../../globals/stores';
 
export class StoreMap extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      // add shadow to map
      const mapCont = document.querySelector('#storeMap').querySelectorAll('div');
      mapCont[1].classList.add('z-depth-1');

      console.log(this.props);
      this.createMarker();
  }

  createMarker() {
    return getStores().map(store => {
      return <Marker key={store.adress} position={{lat: store.coordinates.lat, lng: store.coordinates.lng}} />
    });
  }

  render() {
    // render specific store map
    if (!this.props.all) {
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

    // render all stores on map
    else {
      return (
        <div id='storeMap'>
          <Map google={this.props.google}
            style={style}
            className={'map'}
            zoom={6}
            initialCenter={{
              lat: 62.121,
              lng: 7.129
            }}>
            
            {this.createMarker()}
          </Map>
        </div>
      );
    }
  }
}

const style = {
  width: '100%',
  height: '60%'
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyC2UTPtvIYdfJ0-Q2tFNsHQPrOKVxZR4Qc')
})(StoreMap)