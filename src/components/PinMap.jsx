import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Map, Marker, TileLayer, ZoomControl,
} from 'react-leaflet';
import { PinPopup } from './index';
import * as api from '../utils/api';
import '../styles/PinMap.css';

class PinMap extends Component {
  state = {
    bounds: [[0, 0], [180, 0]],
    attributionText: '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    locations: [],
    showModal: false,
    modalLocation: {},
    imageLoading: true,
  };

  componentDidMount() {
    api.getPins().then((locations) => {
      const lats = locations.map(loc => +loc.latitude);
      const long = locations.map(loc => +loc.longitude);
      const bounds = [
        [Math.min(...lats) - 0.01, Math.min(...long) - 0.01],
        [Math.max(...lats) + 0.01, Math.max(...long) + 0.01],
      ];
      this.setState({ locations, bounds });
    });
  }

  handlePinClick = (pin_id) => {
    const { locations } = this.state;
    const bounds = this.refs.map.leafletElement.getBounds();
    const modalLocation = locations.filter(location => location.pin_id === pin_id)[0];
    this.setState({ showModal: true, modalLocation, bounds });
  };

  handleModalClose = () => {
    this.setState({ showModal: false, modalLocation: {}, imageLoading: true });
  };

  handleLoad = () => {
    const { endLoading, loading } = this.props;
    if (loading) setTimeout(endLoading, 750);
  };

  handleImageLoad = () => {
    this.setState({ imageLoading: false });
  }

  render() {
    const {
      bounds,
      attributionText,
      tileLayerUrl,
      locations,
      showModal,
      modalLocation,
      imageLoading,
    } = this.state;
    const { loading } = this.props;
    return (
      <div className={`PinMap${loading ? ' map-loading' : ''}`}>
        <Map
          id="map-container"
          bounds={bounds}
          boundsOptions={{ padding: [0, 0] }}
          zoomControl={false}
          ref="map"
        >
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
          <PinPopup location={modalLocation} show={showModal} handleClose={this.handleModalClose} handleImageLoad={this.handleImageLoad} imageLoading={imageLoading} />
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
