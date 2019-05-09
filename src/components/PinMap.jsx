import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  handleLoad = () => {
    const { endLoading, loading } = this.props;
    if (loading) setTimeout(endLoading, 750);
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
    const { loading } = this.props;
    return (
      <div className={`PinMap${loading ? ' map-loading' : ''}`}>
        <Map id="map-container" center={center} zoom={zoom} zoomControl={false}>
          <TileLayer attribution={attributionText} url={tileLayerUrl} onLoad={this.handleLoad} />
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

PinMap.propTypes = {
  endLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PinMap;
