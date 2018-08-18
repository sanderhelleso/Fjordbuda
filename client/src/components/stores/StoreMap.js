import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class StoreMap extends Component {

  componentDidMount() {
      const mapCont = document.querySelector('#storeMap').querySelectorAll('div');
      mapCont[2].classList.add('z-depth-1');
      mapCont[2].style.zIndex = '-1';
      mapCont[1].style.position = 'static';

      const mapBtns = Array.from(document.querySelector('#storeMap').querySelectorAll('div'));
      mapBtns.forEach(map => {
        console.log(map);
      });

  }

  render() {
    return (
      <Map google={this.props.google}
      style={style}
      zoom={14} 
      initialCenter={{
        lat: 63.44,
        lng: 10.4
      }}>
          <Marker onClick={this.onMarkerClick} name={'Current location'} />
      </Map>
    );
  }
}

const style = {
  width: '100%',
  height: '50%',
  top: '50%',
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyC2UTPtvIYdfJ0-Q2tFNsHQPrOKVxZR4Qc')
})(StoreMap)