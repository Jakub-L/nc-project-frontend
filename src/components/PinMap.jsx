import React, { Component } from 'react';
import {
  Map, Marker, TileLayer, ZoomControl,
} from 'react-leaflet';
import { PinPopup } from './index';
import '../styles/PinMap.css';
import sampleLocations from '../sample-data/locations.json';

class PinMap extends Component {
  state = {
    center: [53.78, -1.55],
    zoom: 14,
    attributionText: '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    locations: sampleLocations,
    showModal: false,
    modalLocation: {},
  };

  handlePinClick = (pin_id) => {
    const { locations } = this.state;
    const modalLocation = locations.filter(location => location.pin_id === pin_id)[0];
    this.setState({ showModal: true, modalLocation });
  };

  handleModalClose = () => {
    this.setState({ showModal: false, modalLocation: {} });
  };

  render() {
    const {
      center,
      zoom,
      attributionText,
      tileLayerUrl,
      locations,
      showModal,
      modalLocation,
    } = this.state;
    return (
      <div className="PinMap">
        <Map id="map-container" center={center} zoom={zoom} zoomControl={false}>
          <TileLayer attribution={attributionText} url={tileLayerUrl} />
          {locations.map((location) => {
            const { longitude, latitude, pin_id } = location;
            return (
              <Marker
                key={pin_id}
                position={[latitude, longitude]}
                onClick={() => this.handlePinClick(pin_id)}
              />
            );
          })}
          <PinPopup location={modalLocation} show={showModal} handleClose={this.handleModalClose} />
          <ZoomControl position="bottomright" />
        </Map>
      </div>
    );
  }
}

export default PinMap;
