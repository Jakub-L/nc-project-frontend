import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';
import '../styles/PinMap.css';

class PinMap extends Component {
  state = {
    center: [53.795, -1.55],
    zoom: 16,
    attributionText: '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  };

  render() {
    const { center, zoom, attributionText, tileLayerUrl } = this.state;
    return (
      <div className="PinMap">
        <Map id="map-container" center={center} zoom={zoom}>
          <TileLayer attribution={attributionText} url={tileLayerUrl} />
        </Map>
      </div>
    );
  }
}

PinMap.propTypes = {};

export default PinMap;
