import React, { Component } from 'react';
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet';
import '../styles/PinMap.css';
import sampleLocations from '../sample-data/locations.json';

class PinMap extends Component {
  state = {
    center: [53.78, -1.55],
    zoom: 14,
    attributionText: '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    locations: sampleLocations,
  };

  render() {
    const {
      center, zoom, attributionText, tileLayerUrl, locations,
    } = this.state;
    return (
      <div className="PinMap">
        <Map id="map-container" center={center} zoom={zoom}>
          <TileLayer attribution={attributionText} url={tileLayerUrl} />
          {locations.map((location) => {
            const {
              longitude, latitude, note, photo_url, pin_id,
            } = location;
            return (
              <Marker key={pin_id} position={[latitude, longitude]}>
                <Popup>
                  <img src={photo_url} alt="Pin" />
                  {note}
                </Popup>
              </Marker>
            );
          })}
        </Map>
      </div>
    );
  }
}

export default PinMap;
