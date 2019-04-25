import React, { Component } from 'react';
import {
  Map as LeafletMap, TileLayer, Marker, Popup
} from 'react-leaflet';

// eslint-disable-next-line react/prefer-stateless-function
class RentMap extends Component {
  render() {
    return (
      <LeafletMap
        center={[50.5202, 30.4993]}
        zoom={14}
        maxZoom={20}
        attributionControl
        zoomControl
        doubleClickZoom
        scrollWheelZoom
        dragging
        animate
        easeLinearity={0.35}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={[50.5202, 30.4993]}>
          <Popup>
            Drill 2
          </Popup>
        </Marker>
        <Marker position={[50.5197, 30.5081]}>
          <Popup>
            Drill 1
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default RentMap;
