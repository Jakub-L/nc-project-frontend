import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';
import '../styles/PinMap.css';

const PinMap = props => (
  <div className="PinMap">
    <Map id="map-container" center={[53.795, -1.55]} zoom={16}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        // url="http://a.tile.stamen.com/toner/{z}/{x}/{y}.png"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  </div>
);

PinMap.propTypes = {};

export default PinMap;
